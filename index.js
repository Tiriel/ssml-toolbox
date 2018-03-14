'use strict';

const SsmlBuilder = require('./lib/base/SsmlBuilder');
const SsmlTag = require('./lib/base/SsmlTag');
const GoogleSsmlBuilder = require('./lib/google/GoogleSsmlBuilder');
const AlexaSsmlBuilder = require('./lib/aws/AlexaSsmlBuilder');

const { speak, breakTag, sayAs, audio, p, s, sub, prosody, emphasis } = SsmlBuilder;
const { par, seq, media } = GoogleSsmlBuilder;
const { amazonEffect, phoneme, w } = AlexaSsmlBuilder;

module.exports = {
    SsmlBuilder,
    SsmlTag,
    GoogleSsmlBuilder,
    AlexaSsmlBuilder,
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
    media,
    amazonEffect,
    phoneme,
    w
};