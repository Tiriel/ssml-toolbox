# API
## GoogleSsmlBuilder
#### constructor()
Extends [SsmlBuilder](SsmlBuilder.md)

## Chainable methods
These methods internally use the non-chainable methods.
#### addPar(\<array|SsmlTag> time, \<object> opts)
Adds a SSML `<par>[...]</par>` tag to the element pile as a SsmlTag object.

#### addSeq(\<array|SsmlTag> time, \<object> opts)
Adds a SSML `<seq>[...]</seq>` tag to the element pile as a SsmlTag object.

#### addMedia(\<array|SsmlTag> time, \<object> opts)
Adds a SSML `<media>[...]</media>` tag to the element pile as a SsmlTag object.

## Non-chainable methods
These methods return an SsmlTag.

#### par([\<array|SsmlTag> time[, \<object> opts]])
Returns a SSML `<par>[...]</par>` tag as a SsmlTag object.

#### seq([\<array|SsmlTag> time[, \<object> opts]])
Returns a SSML `<seq>[...]</seq>` tag as a SsmlTag object.

#### media([\<array|SsmlTag> time[, \<object> opts]])
Returns a SSML `<media>[...]</media>` tag as a SsmlTag object.
