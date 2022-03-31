ps58_kUserScript = "11110",
ps58_cTabTitle = "ðŸ‘‹ Hey There...",
ps58_cTabTitle2 ="come back",
ps58_nInterval = "1";var kScript_18 = true,
var ps58_pageTitle = document.title;
var ps58_interval = 0;
var ps58_blinkInterval = 0;

function ps58_blink(title1, title2, timeout) {
  timeout = timeout || 1000;

  document.title = title1;
  // fix character issue
  if (document.title != title1) {
    title1 = document.title;
  }

  ps58_blinkInterval = setInterval(() => {
    if (document.title == title1) {
      document.title = title2;
      // fix character issue
      if (document.title != title1) {
        title2 = document.title;
      }
    } else {
      document.title = title1;
    }
  }, timeout);
}

function ps58_onFocus() {
  document.title = ps58_pageTitle;
  clearInterval(ps58_blinkInterval);
}
function ps58_onBlur() {
  if (
    typeof ps58_cTabTitle2 !== "undefined" &&
    ps58_cTabTitle2.replace(/  +/g, " ").length > 0
  ) {
    ps58_blink(ps58_cTabTitle, ps58_cTabTitle2, ps58_nInterval * 1000);
  } else {
    ps58_blink(ps58_cTabTitle, ps58_pageTitle, ps58_nInterval * 1000);
  }
}

var ps58_interval;
var ps58_embedFocused;
window.focus(); // I needed this for events to fire afterwards initially
addEventListener("focus", function (e) {
  // global window focused
  if (ps58_embedFocused) {
    // embedded element lost focus
    ps58_embedFocused = false;
    clearInterval(ps58_interval);
  } else ps58_onFocus();
});

addEventListener("blur", function (e) {
  // global window lost focus
  if (document.hasFocus()) {
    // embedded element is focused
    ps58_embedFocused = true;
    ps58_interval = setInterval(() => {
      if (!document.hasFocus()) {
        // embedded element lost focus
        window.focus();
        ps58_embedFocused = false;
        ps58_onBlur();
        clearInterval(ps58_interval);
      }
    }, 100);
  } else ps58_onBlur();
});
    
