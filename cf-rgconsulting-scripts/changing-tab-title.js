var betaFeatures = false;
var kScript_3 = true,
ps3_kUserScript = "28152",
ps3_cTabTitle = "â¤ WE MISS YOU â¤";
console.log('%cCF rgconsulting Scripts', 'color:#bd1b1e;font-size:40px;font-weight:bold;font-family:Aria;');console.log('%chttps://www.rahulconsulting.com', 'color:#000;font-size:16px;font-weight:bold;font-family:Aria;');console.log('%cAdding rgconsulting Script: CF Tab Title', 'color:green;');
var pageTitle = document.title;

function ps3_onFocus() {
    document.title = pageTitle;
}
function ps3_onBlur() {
    document.title = ps3_cTabTitle;
}

var ps3_interval;
var ps3_embedFocused;
window.focus();      // I needed this for events to fire afterwards initially  
addEventListener('focus', function (e) {
    // global window focused
    if (ps3_embedFocused) {
        // embedded element lost focus
        ps3_embedFocused = false;
        clearInterval(ps3_interval);
    }
    else ps3_onFocus();
});

addEventListener('blur', function (e) {
    // global window lost focus
    if (document.hasFocus()) {
        // embedded element is focused
        ps3_embedFocused = true;
        ps3_interval = setInterval(() => {
            if (!document.hasFocus()) {
                // embedded element lost focus
                window.focus();
                ps3_embedFocused = false;
                ps3_onBlur();
                clearInterval(ps3_interval);
            }
        }, 100);
    }
    else ps3_onBlur();
});
