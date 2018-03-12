# API
## AlexaSsmlBuilder
#### constructor()
Extends [SsmlBuilder](SsmlBuilder.md)

## Chainable methods
These methods internally use the non-chainable methods.
#### addAmazonEffect(\<string> content, \<string> effect)
Adds a SSML `<amazon:effect effect="{effect}">[...]</amazon:effect>` tag to the element pile as a SsmlTag object.

#### addPhoneme(\<string> content, \<string> alphabet, \<string> ph)
Adds a SSML `<phoneme alphabet="{alphabet}" ph="{ph}">[...]</phoneme>` tag to the element pile as a SsmlTag object.

#### addW(\<string> content, \<string> role)
Adds a SSML `<w role="{role}">[...]</w>` tag to the element pile as a SsmlTag object.

## Non-chainable methods
These methods return an SsmlTag.

#### amazonEffect(\<string> content, \<string> effect)
Returns a SSML `<amazon:effect effect="{effect}">[...]</amazon:effect>` tag as a SsmlTag object.

#### phoneme([\<array|SsmlTag> time[, \<object> opts]])
Returns a SSML `<phoneme alphabet="{alphabet}" ph="{ph}">[...]</phoneme>` tag as a SsmlTag object.

#### w(\<string> content, \<string> role)
Returns a SSML `<w role="{role}">[...]</w>` tag as a SsmlTag object.
