# SSML Tooling
My personnal SSML Toolbox, first attempt.

You're very welcome to contribute!

## Installation
As usual:
```bash
npm install ssml-toolbox --save
```

## Usage
```javascript
'use strict';
// First, get and instantiate the builder, and the tag constructing methods if you need some
// Here we took the specific Google builder.
const { GoogleSsmlBuilder, s, media, speak } = require('ssml-toolbox');
const builder = new GoogleSsmlBuilder();
// You can use is basically to have some text
const ssml = builder.say('Hello world!').toString();
// Outputs: "Hello world!"

// Or you can use all the methods
const ssml2 = builder
    .say('This is a new test')
    .addBreakTag('500ms')
    .addP([s('One sentence'), s('Two sentences')])
    .addAudio('http://fake.url', 'This will not play...')
    .addSayAs('2018-03-10', 'date', {format: 'yyyymmdd'})
    .addP('Wow, paragraph!')
    // Google specific tag
    .addPar([media(speak('fake')), media(speak('test'))])
    .toString(true)
;
// Ouputs: 
// <speak>This is a new test<break time="500ms"/> \
// <p><s>One sentence</s><s>Two sentences</s></p> \
// <audio src="http://fake.url">This will not play...</audio> \
// <say-as interpret-as="date" format="yyyymmdd">2018-03-10</say-as> \
// <p>Wow, paragraph!</p></speak>
```

#### APIS: 
 * [SsmlTag](./doc/SsmlTag.md) - The basic element class
 * [SsmlBuilder](./doc/SsmlBuilder.md) - The standard builder
 * [GoogleSsmlBuilder](./doc/GoogleSsmlBuilder.md) - Google specific builder
 * [AlexaSsmlBuilder](./doc/AlexaSsmlBuilder.md) - Amazon Alexa specific builder