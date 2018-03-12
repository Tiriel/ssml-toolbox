'use strict';

const SsmlBuilder = require('./SsmlBuilder');
const SsmlTag = require('./SsmlTag');
const {
    containerChildren,
    containerOpts,
    mediaChildren,
    mediaOpts
} = require('./googleSsmlContants');

class GoogleSsmlBuilder extends SsmlBuilder {
    constructor() {
        super();
    }

    static _typeCheck() {
        if (!(content instanceof SsmlTag) || !(content instanceof Array)) {
            throw new InvalidArgumentError('First argument of par must be an instance of SsmlTag or array');
        }
    }

    static _childrenCheck(children, content) {
        if (content instanceof SsmlTag) {
            if (!SsmlBuilder._checkAuthorized(children, content.name(), false)) {
                throw new InvalidArgumentError(`Tag content must be one of ${Object.values(children)}`);
            }
        } else {
            content.map(el => {
                if (!SsmlBuilder._checkAuthorized(children, el.name(), false)) {
                    throw new InvalidArgumentError(`Tag content must be one of ${Object.values(children)}`);
                }
            });
        }
    }

    static _mediaContainerChecks(aChildren, aOpts, content, opts) {
        GoogleSsmlBuilder._typeCheck();
        GoogleSsmlBuilder._childrenCheck(aChildren, content);
        Object.keys(opts).map(k => SsmlBuilder._checkAuthorized(aOpts, k));
    }

    par (content, opts) {
        GoogleSsmlBuilder._mediaContainerChecks(containerChildren, containerOpts, content, opts);

        this._elements.push(SsmlBuilder._tags('par', content, opts));
        return this;
    }

    seq (content, opts) {
        GoogleSsmlBuilder._mediaContainerChecks(containerChildren, containerOpts, content, opts);

        this._elements.push(SsmlBuilder._tags('seq', content, opts));
        return this;
    }

    media(content, opts) {
        GoogleSsmlBuilder._mediaContainerChecks(mediaChildren, mediaOpts, content, opts);

        this._elements.push(SsmlBuilder._tags('media', content, opts));
        return this;
    }
}
module.exports = GoogleSsmlBuilder;