'use strict';

const SsmlBuilder = require('../base/SsmlBuilder');
const SsmlTag = require('../base/SsmlTag');
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

    static _typeCheck(content) {
        if (!(content instanceof SsmlTag) && !Array.isArray(content)) {
            throw new Error('First argument of par , seq, or media must be an instance of SsmlTag or array');
        }
    }

    static _childrenCheck(children, content) {
        if (content instanceof SsmlTag) {
            if (!SsmlBuilder._checkAuthorized(children, content.name, false)) {
                throw new Error(`Tag content must be one of ${Object.values(children)}`);
            }
        } else {
            content.map(el => {
                if (!SsmlBuilder._checkAuthorized(children, el.name, false)) {
                    throw new Error(`Tag content must be one of ${Object.values(children)}`);
                }
            });
        }
    }

    static _mediaContainerChecks(aChildren, aOpts, content, opts) {
        GoogleSsmlBuilder._typeCheck(content);
        GoogleSsmlBuilder._childrenCheck(aChildren, content);
        if (opts && typeof opts === typeof {}) {
            Object.keys(opts).map(k => SsmlBuilder._checkAuthorized(aOpts, k));
        }
    }

    addPar (content, opts) {
        this._elements.push(par(content, opts));
        return this;
    }

    addSeq (content, opts) {
        this._elements.push(seq(content, opts));
        return this;
    }

    addMedia(content, opts) {
        this._elements.push(media(content, opts));
        return this;
    }
}
module.exports = GoogleSsmlBuilder;

function par (content, opts) {
    GoogleSsmlBuilder._mediaContainerChecks(containerChildren, containerOpts, content, opts);
    return SsmlBuilder._tags('par', content, opts);
}
module.exports.par = par;

function seq (content, opts) {
    GoogleSsmlBuilder._mediaContainerChecks(containerChildren, containerOpts, content, opts);
    return SsmlBuilder._tags('seq', content, opts);
}
module.exports.seq = seq;

function media (content, opts) {
    GoogleSsmlBuilder._mediaContainerChecks(mediaChildren, mediaOpts, content, opts);
    return SsmlBuilder._tags('media', content, opts);
}
module.exports.media = media;
