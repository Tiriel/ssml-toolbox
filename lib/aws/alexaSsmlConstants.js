'use strict';

const amazonEffects = {
    whisper: 'whisper'
};
Object.freeze(amazonEffects);
module.exports.amazonEffects = amazonEffects;

const phonemeAlphabets = {
    ipa: 'ipa',
    'x-sampa': 'x-sampa'
};
Object.freeze(phonemeAlphabets);
module.exports.phonemeAlphabets = phonemeAlphabets;

const wRoles = {
    'amazon:VB': 'amazon:VB',
    'amazon:VBD': 'amazon:VBD',
    'amazon:NN': 'amazon:NN',
    'amazon:SENSE_1': 'amazon:SENSE_1'
};
Object.freeze(wRoles);
module.exports.wRoles = wRoles;
