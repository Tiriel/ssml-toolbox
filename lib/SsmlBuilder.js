'use strict';

const { emLevels, interpretAs, audioOpt, prosodyOpts } = require('./ssmlConstants');
const SsmlTag = require('./SsmlTag');

class SsmlBuilder {
    constructor() {
        this._elements = [];
    }

    toString (speak) {
        let content = this._elements.reduce((acc, cur) =>  acc + cur.toString(), '');
        this._elements = [];

        if (speak) return new SsmlTag('speak', content).toString();
        return content;
    }

    say (text) {
        this._elements.push(text);
        return this;
    }

    breakTag (time, strength)  {
        this._elements.push(
            orphan('break', {time: time, strength: strength})
        );
        return this;
    }

    sayAs (text, type, attr) {
        checkAuthorized(interpretAs, type);

        this._elements.push(
            tags('say-as', text, {'interpret-as': type,  ...attr})
        );
        return this;
    }

    audio (src, alt, opts) {
        opts = Object.assign({}, opts, {src: src});
        opts = Object
            .entries(opts)
            .filter(
                o => checkAuthorized(audioOpt, o[0], false)
            )
            .reduce(
                (acc, cur) => {
                    acc[cur[0]] = cur[1];
                    return acc;
                    },
                {}
            );

        this._elements.push(
            tags('audio', alt, opts)
        );
        return this;
    }

    p (content) {
        this._elements.push(tags('p', content));
        return this;
    }

    s (content) {
        this._elements.push(tags('s', content));
        return this;
    }

    sub (text, alias) {
        this._elements.push(tags('sub', text, {alias: alias}));
        return this;
    }

    prosody (text, opts) {
        if (typeof opts === 'object') {
            opts = opts.keys().filter(o => checkAuthorized(prosodyOpts, o, false));
        }

        this._elements.push(tags('prosody', text, opts));
        return this;
    }

    emphasis (text, level) {
        checkAuthorized(emLevels, level);

        this._elements.push(
            tags('emphasis', text, {level: level})
        );
        return this;
    };
}
module.exports = SsmlBuilder;

const tags = function (tag, content, attr) {
    return new SsmlTag(tag, content, attr);
};

const orphan = function (tag, attr) {
    return new SsmlTag(tag, attr, true);
};

const checkAuthorized = (types, type, strict = true) => {
    if (strict && Object.values(types).includes(type) === false) {
        throw new InvalidArgumentError(`Level ${level} does not exist.`);
    }
    return Object.values(types).includes(type);
};