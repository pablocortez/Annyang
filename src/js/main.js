$(function () {

    annyang.start();

    if (annyang) {
        var commands = {
            'say hello': function () {
                $(".hello").typed({
                    strings: ["Hello!", "I am a project created by Pablo for Mrs. Guild's AP Lang class."],
                    typeSpeed: 0
                });
            },
            'what is art': function () {
                $(".hello").empty();
                $(".answer-1").typed({
                    strings: ["Good question.", "Art is the highest expression of human intellect."],
                    typeSpeed: 0
                });
            },
            'clear screen': function () {
                $(".answers").empty();
            }
        };

        annyang.addCommands(commands);
    }

});