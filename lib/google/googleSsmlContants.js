'use strict';

const containerChildren = {
    par: 'par',
    seq: 'seq',
    media: 'media'
};
Object.freeze(containerChildren);
module.exports.containerChildren = containerChildren;

const containerOpts = {
    begin: 'begin',
    end: 'end'
};
Object.freeze(containerOpts );
module.exports.containerOpts  = containerOpts ;

const mediaChildren = {
    speak: 'speak',
    audio: 'audio'
};
Object.freeze(mediaChildren);
module.exports.mediaChildren = mediaChildren;

const mediaOpts = {
    'xml:id': 'xml:id',
    begin: 'begin',
    end: 'end',
    repeatCount: 'repeatCount',
    repeatDur: 'repeatDur',
    soundLevel: 'soundLevel',
    fadeInDur: 'fadeInDur',
    fadeOutDur: 'fadeOutDur'
};
Object.freeze(mediaOpts);
module.exports.mediaOpts = mediaOpts;