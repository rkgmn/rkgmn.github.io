/**************************
* Copyright 2022 Rahul Consulting. All Rights Reserved.
* Do not share, or distribute this code without the author's consent.
* This copyright notice must remain in place whenever using
* this code - DO NOT REMOVE
* Author: Rahul Gupta
* Website: https://rahulconsulting.com
* Add-on: RGC Hover fill
* Version: 1.0
****************************/

function hoverFill() {
    $('[data-title="rgconsulting-hover-fill"]')['each'](function() {
        var _0xd99cx2 = $(this);
        var _0xd99cx3 = _0xd99cx2['find']('.elHeadline');
        var _0xd99cx4 = _0xd99cx3['css']('background-color');
        var _0xd99cx5 = _0xd99cx3['css']('text-align');
        _0xd99cx2['css']({
            "\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72": '',
            "\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E": _0xd99cx5
        });
        _0xd99cx3['css']({
            "\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72": '',
            "\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x69\x6D\x61\x67\x65": 'linear-gradient(to right, transparent 50%, ' + _0xd99cx4 + ' 50%)'
        })
    });
    $('head')['append']('<style>[data-title="rgconsulting-hover-fill"] .elHeadline{background-size: 200%;transition: all 1s ease-in-out;display: inline;}[data-title="rgconsulting-hover-fill"] .elHeadline:hover{background-position: -100%;cursor: pointer;}</style>')
}
