---js
{
  date:      `2019-11-17`,
  layout:    `frame.njk`,
  permalink: `numbers.html`,
  tags:      [ `post` ],
  eleventyExcludeFromCollections: false,
  no_comments: false,

  title_s:    `Number specifiers`,
  subtitle_s: `List of number specifiers`,
  abstract_s: `Extended types specifiers for numbers`,
  author_s:   `octoxalis`,
}
---
[comment]: # (======== Post ========)
# Number specifiers

More specifiers for integer and float numbers{ data--="page_intro" }

{% _anchor %}
### Number specifiers
{% end_anchor %}


Defining different kinds of numbers for a more precise mapping of types can be a necessity
{% _short_note %}
JavaScript has a unique type _Number_ covering both integer and float numbers
{% end_short_note %}
. For instance, a perfect mapping with WebAssembly number types can be very useful for a JavaScript module interacting with a Wasm module.
Therefore, **{{A_o.NAME_s}}** defines a few subsidiary types:

+ 32-bit integer
+ 64-bit integer
+ 128-bit integer (BigInt)
+ 32-bit float
+ 64-bit float

{ data--="ulist" }


| Type            | Suffix |
| ----------------|:------:|
| 32-bit integer  |  __i_   |
| 64-bit integer  |  __i1_  |
| 128-bit integer |  __i2_  |
| 32-bit float    |  __f_   |
| 64-bit float    |  __f1_  |

{ .half_width }

These specifiers use one letter, either _i_ or _f_
{% _short_note %}
_i_ for an integer number<br/>
_f_ for a float number
{% end_short_note %}
, and eventualy append a number _1_ or _2_
{% _short_note %}
_1_ for a 64-bit number<br/>
_2_ for a 128-bit number
{% end_short_note %}
for the number width in bits.


To memorize easily those number specifiers, one has to think that numbers are at least 32-bit wide
and the number appended after the specifier letter means: left shift 32 (bits) by 1 or 2.
{% _short_note %}
`64 = 32 << 1`<br/>
`128 = 32 << 2`<br/>
for the sake of brevity, there is no _0_ after the letter (_i_ or _f_) for 32-bit number types
{% end_short_note %}
.


[comment]: # (======== Links ========)
