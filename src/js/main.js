$(function () {
    $('#start').click(function () {
        annyang.start();

        if (annyang) {
            var commands = {
                'what is art': function () {
                    $('#start').slideUp();
                    $(".answer-1").typed({
                        strings: ["Good question.", "Art is the highest expression of human intellect."],
                        typeSpeed: 0
                    });
                }
            };

            annyang.addCommands(commands);
        }
    });
});