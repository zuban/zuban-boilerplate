import { injectGlobal } from 'styled-components';


import myImage from './back-code.jpg';

/* eslint no-unused-expressions: 0 */
injectGlobal`
@import url(https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,500,700,900);
@import url("//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.css");




.text-grey {
    color: #eee!important;
}

.bg-white {
    background-color: #fff!important;
}

.blockquote-bubble {
    border: none;
    padding: 0;
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 0%;
    -ms-flex: 1 0 0%;
    flex: 1 0 0%;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column
}

.blockquote-bubble .blockquote-bubble-content {
    background: #E6E6E6;
    padding: 20px;
    border-radius: 3px;
    position: relative;
    margin: 0 0 10px;
    width: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.blockquote-bubble .blockquote-bubble-content:after {
    top: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-top-color: #E6E6E6;
    border-width: 10px;
    left: 30px;
    margin-left: -10px
}

.blockquote-bubble .blockquote-bubble-content.bg-white:after {
    border-top-color: #fff
}

.blockquote-bubble .blockquote-footer,.blockquote-bubble footer,.blockquote-bubble small {
    padding-left: 8px;
    padding-right: 8px
}

.blockquote-bubble .blockquote-footer:after,.blockquote-bubble .blockquote-footer:before {
    display: none
}

.blockquote-bubble.blockquote-reverse .blockquote-bubble-content:after {
    left: auto;
    margin-left: auto;
    right: 30px
}

.blockquote-bubble.blockquote-reverse .blockquote-bubble-content:before {
    border-top-color: rgba(0,0,0,.01);
    border-width: 11px;
    left: 10%;
    margin-left: -11px
}

.blockquote-bubble.blockquote-center,.blockquote-bubble.blockquote-center .blockquote-bubble-content {
    text-align: center
}

.blockquote-bubble.blockquote-center .blockquote-bubble-content:after {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto
}

.blockquote-plain {
    border-left: none;
    border-right: none;
    padding: 0
}

.fancy,.text-fancy {
    font-family: Calligraffitti,cursive;
    text-transform: lowercase;
    line-height: 10px
}

.header .header-brand-text,.header .header-brand-text h1 {
    font-family: Rambla,Arial,serif
}

.divider-primary.divider-arrow-b:before {
    border-top-color: #55A79A
}

.divider-primary.divider-arrow-t:before {
    border-bottom-color: #55A79A
}

.divider-white.divider-arrow-l:before,.divider-white.divider-diagonal-r:before {
    border-right-color: #fff
}

.divider-white.divider-arrow-r:before,.divider-white.divider-diagonal:before {
    border-left-color: #fff
}

.divider-white.divider-arrow-b:before {
    border-top-color: #fff
}

.divider-white.divider-arrow-t:before {
    border-bottom-color: #fff
}

.divider-info.divider-arrow-l:before,.divider-info.divider-diagonal-r:before {
    border-right-color: #5bc0de
}

.divider-info.divider-arrow-r:before,.divider-info.divider-diagonal:before {
    border-left-color: #5bc0de
}

.divider-info.divider-arrow-b:before {
    border-top-color: #5bc0de
}

.divider-info.divider-arrow-t:before {
    border-bottom-color: #5bc0de
}

.divider-success.divider-arrow-l:before,.divider-success.divider-diagonal-r:before {
    border-right-color: #5cb85c
}

.divider-success.divider-arrow-r:before,.divider-success.divider-diagonal:before {
    border-left-color: #5cb85c
}

.divider-success.divider-arrow-b:before {
    border-top-color: #5cb85c
}

.divider-success.divider-arrow-t:before {
    border-bottom-color: #5cb85c
}

.divider-warning.divider-arrow-l:before,.divider-warning.divider-diagonal-r:before {
    border-right-color: #f0ad4e
}

.divider-warning.divider-arrow-r:before,.divider-warning.divider-diagonal:before {
    border-left-color: #f0ad4e
}

.divider-warning.divider-arrow-b:before {
    border-top-color: #f0ad4e
}

.divider-warning.divider-arrow-t:before {
    border-bottom-color: #f0ad4e
}

.divider-danger.divider-arrow-l:before,.divider-danger.divider-diagonal-r:before {
    border-right-color: #d9534f
}

.divider-danger.divider-arrow-r:before,.divider-danger.divider-diagonal:before {
    border-left-color: #d9534f
}

.divider-danger.divider-arrow-b:before {
    border-top-color: #d9534f
}

.divider-danger.divider-arrow-t:before {
    border-bottom-color: #d9534f
}

.divider-inverse.divider-arrow-l:before,.divider-inverse.divider-diagonal-r:before {
    border-right-color: #292b2c
}

.divider-inverse.divider-arrow-r:before,.divider-inverse.divider-diagonal:before {
    border-left-color: #292b2c
}

.divider-inverse.divider-arrow-b:before {
    border-top-color: #292b2c
}

.divider-inverse.divider-arrow-t:before {
    border-bottom-color: #292b2c
}

.divider-faded.divider-arrow-l:before,.divider-faded.divider-diagonal-r:before {
    border-right-color: #f7f7f7
}

.divider-faded.divider-arrow-r:before,.divider-faded.divider-diagonal:before {
    border-left-color: #f7f7f7
}

.divider-faded.divider-arrow-b:before {
    border-top-color: #f7f7f7
}

.divider-faded.divider-arrow-t:before {
    border-bottom-color: #f7f7f7
}

.divider-op-1:before {
    opacity: .1!important
}

.divider-op-2:before {
    opacity: .2!important
}

.divider-op-3:before {
    opacity: .3!important
}

.divider-op-4:before {
    opacity: .4!important
}

.divider-op-5:before {
    opacity: .5!important
}

.divider-op-6:before {
    opacity: .6!important
}

.divider-op-7:before {
    opacity: .7!important
}

.divider-op-8:before {
    opacity: .8!important
}

.divider-op-9:before {
    opacity: .9!important
}

.divider:before {
    display: block
}

.divider-sm:before {
    display: none
}

@media (min-width: 576px) {
    .divider-sm:before {
        display:block
    }
}

.divider-md:before {
    display: none
}

@media (min-width: 768px) {
    .divider-md:before {
        display:block
    }
}

.divider-lg:before {
    display: none
}

@media (min-width: 992px) {
    .pos-lg-absolute {
        position:absolute!important
    }

    .pos-lg-relative {
        position: relative!important;
        overflow: hidden
    }

    .pos-lg-static {
        position: static!important
    }

    .pos-lg-fixed {
        position: fixed!important
    }

    .divider-lg:before {
        display: block
    }
}

.divider-xl:before {
    display: none
}

@media (min-width: 1200px) {
    .pos-xl-absolute {
        position:absolute!important
    }

    .pos-xl-relative {
        position: relative!important;
        overflow: hidden
    }

    .pos-xl-static {
        position: static!important
    }

    .pos-xl-fixed {
        position: fixed!important
    }

    .divider-xl:before {
        display: block
    }
}

.divider-diagonal {
    position: relative;
    overflow: hidden
}

.divider-diagonal:before {
    border-right-color: transparent;
    border-left-width: 150px;
    border-left-style: solid;
    border-top: 750px solid transparent;
    height: 750px;
    /* margin-bottom: -750px; */
    /* display: block; */
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    z-index: 1;
}

.divider-diagonal.divider-diagonal-r:before {
    border-left-color: transparent;
    border-right-width: 150px;
    border-right-style: solid;
    border-top: 750px solid transparent;
    right: 0;
    left: auto;
}

.divider-arrow {
    position: relative
}

.divider-arrow:before {
    left: 50%;
    content: " ";
    position: absolute;
    pointer-events: none;
    width: 0;
    height: 0;
    border-style: solid;
    z-index: 1
}

.divider-arrow.divider-arrow-b:before {
    top: 100%;
    margin-left: -20px;
    border-width: 15px 20px 0;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent
}

.divider-arrow.divider-arrow-t:before {
    top: -15px;
    margin-left: -20px;
    border-width: 0 20px 15px;
    border-right-color: transparent;
    border-top-color: transparent;
    border-left-color: transparent
}

.divider-arrow.divider-arrow-l:before,.divider-arrow.divider-arrow-r:before {
    top: 50%;
    margin-top: -15px;
    border-top-color: transparent;
    border-bottom-color: transparent
}

.divider-arrow.divider-arrow-l:before {
    left: -19px;
    border-width: 15px 20px 15px 0;
    border-left-color: transparent
}

.divider-arrow.divider-arrow-r:before {
    left: auto;
    right: -19px;
    border-width: 15px 0 15px 20px;
    border-right-color: transparent
}
html,
body {
    width: 100%;
    height: 100%;
}

body {
    font-family: 'Fira Sans','Helvetica Neue',Arial,sans-serif;
    color: #001A33;
    webkit-tap-highlight-color: #222;
    top:0;
}

/* workaround modal-open padding issue */
body.modal-open {
    padding-right:0 !important;
}

hr {
    max-width: 120px;
    border-width: 3px;
    opacity: 0.08;
    margin-top: 25px;
    margin-bottom: 25px;
}

hr.light {
    border-color: #fff;
    opacity: 1;
}

hr.primary {
    border-color: #007FFF;
    opacity: 1;
}

a {
    color: #007FFF;
    -webkit-transition: all .35s;
    -moz-transition: all .35s;
    transition: all .35s;
}

a:hover,
a:focus {
    color: #222;
    outline: 0;
}

p {
    font-size: 17px;
    line-height: 1.7;
    margin-bottom: 20px;
    font-family:'Helvetica Neue',Arial,sans-serif;
}

.text-normal {
    font-family:'Helvetica Neue',Arial,sans-serif;
}

.wide-space {
    letter-spacing: 1.6px;
}

.icon-lg {
    font-size: 50px;
    line-height: 18px;
}

.bg-primary {
    background-color: #007FFF;
}

.bg-alt {
    background-color: #fff;
}

.text-faded {
    color: rgba(245,245,245,0.7);
}

.text-dark {
    color: #001A33;
}

.text-light {
    color: #fff;
}

.text-light:hover,.text-light:focus {
    color: #eee;
    text-decoration:none;
}

.text-primary {
    color: #007FFF;
}

section {
    padding: 70px 0;
}

aside {
    padding: 45px 0;
}

footer {
    padding: 45px;
    padding-top: 40px;
    background-color: #e0e0e3;
}

footer h4, footer h6 {
    color:#fff;
}

.navbar {
    border-color: rgba(35,35,35,.05);
    background-color: #fff;
    -webkit-transition: all .4s;
    -moz-transition: all .4s;
    transition: all .4s;
}

.navbar-brand {
    color: #007FFF;
    padding: 1px;
    line-height: 1.90em;
    -webkit-transition: padding .2s ease-in;
    -moz-transition: padding .2s ease-in;
    transition: padding .2s ease-in;
    float:none;
}

.navbar-brand:hover,
.navbar-brand:focus {
    color: #007FFF;
}

.navbar .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {
    background-color: #001A33;
}
.navbar .navbar-toggle, .navbar-default .navbar-collapse {
    border-color: transparent;
}

.navbar .navbar-nav > li>a,
.navbar .navbar-nav>li>a:focus {
    font-size: 12px;
    color: #001A33;
    text-transform: uppercase;
}

.navbar .navbar-nav>li>a:hover,
.navbar .navbar-nav>li>a:focus:hover {
    color: #007FFF;
}

.navbar .navbar-nav .nav-link.active,
.navbar .navbar-nav .nav-link.active:focus {
    color: #007FFF !important;
    background-color: transparent;
}

/* responsive nav */
@media(max-width:48em) {
    .navbar .navbar-nav>.nav-item {
        float: none;
        margin-left: .1rem;
    }
    .navbar .navbar-nav {
        float:none !important;
    }
}

@media(min-width:48em) {
    .navbar {
        border-color: transparent;
        background-color: #fff;
        min-height: 60px;
    }

    .navbar-brand {
        color: #007FFF;
        float: left;
        padding-left: 1px;
    }

    .navbar .navbar-brand:hover,
    .navbar .navbar-brand:focus {
        color: #001A33;
    }
    
    .navbar .navbar-nav > li > a,
    .navbar .navbar-nav> li > a:focus {
        color: #001A33;
        letter-spacing: 1.1px;
    }

    .navbar .navbar-nav > li > a:hover,
    .navbar .navbar-nav > li > a:focus:hover {
        color: #001A33;
    }

    #topNav {
      background-color:#fff;
    }
    
}

header {
    position: relative;
    /*min-height: auto;*/
    text-align: center;
    color: #001A33;
    width: 100%;
    background-color: #fff;


    background: url(${myImage}) top center no-repeat;
    background-attachment: fixed;
    background-size: cover;
}

header .header-content {
    color: white;
    position: relative;
    width: 100%;
    padding: 100px 15px;
    text-align: center;
    z-index: 2;
}

header .header-content .inner h1 {
    margin-top: 0;
    margin-bottom: 0;
}

header .header-content .inner p {
    margin-bottom: 50px;
    font-size: 16px;
    font-weight: 300;
    color: #222;
}

@media(min-width:34em) {
    .icon-lg {
        font-size: 80px;
    }
    
    header {
        min-height: 100%;
    }

    header .header-content {
        position: absolute;
        top: 50%;
        padding: 0 50px;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    header .header-content .inner {
        margin-right: auto;
        margin-left: auto;
        max-width: 1000px;
    }

    header .header-content .inner h1 {
        font-size: 53px;
    }

    header .header-content .inner p {
        margin-right: auto;
        margin-left: auto;
        max-width: 80%;
        font-size: 18px;
    }
    
    section {
        min-height: 600px;
        padding: 100px 0;
    }

}

.list-group-item, .card-footer {
    background-color:transparent;
}

textarea {
    resize: none;
}

.call-to-action h2 {
    margin: 0 auto 20px;
}

.btn.btn-primary {
    background-color: transparent;
    border:1px solid #007FFF;
    -webkit-transition: all .35s;
    -moz-transition: all .35s;
    transition: all .35s;
    color:#007FFF;
}

.btn.btn-primary:hover {
    opacity: 0.7;
}

.btn-primary-outline {
    border-color:#007FFF;
    color:#007FFF;
}
.btn-primary-outline:hover {
    background-color:#007FFF;
}

.btn-xl {
    padding: 15px 30px;
    font-size: 20px;
}

::-moz-selection {
    text-shadow: none;
    color: #fff;
    background: #222;
}

::selection {
    text-shadow: none;
    color: #fff;
    background: #222;
}

img::selection {
    color: #fff;
    background: 0 0;
}

img::-moz-selection {
    color: #fff;
    background: 0 0;
}




#SECTION_1 {
    margin: 0rem auto;
    box-sizing: border-box;
    color: rgb(61, 68, 81);
    height: 725px;
    text-decoration: none solid rgb(61, 68, 81);
    text-size-adjust: 100%;
    width: 940px;
    column-rule-color: rgb(61, 68, 81);
    perspective-origin: 470px 362.5px;
    transform-origin: 470px 362.5px;
    caret-color: rgb(61, 68, 81);
    border: 0px none rgb(61, 68, 81);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    outline: rgb(61, 68, 81) none 0px;
    padding-top: 20px;
}

#DIV_2 {
    box-sizing: border-box;
    color: rgb(61, 68, 81);
    height: 655px;
    text-decoration: none solid rgb(61, 68, 81);
    text-size-adjust: 100%;
    width: 940px;
    backface-visibility: hidden;
    column-rule-color: rgb(61, 68, 81);
    perspective-origin: 470px 327.5px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    transform-origin: 470px 327.5px;
    caret-color: rgb(61, 68, 81);
    border: 0px none rgb(61, 68, 81);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    outline: rgb(61, 68, 81) none 0px;
    transition: transform 0.4s ease-out 0.1s, opacity 0.4s ease-out 0.1s;
}/*#DIV_2*/

#H2_3 {
    box-sizing: border-box;
    color: rgb(61, 68, 81);
    height: 40px;
    text-align: center;
    text-decoration: none solid rgb(61, 68, 81);
    text-size-adjust: 100%;
    width: 940px;
    column-rule-color: rgb(61, 68, 81);
    perspective-origin: 470px 20px;
    transform-origin: 470px 20px;
    caret-color: rgb(61, 68, 81);
    border: 0px none rgb(61, 68, 81);
    font: normal normal 600 normal 34px / 40.8px "Open Sans", sans-serif;
    margin: 0px 0px 25px;
    outline: rgb(61, 68, 81) none 0px;
}/*#H2_3*/

#DIV_4 {
    bottom: 0px;
    box-sizing: border-box;
    color: rgb(61, 68, 81);
    height: 590px;
    left: 0px;
    position: relative;
    right: 0px;
    text-decoration: none solid rgb(61, 68, 81);
    text-size-adjust: 100%;
    top: 0px;
    width: 940px;
    column-rule-color: rgb(61, 68, 81);
    perspective-origin: 470px 295px;
    transform-origin: 470px 295px;
    caret-color: rgb(61, 68, 81);
    border: 0px none rgb(61, 68, 81);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    outline: rgb(61, 68, 81) none 0px;
}/*#DIV_4*/

#DIV_5 {
    bottom: 92px;
    box-sizing: border-box;
    color: rgb(61, 68, 81);
    content: '""';
    height: 418px;
    left: 470px;
    opacity: 0.2;
    position: absolute;
    right: 468px;
    text-decoration: none solid rgb(61, 68, 81);
    text-size-adjust: 100%;
    top: 80px;
    width: 4px;
    column-rule-color: rgb(61, 68, 81);
    perspective-origin: 2px 209px;
    transform-origin: 2px 209px;
    caret-color: rgb(61, 68, 81);
    background: #007FFF none repeat scroll 0% 0% / auto padding-box border-box;
    border: 0px none rgb(61, 68, 81);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    margin: 0px 0px 0px -2px;
    outline: rgb(61, 68, 81) none 0px;
}/*#DIV_5*/

#DIV_6 {
    bottom: 0px;
    box-sizing: border-box;
    color: rgb(61, 68, 81);
    height: 590px;
    left: 0px;
    position: relative;
    right: 0px;
    text-decoration: none solid rgb(61, 68, 81);
    text-size-adjust: 100%;
    top: 0px;
    width: 940px;
    column-rule-color: rgb(61, 68, 81);
    perspective-origin: 470px 295px;
    transform-origin: 470px 295px;
    caret-color: rgb(61, 68, 81);
    border: 0px none rgb(61, 68, 81);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    outline: rgb(61, 68, 81) none 0px;
}/*#DIV_6*/

#DIV_6:after {
    box-sizing: border-box;
    clear: both;
    color: rgb(61, 68, 81);
    content: '"' '"';
    display: table;
    text-decoration: none solid rgb(61, 68, 81);
    text-size-adjust: 100%;
    column-rule-color: rgb(61, 68, 81);
    caret-color: rgb(61, 68, 81);
    border: 0px none rgb(61, 68, 81);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    outline: rgb(61, 68, 81) none 0px;
}/*#DIV_6:after*/

#DIV_6:before {
    box-sizing: border-box;
    color: rgb(61, 68, 81);
    content: '"' '"';
    display: table;
    text-decoration: none solid rgb(61, 68, 81);
    text-size-adjust: 100%;
    column-rule-color: rgb(61, 68, 81);
    caret-color: rgb(61, 68, 81);
    border: 0px none rgb(61, 68, 81);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    outline: rgb(61, 68, 81) none 0px;
}/*#DIV_6:before*/

#DIV_7 {
    bottom: 393px;
    box-sizing: border-box;
    clear: left;
    color: rgb(117, 117, 117);
    height: 172px;
    left: 0px;
    position: absolute;
    right: 470px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    top: 0px;
    width: 470px;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 235px 86px;
    transform-origin: 235px 86px;
    caret-color: rgb(117, 117, 117);
    border: 0px none rgb(117, 117, 117);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    margin: 0px 0px 25px;
    outline: rgb(117, 117, 117) none 0px;
}/*#DIV_7*/

#SPAN_8, #SPAN_40 {
    bottom: 84px;
    box-sizing: border-box;
    color: rgb(117, 117, 117);
    display: block;
    height: 8px;
    left: 466px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    top: 80px;
    width: 8px;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 4px 4px;
    transform-origin: 4px 4px;
    caret-color: rgb(117, 117, 117);
    background: #007FFF none repeat scroll 0% 0% / auto padding-box border-box;
    border: 0px none rgb(117, 117, 117);
    border-radius: 50% 50% 50% 50%;
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    margin: 0px -4px 0px 0px;
    outline: rgb(117, 117, 117) none 0px;
}/*#SPAN_8, #SPAN_40*/

#DIV_9, #DIV_41 {
    bottom: 0px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px 0px, rgba(0, 0, 0, 0.24) 0px 1px 4px 0px;
    box-sizing: border-box;
    color: rgb(117, 117, 117);
    height: 172px;
    left: 0px;
    position: relative;
    right: 0px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    top: 0px;
    width: 435px;
    backface-visibility: hidden;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 217.5px 86px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    transform-origin: 217.5px 86px;
    caret-color: rgb(117, 117, 117);
    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
    border-top: 5px solid #007FFF;
    border-right: 0px solid #007FFF;
    border-bottom: 0px solid #007FFF;
    border-left: 0px solid #007FFF;
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    margin: 0px 35px 0px 0px;
    outline: rgb(117, 117, 117) none 0px;
    padding: 20px 23.5px;
    transition: transform 0.4s ease-out 0.1s, opacity 0.4s ease-out 0.1s;
}/*#DIV_9, #DIV_41*/

#SPAN_10, #SPAN_42 {
    background-position: -18px 0px;
    bottom: 66px;
    box-sizing: border-box;
    color: rgb(117, 117, 117);
    display: block;
    height: 41px;
    left: 435px;
    position: absolute;
    right: -12px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    top: 60px;
    width: 12px;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 6px 20.5px;
    transform-origin: 6px 20.5px;
    caret-color: rgb(117, 117, 117);
    background: rgba(0, 0, 0, 0) url("http://rscard.px-lab.com/img/arrows.png") no-repeat scroll -18px 0px / auto padding-box border-box;
    border: 0px none rgb(117, 117, 117);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    outline: rgb(117, 117, 117) none 0px;
}/*#SPAN_10, #SPAN_42*/

#SPAN_10:before, #SPAN_42:before {
    box-sizing: border-box;
    color: rgb(117, 117, 117);
    content: '';
    display: block;
    height: 40px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    width: 10px;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 5px 20px;
    transform-origin: 5px 20px;
    caret-color: rgb(117, 117, 117);
    border-top: 20px solid rgba(0, 0, 0, 0);
    border-right: 0px none rgb(117, 117, 117);
    border-bottom: 20px solid rgba(0, 0, 0, 0);
    border-left: 10px solid rgb(255, 255, 255);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    margin: 0px 2px 0px 0px;
    outline: rgb(117, 117, 117) none 0px;
}/*#SPAN_10:before, #SPAN_42:before*/

#DIV_11, #DIV_19, #DIV_27, #DIV_35, #DIV_43 {
    box-sizing: border-box;
    color: #007FFF;
    height: 24px;
    text-align: left;
    text-decoration: none solid #007FFF;
    text-size-adjust: 100%;
    width: 388px;
    column-rule-color: #007FFF;
    perspective-origin: 194px 12px;
    transform-origin: 194px 12px;
    caret-color: #007FFF;
    border: 0px none #007FFF;
    font: normal normal bold normal 16px / 16px "Open Sans", sans-serif;
    margin: 0px 0px 15px;
    outline: #007FFF none 0px;
}/*#DIV_11, #DIV_19, #DIV_27, #DIV_35, #DIV_43*/

#SPAN_12, #SPAN_20, #SPAN_28, #SPAN_36, #SPAN_44 {
    bottom: 0px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    display: inline-block;
    height: 24px;
    left: 0px;
    position: relative;
    right: 0px;
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    text-size-adjust: 100%;
    top: 0px;
    width: 91.7188px;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 45.8594px 12px;
    transform-origin: 45.8594px 12px;
    caret-color: rgb(255, 255, 255);
    background: #007FFF none repeat scroll 0% 0% / auto padding-box border-box;
    border: 0px none rgb(255, 255, 255);
    border-radius: 3px 3px 3px 3px;
    font: normal normal bold normal 14px / 14px "Open Sans", sans-serif;
    outline: rgb(255, 255, 255) none 0px;
    padding: 5px 8px;
}/*#SPAN_12, #SPAN_20, #SPAN_28, #SPAN_36, #SPAN_44*/

#SPAN_12:before, #SPAN_20:before, #SPAN_28:before, #SPAN_36:before, #SPAN_44:before {
    bottom: -8px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    content: '';
    display: block;
    height: 8px;
    left: 5px;
    position: absolute;
    right: 78.7188px;
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    text-size-adjust: 100%;
    top: 24px;
    width: 8px;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 4px 4px;
    transform-origin: 4px 4px;
    caret-color: rgb(255, 255, 255);
    border-top: 0px solid rgba(0, 0, 0, 0);
    border-right: 0px solid rgba(0, 0, 0, 0);
    border-bottom: 8px solid rgba(0, 0, 0, 0);
    border-left: 8px solid #007FFF;
    font: normal normal bold normal 14px / 14px "Open Sans", sans-serif;
    outline: rgb(255, 255, 255) none 0px;
}/*#SPAN_12:before, #SPAN_20:before, #SPAN_28:before, #SPAN_36:before, #SPAN_44:before*/

#H3_13, #H3_21, #H3_45 {
    box-sizing: border-box;
    color: rgb(65, 65, 65);
    height: 38px;
    text-align: left;
    text-decoration: none solid rgb(65, 65, 65);
    text-size-adjust: 100%;
    width: 388px;
    column-rule-color: rgb(65, 65, 65);
    perspective-origin: 194px 12px;
    transform-origin: 194px 12px;
    caret-color: rgb(65, 65, 65);
    border: 0px none rgb(65, 65, 65);
    font: normal normal normal normal 22px / 24.2px "Open Sans", sans-serif;
    margin: 0px 0px 20px;
    outline: rgb(65, 65, 65) none 0px;
}/*#H3_13, #H3_21, #H3_45*/

#H4_14, #H4_22, #H4_30, #H4_38, #H4_46 {
    box-sizing: border-box;
    color: rgb(135, 135, 135);
    height: 14px;
    text-align: left;
    text-decoration: none solid rgb(135, 135, 135);
    text-size-adjust: 100%;
    text-transform: uppercase;
    width: 388px;
    column-rule-color: rgb(135, 135, 135);
    perspective-origin: 194px 7px;
    transform-origin: 194px 7px;
    caret-color: rgb(135, 135, 135);
    border: 0px none rgb(135, 135, 135);
    font: normal normal normal normal 13px / 14.3px "Open Sans", sans-serif;
    margin: 0px 0px 30px;
    outline: rgb(135, 135, 135) none 0px;
}/*#H4_14, #H4_22, #H4_30, #H4_38, #H4_46*/

#DIV_15 {
    bottom: 323px;
    box-sizing: border-box;
    clear: right;
    color: rgb(117, 117, 117);
    height: 172px;
    left: 470px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    top: 70px;
    width: 470px;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 235px 86px;
    transform-origin: 235px 86px;
    caret-color: rgb(117, 117, 117);
    border: 0px none rgb(117, 117, 117);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    margin: 0px 0px 25px;
    outline: rgb(117, 117, 117) none 0px;
}/*#DIV_15*/

#SPAN_16 {
    bottom: 84px;
    box-sizing: border-box;
    color: rgb(117, 117, 117);
    display: block;
    height: 8px;
    left: 0px;
    position: absolute;
    right: 466px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    top: 80px;
    width: 8px;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 4px 4px;
    transform-origin: 4px 4px;
    caret-color: rgb(117, 117, 117);
    background: #007FFF none repeat scroll 0% 0% / auto padding-box border-box;
    border: 0px none rgb(117, 117, 117);
    border-radius: 50% 50% 50% 50%;
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    margin: 0px 0px 0px -4px;
    outline: rgb(117, 117, 117) none 0px;
}/*#SPAN_16*/

#DIV_17 {
    bottom: 0px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px 0px, rgba(0, 0, 0, 0.24) 0px 1px 4px 0px;
    box-sizing: border-box;
    color: rgb(117, 117, 117);
    height: 172px;
    left: 0px;
    position: relative;
    right: 0px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    top: 0px;
    width: 435px;
    backface-visibility: hidden;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 217.5px 86px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    transform-origin: 217.5px 86px;
    caret-color: rgb(117, 117, 117);
    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
    border-top: 5px solid #007FFF;
    border-right: 0px solid #007FFF;
    border-bottom: 0px solid #007FFF;
    border-left: 0px solid #007FFF;
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    margin: 0px 0px 0px 35px;
    outline: rgb(117, 117, 117) none 0px;
    padding: 20px 23.5px;
    transition: transform 0.4s ease-out 0.1s, opacity 0.4s ease-out 0.1s;
}/*#DIV_17*/

#SPAN_18 {
    background-position: 0px 0px;
    bottom: 66px;
    box-sizing: border-box;
    color: rgb(117, 117, 117);
    display: block;
    height: 41px;
    left: -12px;
    position: absolute;
    right: 435px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    top: 60px;
    width: 12px;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 6px 20.5px;
    transform-origin: 6px 20.5px;
    caret-color: rgb(117, 117, 117);
    background: rgba(0, 0, 0, 0) url("http://rscard.px-lab.com/img/arrows.png") no-repeat scroll 0px 0px / auto padding-box border-box;
    border: 0px none rgb(117, 117, 117);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    outline: rgb(117, 117, 117) none 0px;
}/*#SPAN_18*/

#SPAN_18:before {
    box-sizing: border-box;
    color: rgb(117, 117, 117);
    content: '';
    display: block;
    height: 40px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    width: 10px;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 5px 20px;
    transform-origin: 5px 20px;
    caret-color: rgb(117, 117, 117);
    border-top: 20px solid rgba(0, 0, 0, 0);
    border-right: 10px solid rgb(255, 255, 255);
    border-bottom: 20px solid rgba(0, 0, 0, 0);
    border-left: 0px none rgb(117, 117, 117);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    margin: 0px 0px 0px 2px;
    outline: rgb(117, 117, 117) none 0px;
}/*#SPAN_18:before*/

#DIV_23 {
    bottom: 172px;
    box-sizing: border-box;
    clear: left;
    color: rgb(117, 117, 117);
    height: 196px;
    left: 0px;
    position: absolute;
    right: 470px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    top: 197px;
    width: 470px;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 235px 98px;
    transform-origin: 235px 98px;
    caret-color: rgb(117, 117, 117);
    border: 0px none rgb(117, 117, 117);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    margin: 0px 0px 25px;
    outline: rgb(117, 117, 117) none 0px;
}/*#DIV_23*/

#SPAN_24 {
    bottom: 108px;
    box-sizing: border-box;
    color: rgb(117, 117, 117);
    display: block;
    height: 8px;
    left: 466px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    top: 80px;
    width: 8px;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 4px 4px;
    transform-origin: 4px 4px;
    caret-color: rgb(117, 117, 117);
    background: #007FFF none repeat scroll 0% 0% / auto padding-box border-box;
    border: 0px none rgb(117, 117, 117);
    border-radius: 50% 50% 50% 50%;
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    margin: 0px -4px 0px 0px;
    outline: rgb(117, 117, 117) none 0px;
}/*#SPAN_24*/

#DIV_25 {
    bottom: 0px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px 0px, rgba(0, 0, 0, 0.24) 0px 1px 4px 0px;
    box-sizing: border-box;
    color: rgb(117, 117, 117);
    height: 196px;
    left: 0px;
    position: relative;
    right: 0px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    top: 0px;
    width: 435px;
    backface-visibility: hidden;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 217.5px 98px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    transform-origin: 217.5px 98px;
    caret-color: rgb(117, 117, 117);
    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
    border-top: 5px solid #007FFF;
    border-right: 0px solid #007FFF;
    border-bottom: 0px solid #007FFF;
    border-left: 0px solid #007FFF;
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    margin: 0px 35px 0px 0px;
    outline: rgb(117, 117, 117) none 0px;
    padding: 20px 23.5px;
    transition: transform 0.4s ease-out 0.1s, opacity 0.4s ease-out 0.1s;
}/*#DIV_25*/

#SPAN_26 {
    background-position: -18px 0px;
    bottom: 90px;
    box-sizing: border-box;
    color: rgb(117, 117, 117);
    display: block;
    height: 41px;
    left: 435px;
    position: absolute;
    right: -12px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    top: 60px;
    width: 12px;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 6px 20.5px;
    transform-origin: 6px 20.5px;
    caret-color: rgb(117, 117, 117);
    background: rgba(0, 0, 0, 0) url("http://rscard.px-lab.com/img/arrows.png") no-repeat scroll -18px 0px / auto padding-box border-box;
    border: 0px none rgb(117, 117, 117);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    outline: rgb(117, 117, 117) none 0px;
}/*#SPAN_26*/

#SPAN_26:before {
    box-sizing: border-box;
    color: rgb(117, 117, 117);
    content: '';
    display: block;
    height: 40px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    width: 10px;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 5px 20px;
    transform-origin: 5px 20px;
    caret-color: rgb(117, 117, 117);
    border-top: 20px solid rgba(0, 0, 0, 0);
    border-right: 0px none rgb(117, 117, 117);
    border-bottom: 20px solid rgba(0, 0, 0, 0);
    border-left: 10px solid rgb(255, 255, 255);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    margin: 0px 2px 0px 0px;
    outline: rgb(117, 117, 117) none 0px;
}/*#SPAN_26:before*/

#H3_29, #H3_37 {
    box-sizing: border-box;
    color: rgb(65, 65, 65);
    height: 48px;
    text-align: left;
    text-decoration: none solid rgb(65, 65, 65);
    text-size-adjust: 100%;
    width: 388px;
    column-rule-color: rgb(65, 65, 65);
    perspective-origin: 194px 24px;
    transform-origin: 194px 24px;
    caret-color: rgb(65, 65, 65);
    border: 0px none rgb(65, 65, 65);
    font: normal normal normal normal 22px / 24.2px "Open Sans", sans-serif;
    margin: 0px 0px 20px;
    outline: rgb(65, 65, 65) none 0px;
}/*#H3_29, #H3_37*/

#DIV_31 {
    bottom: 102px;
    box-sizing: border-box;
    clear: right;
    color: rgb(117, 117, 117);
    height: 196px;
    left: 470px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    top: 267px;
    width: 470px;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 235px 98px;
    transform-origin: 235px 98px;
    caret-color: rgb(117, 117, 117);
    border: 0px none rgb(117, 117, 117);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    margin: 0px 0px 25px;
    outline: rgb(117, 117, 117) none 0px;
}/*#DIV_31*/

#SPAN_32 {
    bottom: 108px;
    box-sizing: border-box;
    color: rgb(117, 117, 117);
    display: block;
    height: 8px;
    left: 0px;
    position: absolute;
    right: 466px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    top: 80px;
    width: 8px;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 4px 4px;
    transform-origin: 4px 4px;
    caret-color: rgb(117, 117, 117);
    background: #007FFF none repeat scroll 0% 0% / auto padding-box border-box;
    border: 0px none rgb(117, 117, 117);
    border-radius: 50% 50% 50% 50%;
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    margin: 0px 0px 0px -4px;
    outline: rgb(117, 117, 117) none 0px;
}/*#SPAN_32*/

#DIV_33 {
    bottom: 0px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px 0px, rgba(0, 0, 0, 0.24) 0px 1px 4px 0px;
    box-sizing: border-box;
    color: rgb(117, 117, 117);
    height: 196px;
    left: 0px;
    position: relative;
    right: 0px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    top: 0px;
    width: 435px;
    backface-visibility: hidden;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 217.5px 98px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    transform-origin: 217.5px 98px;
    caret-color: rgb(117, 117, 117);
    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
    border-top: 5px solid #007FFF;
    border-right: 0px solid #007FFF;
    border-bottom: 0px solid #007FFF;
    border-left: 0px solid #007FFF;
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    margin: 0px 0px 0px 35px;
    outline: rgb(117, 117, 117) none 0px;
    padding: 20px 23.5px;
    transition: transform 0.4s ease-out 0.1s, opacity 0.4s ease-out 0.1s;
}/*#DIV_33*/

#SPAN_34 {
    background-position: 0px 0px;
    bottom: 90px;
    box-sizing: border-box;
    color: rgb(117, 117, 117);
    display: block;
    height: 41px;
    left: -12px;
    position: absolute;
    right: 435px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    top: 60px;
    width: 12px;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 6px 20.5px;
    transform-origin: 6px 20.5px;
    caret-color: rgb(117, 117, 117);
    background: rgba(0, 0, 0, 0) url("http://rscard.px-lab.com/img/arrows.png") no-repeat scroll 0px 0px / auto padding-box border-box;
    border: 0px none rgb(117, 117, 117);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    outline: rgb(117, 117, 117) none 0px;
}/*#SPAN_34*/

#SPAN_34:before {
    box-sizing: border-box;
    color: rgb(117, 117, 117);
    content: '';
    display: block;
    height: 40px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    width: 10px;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 5px 20px;
    transform-origin: 5px 20px;
    caret-color: rgb(117, 117, 117);
    border-top: 20px solid rgba(0, 0, 0, 0);
    border-right: 10px solid rgb(255, 255, 255);
    border-bottom: 20px solid rgba(0, 0, 0, 0);
    border-left: 0px none rgb(117, 117, 117);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    margin: 0px 0px 0px 2px;
    outline: rgb(117, 117, 117) none 0px;
}/*#SPAN_34:before*/

#DIV_39 {
    bottom: 0px;
    box-sizing: border-box;
    clear: left;
    color: rgb(117, 117, 117);
    height: 172px;
    left: 0px;
    position: absolute;
    right: 470px;
    text-decoration: none solid rgb(117, 117, 117);
    text-size-adjust: 100%;
    top: 418px;
    width: 470px;
    column-rule-color: rgb(117, 117, 117);
    perspective-origin: 235px 86px;
    transform-origin: 235px 86px;
    caret-color: rgb(117, 117, 117);
    border: 0px none rgb(117, 117, 117);
    font: normal normal normal normal 16px / 24px "Open Sans", sans-serif;
    outline: rgb(117, 117, 117) none 0px;
}/*#DIV_39*/








.event-list {
    list-style: none;
    font-family: 'Lato', sans-serif;
    margin: 0px;
    padding: 0px;
}
.event-list > li {
    background-color: rgb(255, 255, 255);
    border: 1px solid white;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.12);
    -moz-box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.12);
    box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.12);
    padding: 0px;
    margin: 0px 0px 20px;
}
.event-list > li > time {
    display: inline-block;
    width: 100%;
    color: rgb(255, 255, 255);
    background-color: rgb(0, 127, 255);
    padding: 5px;
    text-align: center;
    text-transform: uppercase;
}
.event-list > li:nth-child(even) > time {
    background-color: rgb(165, 82, 167);
}
.event-list > li > time > span {
    display: none;
}
.event-list > li > time > .day {
    display: block;
    font-size: 56pt;
    font-weight: 100;
    line-height: 1;
}
.event-list > li time > .month {
    display: block;
    font-size: 24pt;
    font-weight: 900;
    line-height: 1;
}
.event-list > li > img {
    width: 100%;
}
.event-list > li > .info {
    padding-top: 5px;
    text-align: center;
}
.event-list > li > .info > .title {
    font-size: 17pt;
    font-weight: 700;
    margin: 0px;
}
.event-list > li > .info > .desc {
    font-size: 13pt;
    font-weight: 300;
    margin: 0px;
}
.event-list > li > .info > ul,
.event-list > li > .social > ul {
    display: table;
    list-style: none;
    margin: 10px 0px 0px;
    padding: 0px;
    width: 100%;
    text-align: center;
}
.event-list > li > .social > ul {
    margin: 0px;
}
.event-list > li > .info > ul > li,
.event-list > li > .social > ul > li {
    display: table-cell;
    cursor: pointer;
    color: rgb(30, 30, 30);
    font-size: 11pt;
    font-weight: 300;
    padding: 3px 0px;
}
.event-list > li > .info > ul > li > a {
    display: block;
    width: 100%;
    color: rgb(30, 30, 30);
    text-decoration: none;
}
.event-list > li > .social > ul > li {
    padding: 0px;
}
.event-list > li > .social > ul > li > a {
    padding: 3px 0px;
}
.event-list > li > .info > ul > li:hover,
.event-list > li > .social > ul > li:hover {
    color: rgb(30, 30, 30);
    background-color: rgb(200, 200, 200);
}
.facebook a,
.twitter a,
.google-plus a {
    display: block;
    width: 100%;
    color: rgb(75, 110, 168) !important;
}
.twitter a {
    color: rgb(79, 213, 248) !important;
}
.google-plus a {
    color: rgb(0, 127, 255) !important;
}
.facebook:hover a {
    color: rgb(255, 255, 255) !important;
    background-color: rgb(75, 110, 168) !important;
}
.twitter:hover a {
    color: rgb(255, 255, 255) !important;
    background-color: rgb(79, 213, 248) !important;
}
.google-plus:hover a {
    color: rgb(255, 255, 255) !important;
    background-color: rgb(0, 127, 255) !important;
}
@media (max-width: 768px) {
    #SECTION_1{
        display: none;
    }
}
@media (min-width: 768px) {




    .event-list > li {
        position: relative;
        display: block;
        width: 100%;
        height: 120px;
        padding: 0px;
    }
    .event-list > li > time,
    .event-list > li > img  {
        display: inline-block;
    }
    .event-list > li > time,
    .event-list > li > img {
        width: 120px;
        float: left;
    }
    .event-list > li > .info {
        background-color: rgb(255, 255, 255)
        overflow: hidden;
    }
    .event-list > li > time,
    .event-list > li > img {
        width: 120px;
        height: 120px;
        padding: 0px;
        margin: 0px;
    }
    .event-list > li > .info {
        padding: 20px;
        position: relative;
        height: 120px;
        text-align: left;
        padding-right: 40px;
    }
    .event-list > li > .info > .title,
    .event-list > li > .info > .desc {
        padding: 0px 10px;
    }
    .event-list > li > .info > ul {
        position: absolute;
        left: 0px;
        bottom: 0px;
    }
    .event-list > li > .social {
        position: absolute;
        top: 0px;
        right: 0px;
        display: block;
        width: 40px;
    }
    .event-list > li > .social > ul {
        border-left: 1px solid rgb(230, 230, 230);
    }
    .event-list > li > .social > ul > li {
        display: block;
        padding: 0px;
    }
    .event-list > li > .social > ul > li > a {
        display: block;
        width: 40px;
        padding: 10px 0px 9px;
    }
}
`;
