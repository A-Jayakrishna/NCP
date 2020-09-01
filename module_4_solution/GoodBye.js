(function(window) {
    var byeSpeaker = new Object();
    byeSpeaker.speak = function speak(name) {
        console.log("Good Bye " + name);
    };
    window.byefunc = byeSpeaker;
})(window);
