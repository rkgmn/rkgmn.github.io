/**************************
* Copyright 2022 Rahul Consulting. All Rights Reserved.
* Do not share, or distribute this code without the author's consent.
* This copyright notice must remain in place whenever using
* this code - DO NOT REMOVE
* Author: Rahul Gupta
* Website: https://rahulconsulting.com
* Add-on: RGC Rotating Headline
* Version: 1.0
**************************/
function headlineRotator(_0xb665x2, _0xb665x3, _0xb665x4, _0xb665x5) {
  var _0xb665x6 = $('[data-title*="rgconsulting-rotating-headline"] .elHeadline');
  var _0xb665x7 = _0xb665x6.text();
  var _0xb665x8 = _0xb665x7.split("|");
  _0xb665x8.shift();
  $(_0xb665x6).each(function () {
    var _0xb665x9 = $(this);
    var _0xb665xa = _0xb665x9.text().split("|");
    var _0xb665xb = "<span class='static'>" + $.trim(_0xb665xa[0]) + "</span>";
    _0xb665xa.shift();
    $.each(_0xb665xa, function (_0xb665xc, _0xb665xd) {
      _0xb665xb += "<span class='rotate'> " + _0xb665xd + "</span>";
    });
    _0xb665x9.html(_0xb665xb);
    if (_0xb665x2 == true) {
      _0xb665x9.wrapInner("<b></b>");
    }
    ;
    if (_0xb665x3 == true) {
      _0xb665x9.wrapInner("<i></i>");
    }
    ;
    if (_0xb665x5 != "undefined" || _0xb665x5 != "") {
      $("head").append("<style>.rotate .letter{color:" + _0xb665x5 + "}</style>");
    }
    ;
    _0xb665x9.find(".rotate").wrapAll('<span class="rotator-container"></span>');
    var _0xb665xe = _0xb665x9.find(".rotate").eq(0).innerHeight();
    _0xb665x9.find(".rotator-container").innerHeight(_0xb665xe);
    var _0xb665xf = Math.max.apply(Math, _0xb665x9.find(".rotate").map(function () {
      return $(this).width();
    }).get());
    _0xb665x9.find(".rotator-container").width(_0xb665xf + 1);
    var _0xb665x10 = _0xb665x9.find(".rotate");
    var _0xb665x11 = [];
    var _0xb665x12 = 0;
    _0xb665x10[_0xb665x12].style.opacity = 1;
    for (var _0xb665xc = 0; _0xb665xc < _0xb665x10.length; _0xb665xc++) {
      _0xb665x18(_0xb665x10[_0xb665xc]);
    }
    ;
    function _0xb665x13() {
      var _0xb665x14 = _0xb665x11[_0xb665x12];
      var _0xb665x15 = _0xb665x12 == _0xb665x10.length - 1 ? _0xb665x11[0] : _0xb665x11[_0xb665x12 + 1];
      for (var _0xb665xc = 0; _0xb665xc < _0xb665x14.length; _0xb665xc++) {
        _0xb665x16(_0xb665x14, _0xb665xc);
      }
      ;
      for (var _0xb665xc = 0; _0xb665xc < _0xb665x15.length; _0xb665xc++) {
        _0xb665x15[_0xb665xc].className = "letter behind";
        _0xb665x15[0].parentElement.style.opacity = 1;
        _0xb665x17(_0xb665x15, _0xb665xc);
      }
      ;
      _0xb665x12 = _0xb665x12 == _0xb665x11.length - 1 ? 0 : _0xb665x12 + 1;
    }
    function _0xb665x16(_0xb665x14, _0xb665xc) {
      setTimeout(function () {
        _0xb665x14[_0xb665xc].className = "letter out";
      }, _0xb665xc * 80);
    }
    function _0xb665x17(_0xb665x15, _0xb665xc) {
      setTimeout(function () {
        _0xb665x15[_0xb665xc].className = "letter in";
      }, 340 + _0xb665xc * 80);
    }
    function _0xb665x18(_0xb665x19) {
      var _0xb665x1a = _0xb665x19.innerHTML;
      _0xb665x19.innerHTML = "";
      var _0xb665x1b = [];
      for (var _0xb665xc = 0; _0xb665xc < _0xb665x1a.length; _0xb665xc++) {
        var _0xb665x1c = document.createElement("span");
        _0xb665x1c.className = "letter";
        _0xb665x1c.innerHTML = _0xb665x1a.charAt(_0xb665xc);
        _0xb665x19.appendChild(_0xb665x1c);
        _0xb665x1b.push(_0xb665x1c);
      }
      ;
      _0xb665x11.push(_0xb665x1b);
    }
    _0xb665x13();
    setInterval(_0xb665x13, _0xb665x4);
  });
  $("head").append("<style>.static{display: inline; vertical-align: baseline;} .rotator-container{display: inline-block;text-align: left;vertical-align: middle;}.rotate {position: absolute; opacity: 0;}.letter {display: inline-block;white-space: pre-wrap;position: relative;float: left;transform: translateZ(25px);transform-origin: 50% 50% 25px;}.letter.out {transform: rotateX(90deg);transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19);}.letter.behind {transform: rotateX(-90deg);}.letter.in {transform: rotateX(0deg);transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);}</style>");
}
