---js
{
  date:      `2019-11-16`,
  layout:    `frame.njk`,
  permalink: `index.html`,
  tags:      [ `notag` ],
  eleventyExcludeFromCollections: false,

  title_s:    `Welcome`,
  subtitle_s: `Typed JavaScript blog`,
  abstract_s: `How to add pseudo typing to JavaScript`,
  author_s:   `octoxalis`,
  
  gh_issue_n: 1,
}
---
[comment]: # (======== Post ========)
# Welcome to {{A_o.NAME_s}}

A naming scheme for pseudo-typed JavaScript.{ data--="page_intro" }

{% _anchor %}
## Lex parsimoniae
{% end_anchor %}

<slot-slice>

One of the most useful principle of software developing which should be kept in mind permanently is not a new one.
Actually, it's an almost millenial assertion: <q>Entities must not be multiplied without necessity</q>
{% _note_txt %}
<q>non sunt multiplicanda entia sine necessitate</q>  
( [Occam's razor]{{U_o.OUTLINK_s}} ).  
In medieval times, this sentence was a response to one of the most debated apory of platonism philosophy,
namely the  
[Quarrel of Universals]{{U_o.OUTLINK_s}}.
{% end_note_txt %}
.

Whatever its antiquity, its validity still remains for sofware engineering and have been adaptated in many ways
{% _note_txt %}
the [KISS]{{U_o.OUTLINK_s}} principle is one among [others]{{U_o.OUTLINK_s}}
{% end_note_txt %}
.


What are the implications of such a _law_ for a JavaScript programmer? And why is a computer language typing concept related to it?

</slot-slice>

{% _anchor %}
## A dispute of names and types
{% end_anchor %}

<slot-slice>
<slot-css prism_css/>
<slot-css lib_prism/>
<slot-js prism_js/>

Every developer knows that JavaScript is not a static typed language, a useful feature eliminating lots of bugs
{% _note_txt %}
a language like Typescript has been created as a remedy to that important lack of safety
{% end_note_txt %}
.
Even for code modules counting less than a few tens of lines, it's easy to forget what exactly is the type of a variable declared at the begining of the file and then make a mistake when assining a wrong type to that variable.

{{A_o.NAME_s}} is a simple convention designed to avoid such mistakes: by only adding a mnemonic letter at the end of each identifier to specify the variable type
{% _note_txt %}
of course, this scheme also applies to constants!
{% end_note_txt %}
.

This simple adjonction has two main benefices:
+ it gathers tightly related variables in a consistent semantic field;
+ it simplifies identifier derivations.

{ data--="ulist" }

Just an example, the JavaScript `String.prototype.split` method returns an array of Strings:

{% _code_block %}
    title_s: '#MDN web doc',
    lang_s: 'javascript',
[//]:#(_code_block)
var str = 'The quick brown fox jumps over the lazy dog.';
var words = str.split(' ');
{% end_code_block %}


Two different words for two tightly related entities! Isn't it semantically more meaningful to use the same identifier with different specifiers?

{% _code_block %}
    title_s: '#{{A_o.ID_s}}: Pseudo-typed identifiers',
    lang_s: 'javascript',
[//]:#(_code_block)
var sentence_s = 'The quick brown fox jumps over the lazy dog.';
var sentence_a = sentence_s.split(' ');
{% end_code_block %}


A more tricky example
{% _note_txt %}
with smart inline type coercion tricks!
{% end_note_txt %}
:

{% _code_block %}
    title_s: '#{{A_o.ID_s}}: Tricky pseudo-typed identifiers',
    lang_s: 'javascript',
[//]:#(_code_block)
let number_s = '123'
let number_n = +number_s    //: cast to Number
number_s = '' + ++number_n  //: cast to String
{% end_code_block %}


The minimalist and easy to memorize convention defined by **{{A_o.NAME_s}}** can help you to write a cleaner and more meaninful code while shortening its documentation.
Follow on with [specifiers] definitions.

</slot-slice>

[comment]: # (======== Links ========)

[specifiers]: ./specifiers.html

[Occam's razor]: https://www.irishphilosophy.com/2014/05/27/who-sharpened-occams-razor/
[Quarrel of Universals]: https://en.wikipedia.org/wiki/Problem_of_universals
[KISS]: https://en.wikipedia.org/wiki/KISS_principle
[others]: https://effectivesoftwaredesign.com/2013/08/05/simplicity-in-software-design-kiss-yagni-and-occams-razor/