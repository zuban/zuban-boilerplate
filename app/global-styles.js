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
  
  .react-tagsinput-input {
      display: none;
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
  
  
    .rdw-option-wrapper {
    border: 1px solid #F1F1F1;
    padding: 5px;
    min-width: 25px;
    height: 20px;
    border-radius: 2px;
    margin: 0 4px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    cursor: pointer;
    background: white;
    text-transform: capitalize;
  }
  .rdw-option-wrapper:hover {
    -webkit-box-shadow: 1px 1px 0px #BFBDBD;
            box-shadow: 1px 1px 0px #BFBDBD;
  }
  .rdw-option-wrapper:active {
    -webkit-box-shadow: 1px 1px 0px #BFBDBD inset;
            box-shadow: 1px 1px 0px #BFBDBD inset;
  }
  .rdw-option-active {
    -webkit-box-shadow: 1px 1px 0px #BFBDBD inset;
            box-shadow: 1px 1px 0px #BFBDBD inset;
  }
  .rdw-option-disabled {
    opacity: 0.3;
    cursor: default;
  }
  .rdw-dropdown-wrapper {
    height: 30px;
    background: white;
    cursor: pointer;
    border: 1px solid #F1F1F1;
    border-radius: 2px;
    margin: 0 3px;
    text-transform: capitalize;
    background: white;
  }
  .rdw-dropdown-wrapper:focus {
    outline: none;
  }
  .rdw-dropdown-wrapper:hover {
    -webkit-box-shadow: 1px 1px 0px #BFBDBD;
            box-shadow: 1px 1px 0px #BFBDBD;
    background-color: #FFFFFF;
  }
  .rdw-dropdown-wrapper:active {
    -webkit-box-shadow: 1px 1px 0px #BFBDBD inset;
            box-shadow: 1px 1px 0px #BFBDBD inset;
  }
  .rdw-dropdown-carettoopen {
    height: 0px;
    width: 0px;
    position: absolute;
    top: 35%;
    right: 10%;
    border-top: 6px solid black;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
  .rdw-dropdown-carettoclose {
    height: 0px;
    width: 0px;
    position: absolute;
    top: 35%;
    right: 10%;
    border-bottom: 6px solid black;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
  .rdw-dropdown-selectedtext {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    height: 100%;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 0 5px;
  }
  .rdw-dropdown-optionwrapper {
    z-index: 100;
    position: relative;
    border: 1px solid #F1F1F1;
    width: 98%;
    background: white;
    border-radius: 2px;
    margin: 0;
    padding: 0;
    max-height: 250px;
    overflow-y: scroll;
  }
  .rdw-dropdown-optionwrapper:hover {
    -webkit-box-shadow: 1px 1px 0px #BFBDBD;
            box-shadow: 1px 1px 0px #BFBDBD;
    background-color: #FFFFFF;
  }
  .rdw-dropdownoption-default {
    min-height: 25px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 0 5px;
  }
  .rdw-dropdownoption-highlighted {
    background: #F1F1F1;
  }
  .rdw-dropdownoption-active {
    background: #f5f5f5;
  }
  .rdw-dropdownoption-disabled {
    opacity: 0.3;
    cursor: default;
  }
  .rdw-inline-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 6px;
  }
  .rdw-inline-dropdown {
    width: 50px;
  }
  .rdw-inline-dropdownoption {
    height: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .rdw-block-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 6px;
  }
  .rdw-block-dropdown {
    width: 110px;
  }
  .rdw-fontsize-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 6px;
  }
  .rdw-fontsize-dropdown {
    min-width: 40px;
  }
  .rdw-fontsize-option {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .rdw-fontfamily-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 6px;
  }
  .rdw-fontfamily-dropdown {
    width: 115px;
  }
  .rdw-fontfamily-placeholder {
    white-space: nowrap;
    max-width: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .rdw-fontfamily-optionwrapper {
    width: 140px;
  }
  .rdw-list-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 6px;
  }
  .rdw-list-dropdown {
    width: 50px;
    z-index: 90;
  }
  .rdw-list-dropdownOption {
    height: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .rdw-text-align-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 6px;
  }
  .rdw-text-align-dropdown {
    width: 50px;
    z-index: 90;
  }
  .rdw-text-align-dropdownOption {
    height: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .rdw-right-aligned-block {
    text-align: right;
  }
  .rdw-left-aligned-block {
    text-align: left;
  }
  .rdw-center-aligned-block {
    text-align: center;
  }
  .rdw-justify-aligned-block {
    text-align: justify;
  }
  .rdw-right-aligned-block > div {
    display: inline;
  }
  .rdw-left-aligned-block > div {
    display: inline;
  }
  .rdw-center-aligned-block > div {
    display: inline;
  }
  .rdw-justify-aligned-block > div {
    display: inline;
  }
  .rdw-colorpicker-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 6px;
    position: relative;
  }
  .rdw-colorpicker-modal {
    position: absolute;
    top: 35px;
    left: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    width: 175px;
    height: 175px;
    border: 1px solid #F1F1F1;
    padding: 15px;
    border-radius: 2px;
    z-index: 100;
    background: white;
    -webkit-box-shadow: 3px 3px 5px #BFBDBD;
            box-shadow: 3px 3px 5px #BFBDBD;
  }
  .rdw-colorpicker-modal-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-bottom: 5px;
  }
  .rdw-colorpicker-modal-style-label {
    font-size: 15px;
    width: 50%;
    text-align: center;
    cursor: pointer;
    padding: 0 10px 5px;
  }
  .rdw-colorpicker-modal-style-label-active {
    border-bottom: 2px solid #0a66b7;
  }
  .rdw-colorpicker-modal-options {
    margin: 5px auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    overflow: scroll;
  }
  .rdw-colorpicker-cube {
    width: 22px;
    height: 22px;
    border: 1px solid #F1F1F1;
  }
  .rdw-colorpicker-option {
    margin: 3px;
    padding: 0;
    min-height: 20px;
    border: none;
    width: 22px;
    height: 22px;
    min-width: 22px;
    -webkit-box-shadow: 1px 2px 1px #BFBDBD inset;
            box-shadow: 1px 2px 1px #BFBDBD inset;
  }
  .rdw-colorpicker-option:hover {
    -webkit-box-shadow: 1px 2px 1px #BFBDBD;
            box-shadow: 1px 2px 1px #BFBDBD;
  }
  .rdw-colorpicker-option:active {
    -webkit-box-shadow: -1px -2px 1px #BFBDBD;
            box-shadow: -1px -2px 1px #BFBDBD;
  }
  .rdw-colorpicker-option-active {
    -webkit-box-shadow: 0px 0px 2px 2px #BFBDBD;
            box-shadow: 0px 0px 2px 2px #BFBDBD;
  }
  .rdw-link-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 6px;
    position: relative;
  }
  .rdw-link-dropdown {
    width: 50px;
  }
  .rdw-link-dropdownOption {
    height: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .rdw-link-dropdownPlaceholder {
    margin-left: 8px;
  }
  .rdw-link-modal {
    position: absolute;
    top: 35px;
    left: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    width: 235px;
    height: 205px;
    border: 1px solid #F1F1F1;
    padding: 15px;
    border-radius: 2px;
    z-index: 100;
    background: white;
    -webkit-box-shadow: 3px 3px 5px #BFBDBD;
            box-shadow: 3px 3px 5px #BFBDBD;
  }
  .rdw-link-modal-label {
    font-size: 15px;
  }
  .rdw-link-modal-input {
    margin-top: 5px;
    border-radius: 2px;
    border: 1px solid #F1F1F1;
    height: 25px;
    margin-bottom: 15px;
    padding: 0 5px;
  }
  .rdw-link-modal-input:focus {
    outline: none;
  }
  .rdw-link-modal-buttonsection {
    margin: 0 auto;
  }
  .rdw-link-modal-target-option {
    margin-bottom: 20px;
  }
  .rdw-link-modal-target-option > span {
    margin-left: 5px;
  }
  .rdw-link-modal-btn {
    margin-left: 10px;
    width: 75px;
    height: 30px;
    border: 1px solid #F1F1F1;
    border-radius: 2px;
    cursor: pointer;
    background: white;
    text-transform: capitalize;
  }
  .rdw-link-modal-btn:hover {
    -webkit-box-shadow: 1px 1px 0px #BFBDBD;
            box-shadow: 1px 1px 0px #BFBDBD;
  }
  .rdw-link-modal-btn:active {
    -webkit-box-shadow: 1px 1px 0px #BFBDBD inset;
            box-shadow: 1px 1px 0px #BFBDBD inset;
  }
  .rdw-link-modal-btn:focus {
    outline: none !important;
  }
  .rdw-link-modal-btn:disabled {
    background: #ece9e9;
  }
  .rdw-link-dropdownoption {
    height: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .rdw-history-dropdown {
    width: 50px;
  }
  .rdw-embedded-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 6px;
    position: relative;
  }
  .rdw-embedded-modal {
    position: absolute;
    top: 35px;
    left: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    width: 235px;
    height: 180px;
    border: 1px solid #F1F1F1;
    padding: 15px;
    border-radius: 2px;
    z-index: 100;
    background: white;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-shadow: 3px 3px 5px #BFBDBD;
            box-shadow: 3px 3px 5px #BFBDBD;
  }
  .rdw-embedded-modal-header {
    font-size: 15px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .rdw-embedded-modal-header-option {
    width: 50%;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .rdw-embedded-modal-header-label {
    width: 95px;
    border: 1px solid #f1f1f1;
    margin-top: 5px;
    background: #6EB8D4;
    border-bottom: 2px solid #0a66b7;
  }
  .rdw-embedded-modal-link-section {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .rdw-embedded-modal-link-input {
    width: 95%;
    height: 35px;
    margin: 10px 0;
    border: 1px solid #F1F1F1;
    border-radius: 2px;
    font-size: 15px;
    padding: 0 5px;
  }
  .rdw-embedded-modal-link-input:focus {
    outline: none;
  }
  .rdw-embedded-modal-btn-section {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .rdw-embedded-modal-btn {
    margin: 0 3px;
    width: 75px;
    height: 30px;
    border: 1px solid #F1F1F1;
    border-radius: 2px;
    cursor: pointer;
    background: white;
    text-transform: capitalize;
  }
  .rdw-embedded-modal-btn:hover {
    -webkit-box-shadow: 1px 1px 0px #BFBDBD;
            box-shadow: 1px 1px 0px #BFBDBD;
  }
  .rdw-embedded-modal-btn:active {
    -webkit-box-shadow: 1px 1px 0px #BFBDBD inset;
            box-shadow: 1px 1px 0px #BFBDBD inset;
  }
  .rdw-embedded-modal-btn:focus {
    outline: none !important;
  }
  .rdw-embedded-modal-btn:disabled {
    background: #ece9e9;
  }
  .rdw-embedded-modal-size {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 8px 0;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
  .rdw-embedded-modal-size-input {
    width: 45%;
    height: 20px;
    border: 1px solid #F1F1F1;
    border-radius: 2px;
    font-size: 12px;
  }
  .rdw-embedded-modal-size-input:focus {
    outline: none;
  }
  .rdw-emoji-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 6px;
    position: relative;
  }
  .rdw-emoji-modal {
    overflow: auto;
    position: absolute;
    top: 35px;
    left: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    width: 235px;
    height: 180px;
    border: 1px solid #F1F1F1;
    padding: 15px;
    border-radius: 2px;
    z-index: 100;
    background: white;
    -webkit-box-shadow: 3px 3px 5px #BFBDBD;
            box-shadow: 3px 3px 5px #BFBDBD;
  }
  .rdw-emoji-icon {
    margin: 2.5px;
    height: 24px;
    width: 24px;
    cursor: pointer;
    font-size: 22px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .rdw-spinner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    height: 100%;
    width: 100%;
  }
  .rdw-spinner > div {
    width: 12px;
    height: 12px;
    background-color: #333;
  
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }
  .rdw-spinner .rdw-bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .rdw-spinner .rdw-bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  @-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0) }
    40% { -webkit-transform: scale(1.0) }
  }
  @keyframes sk-bouncedelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }
  .rdw-image-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 6px;
    position: relative;
  }
  .rdw-image-modal {
    position: absolute;
    top: 35px;
    left: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    width: 235px;
    height: 200px;
    border: 1px solid #F1F1F1;
    padding: 15px;
    border-radius: 2px;
    z-index: 100;
    background: white;
    -webkit-box-shadow: 3px 3px 5px #BFBDBD;
            box-shadow: 3px 3px 5px #BFBDBD;
  }
  .rdw-image-modal-header {
    font-size: 15px;
    margin: 10px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .rdw-image-modal-header-option {
    width: 50%;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .rdw-image-modal-header-label {
    width: 80px;
    background: #f1f1f1;
    border: 1px solid #f1f1f1;
    margin-top: 5px;
  }
  .rdw-image-modal-header-label-highlighted {
    background: #6EB8D4;
    border-bottom: 2px solid #0a66b7;
  }
  .rdw-image-modal-upload-option {
    height: 65px;
    width: 100%;
    color: gray;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border: none;
    font-size: 15px;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    background-color: #f1f1f1;
    outline: 2px dashed gray;
    outline-offset: -10px;
    margin: 10px 0;
  }
  .rdw-image-modal-upload-option-highlighted {
    outline: 2px dashed #0a66b7;
  }
  .rdw-image-modal-upload-option-label {
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 15px;
  }
  .rdw-image-modal-upload-option-label span{
    padding: 0 20px;
  }
  .rdw-image-modal-upload-option-input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .rdw-image-modal-url-section {
    display: block;
  }
  .rdw-image-modal-url-input {
    width: 95%;
    height: 35px;
    margin: 30px 0 20px;
    border: 1px solid #F1F1F1;
    border-radius: 2px;
    font-size: 15px;
    padding: 0 5px;
  }
  .rdw-image-modal-btn-section {
    margin: 10px auto 0;
  }
  .rdw-image-modal-url-input:focus {
    outline: none;
  }
  .rdw-image-modal-btn {
    margin: 0 5px;
    width: 75px;
    height: 30px;
    border: 1px solid #F1F1F1;
    border-radius: 2px;
    cursor: pointer;
    background: white;
    text-transform: capitalize;
  }
  .rdw-image-modal-btn:hover {
    -webkit-box-shadow: 1px 1px 0px #BFBDBD;
            box-shadow: 1px 1px 0px #BFBDBD;
  }
  .rdw-image-modal-btn:active {
    -webkit-box-shadow: 1px 1px 0px #BFBDBD inset;
            box-shadow: 1px 1px 0px #BFBDBD inset;
  }
  .rdw-image-modal-btn:focus {
    outline: none !important;
  }
  .rdw-image-modal-btn:disabled {
    background: #ece9e9;
  }
  .rdw-image-modal-spinner {
    position: absolute;
    top: -3px;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
  .rdw-remove-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 6px;
    position: relative;
  }
  .rdw-history-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 6px;
  }
  .rdw-history-dropdownoption {
    height: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .rdw-history-dropdown {
    width: 50px;
  }
  .rdw-link-decorator-wrapper {
    position: relative;
  }
  .rdw-link-decorator-icon {
    position: absolute;
    left: 40%;
    top: 0;
    cursor: pointer;
    background-color: white;
  }
  .rdw-mention-link {
    text-decoration: none;
    color: #1236ff;
    background-color: #f0fbff;
    padding: 1px 2px;
    border-radius: 2px;
  }
  .rdw-suggestion-wrapper {
    position: relative;
  }
  .rdw-suggestion-dropdown {
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    border: 1px solid #F1F1F1;
    min-width: 100px;
    max-height: 150px;
    overflow: auto;
    background: white;
    z-index: 100;
  }
  .rdw-suggestion-option {
    padding: 7px 5px;
    border-bottom: 1px solid #f1f1f1;
  }
  .rdw-suggestion-option-active {
    background-color: #F1F1F1;
  }
  .rdw-hashtag-link {
    text-decoration: none;
    color: #1236ff;
    background-color: #f0fbff;
    padding: 1px 2px;
    border-radius: 2px;
  }
  .rdw-image-alignment-options-popup {
    position: absolute;;
    background: white;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 5px 2px;
    border-radius: 2px;
    border: 1px solid #F1F1F1;
    width: 105px;
    cursor: pointer;
    z-index: 100;
  }
  .rdw-alignment-option-left {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
  }
  .rdw-image-alignment-option {
    height: 15px;
    width: 15px;
    min-width: 15px;
  }
  .rdw-image-alignment {
    position: relative;
  }
  .rdw-image-imagewrapper {
    position: relative;
  }
  .rdw-image-center {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .rdw-image-left {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .rdw-image-right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
  }
  .rdw-image-alignment-options-popup-right {
    right: 0;
  }
  .rdw-editor-main {
    border: 1px solid #F1F1F1;
    height: 100%;
    width: 100%;
    overflow: auto;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  .rdw-editor-toolbar {
    padding: 6px 5px 0;
    border-radius: 2px;
    border: 1px solid #F1F1F1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    width: 100%;
    background: white;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    font-size: 15px;
    margin-bottom: 5px;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }
  .public-DraftStyleDefault-block {
    margin: 1em 0;
  }
  .rdw-editor-wrapper:focus {
    outline: none;
  }
  /**
   * Draft v0.9.1
   *
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */
  .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content{height:inherit;text-align:initial}.public-DraftEditor-content[contenteditable=true]{-webkit-user-modify:read-write-plaintext-only}.DraftEditor-root{position:relative}.DraftEditor-editorContainer{background-color:rgba(255,255,255,0);border-left:.1px solid transparent;position:relative;z-index:1}.public-DraftEditor-block{position:relative}.DraftEditor-alignLeft .public-DraftStyleDefault-block{text-align:left}.DraftEditor-alignLeft .public-DraftEditorPlaceholder-root{left:0;text-align:left}.DraftEditor-alignCenter .public-DraftStyleDefault-block{text-align:center}.DraftEditor-alignCenter .public-DraftEditorPlaceholder-root{margin:0 auto;text-align:center;width:100%}.DraftEditor-alignRight .public-DraftStyleDefault-block{text-align:right}.DraftEditor-alignRight .public-DraftEditorPlaceholder-root{right:0;text-align:right}.public-DraftEditorPlaceholder-root{color:#9197a3;position:absolute;z-index:0}.public-DraftEditorPlaceholder-hasFocus{color:#bdc1c9}.DraftEditorPlaceholder-hidden{display:none}.public-DraftStyleDefault-block{position:relative;white-space:pre-wrap}.public-DraftStyleDefault-ltr{direction:ltr;text-align:left}.public-DraftStyleDefault-rtl{direction:rtl;text-align:right}.public-DraftStyleDefault-listLTR{direction:ltr}.public-DraftStyleDefault-listRTL{direction:rtl}.public-DraftStyleDefault-ol, .public-DraftStyleDefault-ul{margin:16px 0;padding:0}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR{margin-left:1.5em}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL{margin-right:1.5em}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR{margin-left:3em}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL{margin-right:3em}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR{margin-left:4.5em}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL{margin-right:4.5em}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR{margin-left:6em}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL{margin-right:6em}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR{margin-left:7.5em}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL{margin-right:7.5em}.public-DraftStyleDefault-unorderedListItem{list-style-type:square;position:relative}.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0{list-style-type:disc}.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1{list-style-type:circle}.public-DraftStyleDefault-orderedListItem{list-style-type:none;position:relative}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before{left:-36px;position:absolute;text-align:right;width:30px}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before{position:absolute;right:-36px;text-align:left;width:30px}.public-DraftStyleDefault-orderedListItem:before{content:counter(ol0) ". ";counter-increment:ol0}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before{content:counter(ol1) ". ";counter-increment:ol1}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before{content:counter(ol2) ". ";counter-increment:ol2}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before{content:counter(ol3) ". ";counter-increment:ol3}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before{content:counter(ol4) ". ";counter-increment:ol4}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset{counter-reset:ol0}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset{counter-reset:ol1}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset{counter-reset:ol2}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset{counter-reset:ol3}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset{counter-reset:ol4}
  
  /*# sourceMappingURL=react-draft-wysiwyg.css.map*/
  
  
  
  
  
  
  
  
  
  
    /**
   * React Select
   * ============
   * Created by Jed Watson and Joss Mackison for KeystoneJS, http://www.keystonejs.com/
   * https://twitter.com/jedwatson https://twitter.com/jossmackison https://twitter.com/keystonejs
   * MIT License: https://github.com/JedWatson/react-select
  */
  .Select {
    position: relative;
  }
  .Select,
  .Select div,
  .Select input,
  .Select span {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .Select.is-disabled > .Select-control {
    background-color: #f9f9f9;
  }
  .Select.is-disabled > .Select-control:hover {
    box-shadow: none;
  }
  .Select.is-disabled .Select-arrow-zone {
    cursor: default;
    pointer-events: none;
    opacity: 0.35;
  }
  .Select-control {
    background-color: #fff;
    border-color: #d9d9d9 #ccc #b3b3b3;
    border-radius: 4px;
    border: 1px solid #ccc;
    color: #333;
    cursor: default;
    display: table;
    border-spacing: 0;
    border-collapse: separate;
    height: 36px;
    outline: none;
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .Select-control:hover {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  }
  .Select-control .Select-input:focus {
    outline: none;
  }
  .is-searchable.is-open > .Select-control {
    cursor: text;
  }
  .is-open > .Select-control {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    background: #fff;
    border-color: #b3b3b3 #ccc #d9d9d9;
  }
  .is-open > .Select-control .Select-arrow {
    top: -2px;
    border-color: transparent transparent #999;
    border-width: 0 5px 5px;
  }
  .is-searchable.is-focused:not(.is-open) > .Select-control {
    cursor: text;
  }
  .is-focused:not(.is-open) > .Select-control {
    border-color: #007eff;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(0, 126, 255, 0.1);
  }
  .Select-placeholder,
  .Select--single > .Select-control .Select-value {
    bottom: 0;
    color: #aaa;
    left: 0;
    line-height: 34px;
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
    right: 0;
    top: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .has-value.Select--single > .Select-control .Select-value .Select-value-label,
  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {
    color: #333;
  }
  .has-value.Select--single > .Select-control .Select-value a.Select-value-label,
  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label {
    cursor: pointer;
    text-decoration: none;
  }
  .has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,
  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:hover,
  .has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,
  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {
    color: #007eff;
    outline: none;
    text-decoration: underline;
  }
  .Select-input {
    height: 34px;
    padding-left: 10px;
    padding-right: 10px;
    vertical-align: middle;
  }
  .Select-input > input {
    width: 100%;
    background: none transparent;
    border: 0 none;
    box-shadow: none;
    cursor: default;
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    outline: none;
    line-height: 14px;
    /* For IE 8 compatibility */
    padding: 8px 0 12px;
    /* For IE 8 compatibility */
    -webkit-appearance: none;
  }
  .is-focused .Select-input > input {
    cursor: text;
  }
  .has-value.is-pseudo-focused .Select-input {
    opacity: 0;
  }
  .Select-control:not(.is-searchable) > .Select-input {
    outline: none;
  }
  .Select-loading-zone {
    cursor: pointer;
    display: table-cell;
    position: relative;
    text-align: center;
    vertical-align: middle;
    width: 16px;
  }
  .Select-loading {
    -webkit-animation: Select-animation-spin 400ms infinite linear;
    -o-animation: Select-animation-spin 400ms infinite linear;
    animation: Select-animation-spin 400ms infinite linear;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-right-color: #333;
    display: inline-block;
    position: relative;
    vertical-align: middle;
  }
  .Select-clear-zone {
    -webkit-animation: Select-animation-fadeIn 200ms;
    -o-animation: Select-animation-fadeIn 200ms;
    animation: Select-animation-fadeIn 200ms;
    color: #999;
    cursor: pointer;
    display: table-cell;
    position: relative;
    text-align: center;
    vertical-align: middle;
    width: 17px;
  }
  .Select-clear-zone:hover {
    color: #D0021B;
  }
  .Select-clear {
    display: inline-block;
    font-size: 18px;
    line-height: 1;
  }
  .Select--multi .Select-clear-zone {
    width: 17px;
  }
  .Select-arrow-zone {
    cursor: pointer;
    display: table-cell;
    position: relative;
    text-align: center;
    vertical-align: middle;
    width: 25px;
    padding-right: 5px;
  }
  .Select-arrow {
    border-color: #999 transparent transparent;
    border-style: solid;
    border-width: 5px 5px 2.5px;
    display: inline-block;
    height: 0;
    width: 0;
    position: relative;
  }
  .is-open .Select-arrow,
  .Select-arrow-zone:hover > .Select-arrow {
    border-top-color: #666;
  }
  .Select--multi .Select-multi-value-wrapper {
    display: inline-block;
  }
  .Select .Select-aria-only {
    display: inline-block;
    height: 1px;
    width: 1px;
    margin: -1px;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
    float: left;
  }
  @-webkit-keyframes Select-animation-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes Select-animation-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .Select-menu-outer {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-top-color: #e6e6e6;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    margin-top: -1px;
    max-height: 200px;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 1;
    -webkit-overflow-scrolling: touch;
  }
  .Select-menu {
    max-height: 198px;
    overflow-y: auto;
  }
  .Select-option {
    box-sizing: border-box;
    background-color: #fff;
    color: #666666;
    cursor: pointer;
    display: block;
    padding: 8px 10px;
  }
  .Select-option:last-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .Select-option.is-selected {
    background-color: #f5faff;
    /* Fallback color for IE 8 */
    background-color: rgba(0, 126, 255, 0.04);
    color: #333;
  }
  .Select-option.is-focused {
    background-color: #ebf5ff;
    /* Fallback color for IE 8 */
    background-color: rgba(0, 126, 255, 0.08);
    color: #333;
  }
  .Select-option.is-disabled {
    color: #cccccc;
    cursor: default;
  }
  .Select-noresults {
    box-sizing: border-box;
    color: #999999;
    cursor: default;
    display: block;
    padding: 8px 10px;
  }
  .Select--multi .Select-input {
    vertical-align: middle;
    margin-left: 10px;
    padding: 0;
  }
  .Select--multi.has-value .Select-input {
    margin-left: 5px;
  }
  .Select--multi .Select-value {
    background-color: #ebf5ff;
    /* Fallback color for IE 8 */
    background-color: rgba(0, 126, 255, 0.08);
    border-radius: 2px;
    border: 1px solid #c2e0ff;
    /* Fallback color for IE 8 */
    border: 1px solid rgba(0, 126, 255, 0.24);
    color: #007eff;
    display: inline-block;
    font-size: 0.9em;
    line-height: 1.4;
    margin-left: 5px;
    margin-top: 5px;
    vertical-align: top;
  }
  .Select--multi .Select-value-icon,
  .Select--multi .Select-value-label {
    display: inline-block;
    vertical-align: middle;
  }
  .Select--multi .Select-value-label {
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    cursor: default;
    padding: 2px 5px;
  }
  .Select--multi a.Select-value-label {
    color: #007eff;
    cursor: pointer;
    text-decoration: none;
  }
  .Select--multi a.Select-value-label:hover {
    text-decoration: underline;
  }
  .Select--multi .Select-value-icon {
    cursor: pointer;
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    border-right: 1px solid #c2e0ff;
    /* Fallback color for IE 8 */
    border-right: 1px solid rgba(0, 126, 255, 0.24);
    padding: 1px 5px 3px;
  }
  .Select--multi .Select-value-icon:hover,
  .Select--multi .Select-value-icon:focus {
    background-color: #d8eafd;
    /* Fallback color for IE 8 */
    background-color: rgba(0, 113, 230, 0.08);
    color: #0071e6;
  }
  .Select--multi .Select-value-icon:active {
    background-color: #c2e0ff;
    /* Fallback color for IE 8 */
    background-color: rgba(0, 126, 255, 0.24);
  }
  .Select--multi.is-disabled .Select-value {
    background-color: #fcfcfc;
    border: 1px solid #e3e3e3;
    color: #333;
  }
  .Select--multi.is-disabled .Select-value-icon {
    cursor: not-allowed;
    border-right: 1px solid #e3e3e3;
  }
  .Select--multi.is-disabled .Select-value-icon:hover,
  .Select--multi.is-disabled .Select-value-icon:focus,
  .Select--multi.is-disabled .Select-value-icon:active {
    background-color: #fcfcfc;
  }
  @keyframes Select-animation-spin {
    to {
      transform: rotate(1turn);
    }
  }
  @-webkit-keyframes Select-animation-spin {
    to {
      -webkit-transform: rotate(1turn);
    }
  }

`;
