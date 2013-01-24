// ==UserScript==
// @name         Skewer Everything
// @description  Add a toggle button to run Skewer on the current page
// @lastupdated  2013-01-24
// @version      1.0
// @license      Public Domain
// @include      http://*
// @require      http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

var toggle = $('<div/>').bind('click', inject).css({
    "width": '0px',
    "height": '0px',
    "border-style": 'solid',
    "border-width": '0 12px 12px 0',
    "border-color": 'transparent #F00 transparent transparent',
    "position": 'absolute',
    "right": 0,
    "top": 0,
    "z-index": 100
});

var injected = false;

function inject() {
    if (!injected) {
        var script = $('<script/>').attr({src: 'http://localhost:8080/skewer'});
        if (!unsafeWindow.jQuery) unsafeWindow.$ = $;
        $('head').append(script);
        toggle.css('border-right-color', '#0F0');
        injected = true;
    }
}

/* Don't use on iframes. */
if (window.top === window.self) {
    $('body').append(toggle);
}