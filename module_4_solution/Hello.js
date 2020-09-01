(function(window) {
    var hellofunc = new Object();
    hellofunc.speak = function(name) {
        console.log("Hello " + name);
    };
    window.hellofunc = hellofunc;
})(window);
