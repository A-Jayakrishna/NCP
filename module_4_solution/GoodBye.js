(function(window) {
    var byefunc = new Object();
    byefunc.speak = function speak(name) {
        console.log("Good Bye " + name);
    };
    window.byefunc = byefunc;
})(window);
