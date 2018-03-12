'use strict';

const SsmlBuilder = require('../base/SsmlBuilder');
const { amazonEffects, phonemeAlphabets, wRoles } = require('./alexaSsmlConstants');

class AmazonSsmlBuilder extends SsmlBuilder {
    constructor () {
        super();
    }

    addAmazonEffect (content, effect) {
        this._elements.push(amazonEffect(content, effect));
        return this;
    }

    addPhoneme (content, alphabet, ph) {
        this._elements.push(phoneme(content, alphabet, ph));
        return this;
    }

    addW (content, role) {
        this._elements.push(w(content, role));
        return this;
    }
}
module.exports = AmazonSsmlBuilder;

function amazonEffect(content, effect) {
    SsmlBuilder._checkAuthorized(amazonEffects, effect);
    return SsmlBuilder._tags('amazon:effect', content, {name: effect});
}
module.exports.amazonEffects = amazonEffect;

function phoneme(content, alphabet, ph) {
    if (!alphabet || !ph) {
        let missing = !alphabet ? 'alphabet' : 'ph';
        throw new Error(`Both alphabet and ph arguments are needed for phoneme tag, ${missing} missing.`);
    }
    SsmlBuilder._checkAuthorized(phonemeAlphabets, alphabet);
    return SsmlBuilder._tags('phoneme', content, {alphabet: alphabet, ph: ph});
}
module.exports.phoneme = phoneme;

function w(content, role) {
    SsmlBuilder._checkAuthorized(wRoles, role);
    return SsmlBuilder._tags('w', content, {role: role});
}
