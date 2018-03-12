# API
## SsmlTag
Basic element class, used to build and render every tag.

#### constructor(\<string> name, [\<mixed> content, \<object> attributes, \<boolean> orphan = false])
Argument `name` is mandatory, all other arguments are optional. `orphan` can be defined even if `content` and `attributes` are not.

#### toString ()
Renders the SSML string corresponding to the defined element. If the content is not a string, it will be first reduced to string.

#### get name
Returns the name of the tag it's called on.
