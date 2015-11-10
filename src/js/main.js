$(function () {

    annyang.start();

    if (annyang) {
        var commands = {
            'hello': function () {     
                $("#hello").typed({
                    strings: ["Hi!", "I'm Pablo's creative project for Mrs. Guild's AP Lang class."],
                    typeSpeed: 0
                });
            },
            'answer the questions': function() {
//                $(".typed-cursor").fadeOut();
                $("#answer1, #answer2, #answer3, #answer4").scroll();
                $("#answer1").typed({
                    strings: ["1. Art is the highest expression of human intellect."],
                    typeSpeed: 0,
                    showCursor: false
                });
                $("#answer2").typed({
                    strings: ["2. What makes me creative is my ability to turn my ideas into cool stuff, through code."],
                    typeSpeed: 0,
                    showCursor: false
                });
                $("#answer3").typed({
                    strings: ["3. Art can teach us what we are capable of, it can show us our limits, and lack thereof."],
                    typeSpeed: 0,
                    showCursor: false
                });
                $("#answer4").typed({
                    strings: ["4. Art can change the world. It is through artistic means that we have technological developments and scientific advances in our society."],
                    typeSpeed: 0,
                    showCursor: false
                });
            },
            
            'what is art': function () {
                $("#answer1").typed({
                    strings: ["1. Art is the highest expression of human intellect."],
                    typeSpeed: 0,
                    showCursor: false
                });
            },
            'clear screen': function () {
                $(".answer").empty();
                $(".typed-cursor").fadeOut();
            }
        };

        annyang.addCommands(commands);
    }

});
