'use strict';

const emLevels = {
    STRONG: 'strong',
    MODERATE: 'moderate',
    NONE: 'none',
    REDUCED: 'reduced'
};
Object.freeze(emLevels);
exports.emLevels = emLevels;

const interpretAs = {
    CARDINAL: 'cardinal',
    ORDINAL: 'ordinal',
    CHAR: 'characters',
    FRACTION: 'fraction',
    EXPLETIVE: 'expletive',
    BLEEP: 'bleep',
    UNIT: 'unit',
    VERBATIM: 'verbatim',
    SPELLOUT: 'spell-out',
    DATE: 'date',
    TIME: 'time',
    TELEPHONE: 'telephone'
};
Object.freeze(interpretAs);
exports.interpretAs = interpretAs;

const audioOpt = {
    CLIPBEGIN: 'clipBegin',
    CLIPEND: 'clipEnd',
    SPEED: 'speed',
    REPEATCOUNT: 'repeatCount',
    REPEATDUR: 'repeatDur',
    SOUNDLEVEL: 'soundLevel'
};
Object.freeze(audioOpt);
exports.audioOpt = audioOpt;

const prosodyOpts = {
    RATE: 'rate',
    PITCH: 'pitch',
    VOLUME: 'volume'
};
Object.freeze(prosodyOpts);
exports.prosodyOpts = prosodyOpts;