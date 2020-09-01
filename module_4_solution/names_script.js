(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var start_letter = names[i].charAt(0).toLowerCase();
        if (start_letter === 'j'||start_letter === 'J') {
            byefunc.speak(names[i]);
        } else {
            hellofunc.speak(names[i]);
        }
    }
})();
