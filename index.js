'use strict';

const SsmlBuilder = require('./lib/SsmlBuilder');
const SsmlTag = require('./lib/SsmlTag');
const GoogleSsmlBuilder = require('./lib/GoogleSsmlBuilder');

const { speak, breakTag, sayAs, audio, p, s, sub, prosody, emphasis } = SsmlBuilder;
const { par, seq, media } = GoogleSsmlBuilder;

module.exports = {
    SsmlBuilder,
    SsmlTag,
    GoogleSsmlBuilder,
    speak,
    breakTag,
    sayAs,
    audio,
    p,
    s,
    sub,
    prosody,
    emphasis,
    par,
    seq,
    media
};