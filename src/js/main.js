$(function () {

    annyang.start();

    if (annyang) {
        var commands = {
            'say hello': function () {
                $("#hello").typed({
                    strings: ["Hello!", "I am a project created by Pablo for Mrs. Guild's AP Lang class."],
                    typeSpeed: 0
                });
            },
            'answer the questions' : function() {
                $(".typed-cursor").fadeOut();
                $(".answer-1").typed({
                    strings: ["Good question.", "1. Art is the highest expression of human intellect."],
                    typeSpeed: 0
                });
                $(".answer-2").typed({
                    strings: ["2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugiat minima accusantium laudantium animi, quis commodi illum, dolore pariatur suscipit odio obcaecati blanditiis repellendus cupiditate error quidem est delectus, laborum!"],
                    typeSpeed: 0
                });
                $(".answer-3").typed({
                    strings: ["3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugiat minima accusantium laudantium animi, quis commodi illum, dolore pariatur suscipit odio obcaecati blanditiis repellendus cupiditate error quidem est delectus, laborum!"],
                    typeSpeed: 0
                });
                $(".answer-4").typed({
                    strings: ["4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugiat minima accusantium laudantium animi, quis commodi illum, dolore pariatur suscipit odio obcaecati blanditiis repellendus cupiditate error quidem est delectus, laborum!"],
                    typeSpeed: 0
                });
            },
            
            'what is art': function () {
                //$(".hello").empty();
                $(".typed-cursor").fadeOut();
                $(".answer-1").typed({
                    strings: ["Good question.", "1. Art is the highest expression of human intellect."],
                    typeSpeed: 0
                });
            },
            'clear screen': function () {
                $(".answers").empty();
                $(".typed-cursor").fadeOut();
            }
        };

        annyang.addCommands(commands);
    }

});