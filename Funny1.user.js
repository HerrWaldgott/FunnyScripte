// ==UserScript==
// @name         Funny1
// @version      2.0.0
// @author       HerrWaldgott
// @include      *://www.leitstellenspiel.de/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var user = '';
    if (typeof username !== 'undefined') {
        user = 'Hallo ' + username + ', mein Liebster!<br>';
    }

    $('body').empty().append(user + '<canvas id="myCanvas" width="' + $(document).width() + '" height="' + $(document).height() + '"></canvas>');

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo($(document).width() / 2 - 100, 200);
    ctx.lineTo($(document).width() / 2 - 100, 400);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo($(document).width() / 2 + 100, 200);
    ctx.lineTo($(document).width() / 2 + 100, 400);
    ctx.stroke();

    ctx.beginPath();
    //ctx.moveTo($(document).width() / 2, 200);
    ctx.arc($(document).width() / 2, 200, 100, Math.PI, 0);
    ctx.stroke();

    //ctx.moveTo($(document).width() / 2 + 150, 200);
    ctx.beginPath();
    ctx.arc($(document).width() / 2 + 200, 400, 100, Math.PI, 0.7 * Math.PI);
    ctx.stroke();

    //ctx.moveTo($(document).width() / 2 - 150, 200);
    ctx.beginPath();
    ctx.arc($(document).width() / 2 - 200, 400, 100, 0, 0.3 * Math.PI, true);
    ctx.stroke();
})();
