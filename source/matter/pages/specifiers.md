---js
{
  date:      `2019-11-16`,
  layout:    `frame.njk`,
  permalink: `posts/specifiers.html`,
  tags:      [ `post` ],
  eleventyExcludeFromCollections: false,

  rank_n:     1,
  title_s:    `Specifiers`,
  subtitle_s: `List of specifiers`,
  abstract_s: `Maping types and specifiers`,
  author_s:   `octoxalis`,
  
  gh_issue_n: 2,
}
---
[comment]: # (======== Post ========)
# Specifiers

About types and specificity{ data--="page_intro" }

{% _anchor %}
## Types specifiers
{% end_anchor %}

<slot-slice>
<slot-css lib_table/>

**{{A_o.NAME_s}}** naming scheme applies to all primitive immutable types:

+ Null
+ Undefined
+ Boolean
+ Number
+ BigInt
+ String
+ Array
+ Object
+ Symbol
{ data--="ulist" }


It extends to specific Object types:

+ Class
+ RegExp
+ Function
{ data--="ulist" }


The suffix specifying the type is an underscore character followed by a single letter:
+ **lowercase** for "wrapped" types
{% _note_txt %}
Boolean, Number, String, Array, Object, Symbol, Function, Class, RegExp.
BigInt type is listed in the [number page].
See [ MDN Primitive description]{{U_o.OUTLINK_s}}
{% end_note_txt %}
,
+ **uppercase** for "unwrapped" types
{% _note_txt %}
Null, Undefined.
{% end_note_txt %}

{ data--="ulist" }

| Type       | Suffix |
| -----------|:------:|
| Null       | __N_   |
| Undefined  | __U_   |
| Boolean    | __b_   |
| Number     | __n_   |
| String     | __s_   |
| Array      | __a_   |
| Object     | __o_   |
| Symbol     | __y_   |
| Class      | __c_   |
| RegExp     | __r_   |

{ .half_width }

To convey even more meaningful information, function identifiers follow a slightly different scheme:
+ **two underscore** characters before the type specifier **of the returned value**.
Consequently, if a function doesn't return anything
{% _note_txt %}
`void` function
{% end_note_txt %}
, we use the _v_ letter for its suffix
{% _note_txt %}
a possible alternative is to use the undefined value: _U_
{% end_note_txt %}
.

| Function return is | Suffix |
| -------------------|:------:|
| Null               | ___N_  |
| Undefined          | ___U_  |
| Boolean            | ___b_  |
| Number             | ___n_  |
| String             | ___s_  |
| Array              | ___a_  |
| Object             | ___o_  |
| Symbol             | ___y_  |
| Class              | ___c_  |
| RegExp             | ___r_  |
| Function           | ___f_  |
| Void               | ___v_  |

{ .half_width }


`const awesome__s = () => 'An awesome String'`  
`const clone__s = awesome__s`
{data--="example"}


In case of a function returning different types of value, we just omit the type character.


`const silly__ = string_b => string_b ? 'A weird String' : 1234`
{data--="example"}


We could do the same for a variable accepting different kinds of type, but is it really a good practice?


`let hybrid_ = 'A String'`  
`hybrid_ = 1234  //: What a mess!`
{data--="example"}

</slot-slice>

{% _anchor %}
## Full example
{% end_anchor %}

<slot-slice>
<slot-css prism_css/>
<slot-css lib_prism/>
<slot-js prism_js/>


{% _code_block %}
    title_s: 'source/matrix/assets/scripts/js/parts/_dom_.js',
    lang_s: 'javascript',
[//]:#(_code_block)
const DOM_siblings__a = selector_s =>
{
  const node_e = document.querySelector( selector_s )
  return !node_e ?
    null :
    Array.prototype.filter
      .call( node_e.parentNode.children, sibling_e => sibling_e !== node_e )
}

const DOM_listReverse__v = selector_s =>
{
  const node_a = Array.prototype.slice.call(document.querySelectorAll( `${selector_s} li` ))
  node_a.forEach( node_e => node_e.parentNode.insertBefore( node_e, node_e.parentNode.firstChild ) )
}
{% end_code_block %}


The previous code shows an **exception** to the specifiers convention used by **{{A_o.NAME_s}}**: for `DOM` elements, it seems more appropriate to use the `_e` suffix
{% _note_txt %}
for _element_, because the __N_ suffix is already used for a `Null` value
{% end_note_txt %}
than the `_o` suffix used for `Object`.


The example code shows another singularity: we can instantly differenciate JavaScript and browser specific functions or methods from our own code functions and methods.
Our identifiers have a letter suffix where JS and browser identifiers have nothing. Therefore, we can safely use exactly the same names:

`const myWindow = window`  
`const window_o = window    // smarter isn't it?`
{data--="example"}

Hence, everytime we want to override some JavaScript or DOM function
{% _note_txt %}
or any browser specific, third-party library function, etc.
{% end_note_txt %}
, we can safely do it while keeping a semantic coherency with the original function.

</slot-slice>

[comment]: # (======== Links ========)

[ MDN Primitive description]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[number page]: ./numbers.html