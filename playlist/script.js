function _callback_onAutoplayBlocked() {
    video.muted = true;
    video.play();
}

function isSafari() {
    var chr = window.navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    var sfri = window.navigator.userAgent.toLowerCase().indexOf("safari") > -1;
    return !chr && sfri;
}

function _checkAutoPlay(p) {
    var s = window['Promise'] ? window['Promise'].toString() : '';

    if (s.indexOf('function Promise()') !== -1 || s.indexOf('function ZoneAwarePromise()') !== -1) {
        p.catch(function(error) {
            console.error("_checkAutoPlay, error:", error)
            if(error.name == "NotAllowedError") { // For Chrome/Firefox
                console.error("_checkAutoPlay: error.name:", "NotAllowedError")
                _callback_onAutoplayBlocked();
            } else if (error.name == "AbortError" && isSafari()) {  // Only for Safari
                console.error("_checkAutoPlay: AbortError (Safari)")
                _callback_onAutoplayBlocked();
            } else {
                console.error("_checkAutoPlay: happened something else ", error);
                // throw error; // happened something else
            }
        }).then(function(){
            console.log("_checkAutoPlay: then");
            // Auto-play started
        });
    } else {
        console.error("_checkAutoplay: promise could not work in your browser ", p);
    }
}

var video = document.getElementById("roll");
_checkAutoPlay(video.play());