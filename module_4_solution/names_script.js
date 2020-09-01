(function() {
    var names = ["Reviewer", "jayakrishna","Jasvith", "jordan", "michel", "Jackson", "spiderman", "nolan", "stark", "James bond", "jack","ajkc","bloodhund","caustic","octane"];
    for (var i = 0; i < names.length; i++) {
        var start_letter = names[i].charAt(0).toLowerCase();
        if (start_letter === 'j'||start_letter === 'J') {
            byefunc.speak(names[i]);
        } else {
            hellofunc.speak(names[i]);
        }
    }
})();
