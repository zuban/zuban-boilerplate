import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }
  /*! sanitize.css v4.1.0 | CC0 License | github.com/jonathantneal/sanitize.css */

  /* Display definitions
     ========================================================================== */
  
  /**
   * Add the correct display in IE 9-.
   * 1. Add the correct display in Edge, IE, and Firefox.
   * 2. Add the correct display in IE.
   */
  
  article,
  aside,
  details, /* 1 */
  figcaption,
  figure,
  footer,
  header,
  main, /* 2 */
  menu,
  nav,
  section,
  summary { /* 1 */
    display: block;
  }
  
  /**
   * Add the correct display in IE 9-.
   */
  
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }
  
  /**
   * Add the correct display in iOS 4-7.
   */
  
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  
  /**
   * Add the correct display in IE 10-.
   * 1. Add the correct display in IE.
   */
  
  template, /* 1 */
  [hidden] {
    display: none;
  }
  
  /* Elements of HTML (https://www.w3.org/TR/html5/semantics.html)
     ========================================================================== */
  
  /**
   * 1. Remove repeating backgrounds in all browsers (opinionated).
   * 2. Add box sizing inheritence in all browsers (opinionated).
   */
  
  *,
  ::before,
  ::after {
    background-repeat: no-repeat; /* 1 */
    box-sizing: inherit; /* 2 */
  }
  
  /**
   * 1. Add text decoration inheritance in all browsers (opinionated).
   * 2. Add vertical alignment inheritence in all browsers (opinionated).
   */
  
  ::before,
  ::after {
    text-decoration: inherit; /* 1 */
    vertical-align: inherit; /* 2 */
  }
  
  /**
   * 1. Add border box sizing in all browsers (opinionated).
   * 2. Add the default cursor in all browsers (opinionated).
   * 3. Add a flattened line height in all browsers (opinionated).
   * 4. Prevent font size adjustments after orientation changes in IE and iOS.
   */
  
  html {
    box-sizing: border-box; /* 1 */
    cursor: default; /* 2 */
    font-family: sans-serif; /* 3 */
    line-height: 1.5; /* 3 */
    -ms-text-size-adjust: 100%; /* 4 */
    -webkit-text-size-adjust: 100%; /* 5 */
  }
  
  /* Sections (https://www.w3.org/TR/html5/sections.html)
     ========================================================================== */
  
  /**
   * Remove the margin in all browsers (opinionated).
   */
  
  body {
    margin: 0;
  }
  
  h1 {
    font-size: 2em;
    margin: .67em 0;
  }
  
  /* Grouping content (https://www.w3.org/TR/html5/grouping-content.html)
     ========================================================================== */
  
  
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /**
   * 1. Correct the height in Firefox.
   * 2. Add visible overflow in Edge and IE.
   */
  
  hr {
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  
  /**
   * Remove the list style on navigation lists in all browsers (opinionated).
   */
  
  nav ol,
  nav ul {
    list-style: none;
  }
  
  /* Text-level semantics
     ========================================================================== */
  
  /**
   * 1. Add a bordered underline effect in all browsers.
   * 2. Remove text decoration in Firefox 40+.
   */
  
  abbr[title] {
    border-bottom: 1px dotted; /* 1 */
    text-decoration: none; /* 2 */
  }
  
  b,
  strong {
    font-weight: inherit;
  }
  
  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
  
  b,
  strong {
    font-weight: bolder;
  }
  
  /**
   * Add the correct font style in Android 4.3-.
   */
  
  dfn {
    font-style: italic;
  }
  
  /**
   * Add the correct colors in IE 9-.
   */
  
  mark {
    background-color: #ffff00;
    color: #000000;
  }
  
  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */
  
  progress {
    vertical-align: baseline;
  }
  
  /**
   * Correct the font size in all browsers.
   */
  
  small {
    font-size: 83.3333%;
  }
  
  /**
   * Change the positioning on superscript and subscript elements
   * in all browsers (opinionated).
   * 1. Correct the font size in all browsers.
   */
  
  sub,
  sup {
    font-size: 83.3333%; /* 1 */
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -.25em;
  }
  
  sup {
    top: -.5em;
  }
  
  /*
   * Remove the text shadow on text selections (opinionated).
   * 1. Restore the coloring undone by defining the text shadow (opinionated).
   */
  
  ::-moz-selection {
    background-color: #b3d4fc; /* 1 */
    color: #000000; /* 1 */
    text-shadow: none;
  }
  
  ::selection {
    background-color: #b3d4fc; /* 1 */
    color: #000000; /* 1 */
    text-shadow: none;
  }
  
  /* Embedded content (https://www.w3.org/TR/html5/embedded-content-0.html)
     ========================================================================== */
  
  /*
   * Change the alignment on media elements in all browers (opinionated).
   */
  
  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }
  
  /**
   * Remove the border on images inside links in IE 10-.
   */
  
  img {
    border-style: none;
  }
  
  /**
   * Change the fill color to match the text color in all browsers (opinionated).
   */
  
  svg {
    fill: currentColor;
  }
  
  /**
   * Hide the overflow in IE.
   */
  
  svg:not(:root) {
    overflow: hidden;
  }
  
  /* Links (https://www.w3.org/TR/html5/links.html#links)
     ========================================================================== */
  
  /**
   * 1. Remove the gray background on active links in IE 10.
   * 2. Remove the gaps in underlines in iOS 8+ and Safari 8+.
   */
  
  a {
    background-color: transparent; /* 1 */
    -webkit-text-decoration-skip: objects; /* 2 */
  }
  
  /**
   * Remove the outline when hovering in all browsers (opinionated).
   */
  
  a:hover {
    outline-width: 0;
  }
  
  /* Tabular data (https://www.w3.org/TR/html5/tabular-data.html)
     ========================================================================== */
  
  /*
   * Remove border spacing in all browsers (opinionated).
   */
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  /* transform-style:  (https://www.w3.org/TR/html5/forms.html)
     ========================================================================== */
  
  /**
   * 1. Remove the default styling in all browsers (opinionated).
   * 3. Remove the margin in Firefox and Safari.
   */
  
  button,
  input,
  select,
  textarea {
    background-color: transparent; /* 1 */
    border-style: none; /* 1 */
    color: inherit; /* 1 */
    font-size: 1em; /* 1 */
    margin: 0; /* 3 */
  }
  
  /**
   * Correct the overflow in IE.
   * 1. Correct the overflow in Edge.
   */
  
  button,
  input { /* 1 */
    overflow: visible;
  }
  
  /**
   * Remove the inheritance in Edge, Firefox, and IE.
   * 1. Remove the inheritance in Firefox.
   */
  
  button,
  select { /* 1 */
    text-transform: none;
  }

  
  button,
  html [type="button"], /* 1 */
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button; /* 2 */
  }
  
  /**
   * Remove the inner border and padding in Firefox.
   */
  
  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  /**
   * Correct the focus styles unset by the previous rule.
   */
  
  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  /**
   * Correct the border, margin, and padding in all browsers.
   */
  
  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: .35em .625em .75em;
  }
  
  legend {
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 2 */
    white-space: normal; /* 1 */
  }
  
  /**
   * 1. Remove the vertical scrollbar in IE.
   * 2. Change the resize direction on textareas in all browsers (opinionated).
   */
  
  textarea {
    overflow: auto; /* 1 */
    resize: vertical; /* 2 */
  }
  
  /**
   * Remove the padding in IE 10-.
   */
  
  [type="checkbox"],
  [type="radio"] {
    padding: 0;
  }
  
  /**
   * Correct the cursor style on increment and decrement buttons in Chrome.
   */
  
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }
  
  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  
  /**
   * Remove the inner padding and cancel buttons in Chrome and Safari for OS X.
   */
  
  ::-webkit-search-cancel-button,
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  /**
   * Correct the text style on placeholders in Chrome, Edge, and Safari.
   */
  
  ::-webkit-input-placeholder {
    color: inherit;
    opacity: .54;
  }
  
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  
  /* WAI-ARIA (https://www.w3.org/TR/html5/dom.html#wai-aria)
     ========================================================================== */
  
  /**
   * Change the cursor on busy elements (opinionated).
   */
  
  [aria-busy="true"] {
    cursor: progress;
  }
  
  /*
   * Change the cursor on control elements (opinionated).
   */
  
  [aria-controls] {
    cursor: pointer;
  }
  
  /*
   * Change the cursor on disabled, not-editable, or otherwise
   * inoperable elements (opinionated).
   */
  
  [aria-disabled] {
    cursor: default;
  }
  
  /* User interaction (https://www.w3.org/TR/html5/editing.html)
     ========================================================================== */
  
  /*
   * Remove the tapping delay on clickable elements (opinionated).
   * 1. Remove the tapping delay in IE 10.
   */
  
  a,
  area,
  button,
  input,
  label,
  select,
  textarea,
  [tabindex] {
    -ms-touch-action: manipulation; /* 1 */
    touch-action: manipulation;
  }
  
  /*
   * Change the display on visually hidden accessible elements (opinionated).
   */
  
  [hidden][aria-hidden="false"] {
    clip: rect(0, 0, 0, 0);
    display: inherit;
    position: absolute;
  }
  
  [hidden][aria-hidden="false"]:focus {
    clip: auto;
  }
  
  
    
    .container-fluid,
  .container {
    margin-right: auto;
    margin-left: auto;
  }
  
  .container-fluid {
    padding-right: 2rem;
    padding-left: 2rem;
  }
  
  .row {
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -0.5rem;
    margin-left: -0.5rem;
  }
  
  .row.reverse {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  
  .col.reverse {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }
  
  .col-xs,
  .col-xs-1,
  .col-xs-2,
  .col-xs-3,
  .col-xs-4,
  .col-xs-5,
  .col-xs-6,
  .col-xs-7,
  .col-xs-8,
  .col-xs-9,
  .col-xs-10,
  .col-xs-11,
  .col-xs-12,
  .col-xs-offset-0,
  .col-xs-offset-1,
  .col-xs-offset-2,
  .col-xs-offset-3,
  .col-xs-offset-4,
  .col-xs-offset-5,
  .col-xs-offset-6,
  .col-xs-offset-7,
  .col-xs-offset-8,
  .col-xs-offset-9,
  .col-xs-offset-10,
  .col-xs-offset-11,
  .col-xs-offset-12 {
    box-sizing: border-box;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  
  .col-xs {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    max-width: 100%;
  }
  
  .col-xs-1 {
    -ms-flex-preferred-size: 8.33333333%;
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
  }
  
  .col-xs-2 {
    -ms-flex-preferred-size: 16.66666667%;
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
  }
  
  .col-xs-3 {
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%;
  }
  
  .col-xs-4 {
    -ms-flex-preferred-size: 33.33333333%;
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
  }
  
  .col-xs-5 {
    -ms-flex-preferred-size: 41.66666667%;
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
  }
  
  .col-xs-6 {
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }
  
  .col-xs-7 {
    -ms-flex-preferred-size: 58.33333333%;
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
  }
  
  .col-xs-8 {
    -ms-flex-preferred-size: 66.66666667%;
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  }
  
  .col-xs-9 {
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%;
  }
  
  .col-xs-10 {
    -ms-flex-preferred-size: 83.33333333%;
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
  }
  
  .col-xs-11 {
    -ms-flex-preferred-size: 91.66666667%;
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
  }
  
  .col-xs-12 {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
  
  .col-xs-offset-0 {
    margin-left: 0;
  }
  
  .col-xs-offset-1 {
    margin-left: 8.33333333%;
  }
  
  .col-xs-offset-2 {
    margin-left: 16.66666667%;
  }
  
  .col-xs-offset-3 {
    margin-left: 25%;
  }
  
  .col-xs-offset-4 {
    margin-left: 33.33333333%;
  }
  
  .col-xs-offset-5 {
    margin-left: 41.66666667%;
  }
  
  .col-xs-offset-6 {
    margin-left: 50%;
  }
  
  .col-xs-offset-7 {
    margin-left: 58.33333333%;
  }
  
  .col-xs-offset-8 {
    margin-left: 66.66666667%;
  }
  
  .col-xs-offset-9 {
    margin-left: 75%;
  }
  
  .col-xs-offset-10 {
    margin-left: 83.33333333%;
  }
  
  .col-xs-offset-11 {
    margin-left: 91.66666667%;
  }
  
  .start-xs {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    text-align: start;
  }
  
  .center-xs {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
  }
  
  .end-xs {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    text-align: end;
  }
  
  .top-xs {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  
  .middle-xs {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  
  .bottom-xs {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
  
  .around-xs {
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }
  
  .between-xs {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  
  .first-xs {
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
  }
  
  .last-xs {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
  }
  
  @media only screen and (min-width: 48em) {
    .container {
      width: 49rem;
    }
  
    .col-sm,
    .col-sm-1,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-offset-0,
    .col-sm-offset-1,
    .col-sm-offset-2,
    .col-sm-offset-3,
    .col-sm-offset-4,
    .col-sm-offset-5,
    .col-sm-offset-6,
    .col-sm-offset-7,
    .col-sm-offset-8,
    .col-sm-offset-9,
    .col-sm-offset-10,
    .col-sm-offset-11,
    .col-sm-offset-12 {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
  
    .col-sm {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%;
    }
  
    .col-sm-1 {
      -ms-flex-preferred-size: 8.33333333%;
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }
  
    .col-sm-2 {
      -ms-flex-preferred-size: 16.66666667%;
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }
  
    .col-sm-3 {
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%;
    }
  
    .col-sm-4 {
      -ms-flex-preferred-size: 33.33333333%;
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }
  
    .col-sm-5 {
      -ms-flex-preferred-size: 41.66666667%;
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }
  
    .col-sm-6 {
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%;
    }
  
    .col-sm-7 {
      -ms-flex-preferred-size: 58.33333333%;
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }
  
    .col-sm-8 {
      -ms-flex-preferred-size: 66.66666667%;
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }
  
    .col-sm-9 {
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%;
    }
  
    .col-sm-10 {
      -ms-flex-preferred-size: 83.33333333%;
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }
  
    .col-sm-11 {
      -ms-flex-preferred-size: 91.66666667%;
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }
  
    .col-sm-12 {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }
  
    .col-sm-offset-0 {
      margin-left: 0;
    }
  
    .col-sm-offset-1 {
      margin-left: 8.33333333%;
    }
  
    .col-sm-offset-2 {
      margin-left: 16.66666667%;
    }
  
    .col-sm-offset-3 {
      margin-left: 25%;
    }
  
    .col-sm-offset-4 {
      margin-left: 33.33333333%;
    }
  
    .col-sm-offset-5 {
      margin-left: 41.66666667%;
    }
  
    .col-sm-offset-6 {
      margin-left: 50%;
    }
  
    .col-sm-offset-7 {
      margin-left: 58.33333333%;
    }
  
    .col-sm-offset-8 {
      margin-left: 66.66666667%;
    }
  
    .col-sm-offset-9 {
      margin-left: 75%;
    }
  
    .col-sm-offset-10 {
      margin-left: 83.33333333%;
    }
  
    .col-sm-offset-11 {
      margin-left: 91.66666667%;
    }
  
    .start-sm {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
    }
  
    .center-sm {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }
  
    .end-sm {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
    }
  
    .top-sm {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }
  
    .middle-sm {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
  
    .bottom-sm {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }
  
    .around-sm {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }
  
    .between-sm {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
  
    .first-sm {
      -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
      order: -1;
    }
  
    .last-sm {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }
  
  @media only screen and (min-width: 64em) {
    .container {
      width: 65rem;
    }
  
    .col-md,
    .col-md-1,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-offset-0,
    .col-md-offset-1,
    .col-md-offset-2,
    .col-md-offset-3,
    .col-md-offset-4,
    .col-md-offset-5,
    .col-md-offset-6,
    .col-md-offset-7,
    .col-md-offset-8,
    .col-md-offset-9,
    .col-md-offset-10,
    .col-md-offset-11,
    .col-md-offset-12 {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
  
    .col-md {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%;
    }
  
    .col-md-1 {
      -ms-flex-preferred-size: 8.33333333%;
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }
  
    .col-md-2 {
      -ms-flex-preferred-size: 16.66666667%;
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }
  
    .col-md-3 {
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%;
    }
  
    .col-md-4 {
      -ms-flex-preferred-size: 33.33333333%;
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }
  
    .col-md-5 {
      -ms-flex-preferred-size: 41.66666667%;
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }
  
    .col-md-6 {
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%;
    }
  
    .col-md-7 {
      -ms-flex-preferred-size: 58.33333333%;
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }
  
    .col-md-8 {
      -ms-flex-preferred-size: 66.66666667%;
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }
  
    .col-md-9 {
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%;
    }
  
    .col-md-10 {
      -ms-flex-preferred-size: 83.33333333%;
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }
  
    .col-md-11 {
      -ms-flex-preferred-size: 91.66666667%;
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }
  
    .col-md-12 {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }
  
    .col-md-offset-0 {
      margin-left: 0;
    }
  
    .col-md-offset-1 {
      margin-left: 8.33333333%;
    }
  
    .col-md-offset-2 {
      margin-left: 16.66666667%;
    }
  
    .col-md-offset-3 {
      margin-left: 25%;
    }
  
    .col-md-offset-4 {
      margin-left: 33.33333333%;
    }
  
    .col-md-offset-5 {
      margin-left: 41.66666667%;
    }
  
    .col-md-offset-6 {
      margin-left: 50%;
    }
  
    .col-md-offset-7 {
      margin-left: 58.33333333%;
    }
  
    .col-md-offset-8 {
      margin-left: 66.66666667%;
    }
  
    .col-md-offset-9 {
      margin-left: 75%;
    }
  
    .col-md-offset-10 {
      margin-left: 83.33333333%;
    }
  
    .col-md-offset-11 {
      margin-left: 91.66666667%;
    }
  
    .start-md {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
    }
  
    .center-md {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }
  
    .end-md {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
    }
  
    .top-md {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }
  
    .middle-md {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
  
    .bottom-md {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }
  
    .around-md {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }
  
    .between-md {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
  
    .first-md {
      -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
      order: -1;
    }
  
    .last-md {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }
  
  @media only screen and (min-width: 75em) {
    .container {
      width: 76rem;
    }
  
    .col-lg,
    .col-lg-1,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-offset-0,
    .col-lg-offset-1,
    .col-lg-offset-2,
    .col-lg-offset-3,
    .col-lg-offset-4,
    .col-lg-offset-5,
    .col-lg-offset-6,
    .col-lg-offset-7,
    .col-lg-offset-8,
    .col-lg-offset-9,
    .col-lg-offset-10,
    .col-lg-offset-11,
    .col-lg-offset-12 {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
  
    .col-lg {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%;
    }
  
    .col-lg-1 {
      -ms-flex-preferred-size: 8.33333333%;
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }
  
    .col-lg-2 {
      -ms-flex-preferred-size: 16.66666667%;
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }
  
    .col-lg-3 {
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%;
    }
  
    .col-lg-4 {
      -ms-flex-preferred-size: 33.33333333%;
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }
  
    .col-lg-5 {
      -ms-flex-preferred-size: 41.66666667%;
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }
  
    .col-lg-6 {
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%;
    }
  
    .col-lg-7 {
      -ms-flex-preferred-size: 58.33333333%;
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }
  
    .col-lg-8 {
      -ms-flex-preferred-size: 66.66666667%;
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }
  
    .col-lg-9 {
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%;
    }
  
    .col-lg-10 {
      -ms-flex-preferred-size: 83.33333333%;
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }
  
    .col-lg-11 {
      -ms-flex-preferred-size: 91.66666667%;
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }
  
    .col-lg-12 {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }
  
    .col-lg-offset-0 {
      margin-left: 0;
    }
  
    .col-lg-offset-1 {
      margin-left: 8.33333333%;
    }
  
    .col-lg-offset-2 {
      margin-left: 16.66666667%;
    }
  
    .col-lg-offset-3 {
      margin-left: 25%;
    }
  
    .col-lg-offset-4 {
      margin-left: 33.33333333%;
    }
  
    .col-lg-offset-5 {
      margin-left: 41.66666667%;
    }
  
    .col-lg-offset-6 {
      margin-left: 50%;
    }
  
    .col-lg-offset-7 {
      margin-left: 58.33333333%;
    }
  
    .col-lg-offset-8 {
      margin-left: 66.66666667%;
    }
  
    .col-lg-offset-9 {
      margin-left: 75%;
    }
  
    .col-lg-offset-10 {
      margin-left: 83.33333333%;
    }
  
    .col-lg-offset-11 {
      margin-left: 91.66666667%;
    }
  
    .start-lg {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
    }
  
    .center-lg {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }
  
    .end-lg {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
    }
  
    .top-lg {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }
  
    .middle-lg {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
  
    .bottom-lg {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }
  
    .around-lg {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }
  
    .between-lg {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
  
    .first-lg {
      -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
      order: -1;
    }
  
    .last-lg {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }
`;
