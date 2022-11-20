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

function pictureHeadline() {
    $('[data-title*="rgconsulting-image-headline-container"]')['each'](function() {
        var _0x898fx2 = $(this);
        var _0x898fx3 = _0x898fx2['css']('background-image');
        _0x898fx2['addClass']('noBg');
        var _0x898fx4 = $(this)['find']('[data-title*="rgconsulting-image-headline"] .elHeadline');
        _0x898fx4['each'](function() {
            $(this)['css']('background-image', _0x898fx3)
        })
    });
    $('head')['append']('<style>[data-title*="rgconsulting-image-headline"] .elHeadline{-webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; background-position:center;}.noBg{background: none !important;}</style>')
}
