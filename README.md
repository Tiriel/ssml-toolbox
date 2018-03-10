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
// First, get and instantiate the builder, and the tag constructor if you need it
const { SsmlBuilder, SsmlTag } = require('ssml-toolbox');
const builder = new SsmlBuilder();
// You can use is basically to have some text
const ssml = builder.say('Hello world!').toString();
// Outputs: "Hello world!"

// Or you can use all the methods
const ssml2 = builder
    .say('This is a new test')
    .breakTag('500ms')
    .p([new SsmlTag('s', 'One sentence'), new SsmlTag('s', 'Two sentences')])
    .audio('http://fake.url', 'This will not play...')
    .sayAs('2018-03-10', 'date', {format: 'yyyymmdd'})
    .p('Wow, paragraph!')
    .toString(true);
// Ouputs: 
// <speak>This is a new test<break time="500ms"/> \
// <p><s>One sentence</s><s>Two sentences</s></p> \
// <audio src="http://fake.url">This will not play...</audio> \
// <say-as interpret-as="date" format="yyyymmdd">2018-03-10</say-as> \
// <p>Wow, paragraph!</p></speak>
```

## API
### SsmlTag
#### constructor(\<string> name, [\<mixed> content, \<object> attributes, \<boolean> orphan = false])
Argument `name` is mandatory, all other arguments are optional. `orphan` can be defined even if `content` and `attributes` are not.
#### toString ()
Renders the SSML string corresponding to the defined element. If the content is not a string, it will be first reduced to string.

### SsmlBuilder
#### constructor()
No arguments. The class works by piling elements inside a private attribute, before rendering them all at once. Methods are chainable.

#### toString ([<boolean> speak = false])
Renders the SSML string corresponding to all the elements defined. If `speak` is set to true, the method will render the SSML string inside a `<string>[...]</string>` tag.

#### say(\<string> text)
Adds raw text string to the elements pile.

#### breakTag([\<string> time[, \<string> strength]])
SSML `<break />` tag.

#### sayAs(\<string> text, \<string> type[, \<object> attr])
SSML `<say-as interpret-as="{type}" [...]>[...]</say-as>` tag.

#### audio(\<string> src[, \<string> alt, \<object> opts])
SSML`<audio src="{src}" [...]>[{alt}]</audio>` tag.

#### p(\<mixed> content)
SSML `<p>[...]</p>` tag.

#### s(\<string> content)
SSML `<s>[...]</s>` tag.

#### sub(\<string> text, \<string> alias)
SSML `<sub alias="{alias}">[...]</sub>` tag.

#### prosody(\<string> text, \<object> opts)
SSML `<prosody [...]>[...]</prosody>` tag.

#### emphasis(\<string> text, \<string> level)
SSML `<emphasis level="{level}">[...]</emphasis>` tag.