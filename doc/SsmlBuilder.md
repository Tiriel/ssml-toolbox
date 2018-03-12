# API
## SsmlBuilder
#### constructor()
No arguments. The class works by piling elements inside a private attribute, before rendering them all at once. Methods are chainable.

#### toString ([<boolean> speak = false])
Renders the SSML string corresponding to all the elements defined. If `speak` is set to true, the method will render the SSML string inside a `<string>[...]</string>` tag.

## Chainable methods
These methods internally use the non-chainable methods.
#### say(\<string> text)
Adds raw text string to the elements pile.

#### addBreakTag([\<string> time[, \<string> strength]])
Adds a SSML `<break />` tag to the element pile as a SsmlTag object.

#### addSayAs(\<string> text, \<string> type[, \<object> attr])
Adds a SSML `<say-as interpret-as="{type}" [...]>[...]</say-as>` tag to the element pile as a SsmlTag object.

#### addAudio(\<string> src[, \<string> alt, \<object> opts])
Adds a SSML`<audio src="{src}" [...]>[{alt}]</audio>` tag to the element pile as a SsmlTag object.

#### addP(\<mixed> content)
Adds a SSML `<p>[...]</p>` tag to the element pile as a SsmlTag object.

#### addS(\<string> content)
Adds a SSML `<s>[...]</s>` tag to the element pile as a SsmlTag object.

#### addSub(\<string> text, \<string> alias)
Adds a SSML `<sub alias="{alias}">[...]</sub>` tag to the element pile as a SsmlTag object.

#### addProsody(\<string> text, \<object> opts)
Adds a SSML `<prosody [...]>[...]</prosody>` tag to the element pile as a SsmlTag object.

#### addEmphasis(\<string> text, \<string> level)
Adds a SSML `<emphasis level="{level}">[...]</emphasis>` tag to the element pile as a SsmlTag object.

## Non-chainable methods
These methods return an SsmlTag.

#### breakTag([\<string> time[, \<string> strength]])
Returns a SSML `<break />` tag as a SsmlTag object.

#### sayAs(\<string> text, \<string> type[, \<object> attr])
Returns a SSML `<say-as interpret-as="{type}" [...]>[...]</say-as>` tag as a SsmlTag object.

#### audio(\<string> src[, \<string> alt, \<object> opts])
Returns a SSML`<audio src="{src}" [...]>[{alt}]</audio>` tag as a SsmlTag object.

#### p(\<mixed> content)
Returns a SSML `<p>[...]</p>` tag as a SsmlTag object.

#### s(\<string> content)
Returns a SSML `<s>[...]</s>` tag as a SsmlTag object.

#### sub(\<string> text, \<string> alias)
Returns a SSML `<sub alias="{alias}">[...]</sub>` tag as a SsmlTag object.

#### prosody(\<string> text, \<object> opts)
Returns a SSML `<prosody [...]>[...]</prosody>` tag as a SsmlTag object.

#### emphasis(\<string> text, \<string> level)
Returns a SSML `<emphasis level="{level}">[...]</emphasis>` tag as a SsmlTag object.
