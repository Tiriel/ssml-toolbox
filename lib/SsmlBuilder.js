'use strict';

const { emLevels, interpretAs, audioOpt, prosodyOpts } = require('./ssmlConstants');
const SsmlTag = require('./SsmlTag');

class SsmlBuilder {
    constructor() {
        this._elements = [];
    }

    static _tags (tag, content, attr) {
        return new SsmlTag(tag, content, attr);
    }

    static _orphan (tag, attr) {
        return new SsmlTag(tag, attr, true);
    }

    static _checkAuthorized (types, type, strict = true) {
        if (strict && Object.values(types).includes(type) === false) {
            throw new InvalidArgumentError(`Type ${type} does not exist.`);
        }
        return Object.values(types).includes(type);
    };

    toString (doSpeak) {
        let content = this._elements.reduce((acc, cur) =>  acc + cur.toString(), '');
        this._elements = [];

        if (doSpeak) return speak(content).toString();
        return content;
    }

    say (text) {
        this._elements.push(text);
        return this;
    }

    addBreakTag (time, strength)  {
        this._elements.push(breakTag(time, strength));
        return this;
    }

    addSayAs (text, type, attr) {
        this._elements.push(sayAs(text, type, attr));
        return this;
    }

    addAudio (src, alt, opts) {
        this._elements.push(audio(src, alt, opts));
        return this;
    }

    addP (content) {
        this._elements.push(p(content));
        return this;
    }

    addS (content) {
        this._elements.push(s(content));
        return this;
    }

    addSub (text, alias) {
        this._elements.push(sub(text, alias));
        return this;
    }

    addProsody (text, opts) {
        this._elements.push(prosody(text, opts));
        return this;
    }

    addEmphasis (text, level) {
        this._elements.push(emphasis(text, level));
        return this;
    };
}
module.exports = SsmlBuilder;

function speak (text) {
    return SsmlBuilder._tags('speak', text);
}
module.exports.speak = speak;

function breakTag (time, strength) {
    return SsmlBuilder._orphan('break', {time: time, strength: strength});
}
module.exports.breakTag = breakTag;

function sayAs (text, type, attr) {
    SsmlBuilder._checkAuthorized(interpretAs, type);
    return SsmlBuilder._tags('say-as', text, {'interpret-as': type,  ...attr});
}
module.exports.sayAs = sayAs;

function audio (src, alt, opts) {
    opts = Object.assign({}, opts, {src: src});
    opts = Object
        .entries(opts)
        .filter(
            o => SsmlBuilder._checkAuthorized(audioOpt, o[0], false)
        )
        .reduce(
            (acc, cur) => {
                acc[cur[0]] = cur[1];
                return acc;
            },
            {}
        );
    return SsmlBuilder._tags('audio', alt, opts);
}
module.exports.audio = audio;

function p (content) {
    return SsmlBuilder._tags('p', content);
}
module.exports.p = p;

function s (content) {
    return SsmlBuilder._tags('s', content);
}
module.exports.s = s;

function sub (text, alias) {
    return SsmlBuilder._tags('sub', text, {alias: alias});
}
module.exports.sub = sub;

function prosody (text, opts) {
    if (typeof opts === typeof {}) {
        opts = Object.keys(opts).filter(o => SsmlBuilder._checkAuthorized(prosodyOpts, o, false));
    }
    return SsmlBuilder._tags('prosody', text, opts);
}
module.exports.prosody = prosody;

function emphasis (text, level) {
    SsmlBuilder._checkAuthorized(emLevels, level);
    return SsmlBuilder._tags('emphasis', text, {level: level});
}
module.exports.emphasis = emphasis;
