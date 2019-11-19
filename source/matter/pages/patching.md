---js
{
  date:      `2019-11-17`,
  layout:    `frame.njk`,
  permalink: `patching.html`,
  tags:      [ `post` ],
  eleventyExcludeFromCollections: false,
  no_comments: false,

  title_s:    `Clean patch`,
  subtitle_s: `How to patch libraries`,
  abstract_s: `Semantically patching librariees functions`,
  author_s:   `octoxalis`,
}
---
[comment]: # (======== Post ========)
# Clean patching

How to keep coherancy while patching{ data--="page_intro" }

{% _anchor %}
### Semantic monkey
{% end_anchor %}


A useful application of {{A_o.NAME_s}} naming scheme is when we want to [monkey patch]{{U_o.OUTLINK_s}} a library function, using a proxy, as we should do
{% _short_note %}
there is a good discussion about [different ways]{{U_o.OUTLINK_s}} of doing it: the following example is extracted from its proxy case.
{% end_short_note %}
:


{% _code_block %}
    title_s: 'stackoverflow.com: how-can-i-cleanly-monkey-patch-a-function-in-javascript',
    lang_s: 'javascript',
[//]:#(_code_block)
const handler_o =
{
  apply ( target_o, this_o, arg_a )  //: target_o and this_o aren't used here
  {
    console.log( `patched function is invoked with arguments: ${arg_a}` )
    Reflect.apply( ...arguments )
  }
}

const log__v = arg_ =>  console.log( `log__v is invoked with argument: ${arg_}` )
const log_o = new Proxy( log__v, handler_o )

//: Now proxy function can be invoked as:
log_o( 'Hello' )
log_o( ...['Hello'] )
log_o.call( null, 'Hello' )
log_o.apply( null, ['Hello'] )

//: All the above invocations will print the following two lines:
//-> patched function is invoked with arguments: Hello
//-> log__v is invoked with argument: Hello
{% end_code_block %}


[comment]: # (======== Links ========)

[monkey patch]: https://www.audero.it/blog/2016/12/05/monkey-patching-javascript/
[different ways]: https://stackoverflow.com/questions/52945683/how-can-i-cleanly-monkey-patch-a-function-in-javascript/52945922#52945922
