$(document).ready(function(e){
    $('#clickMe').click(function(){
        annyang.start();
    });
});

if (annyang) {
    var commands = {
        'what is art': function(e) {
            $('#clickMe').toggle();

            e.stopPropagation();

            var text = $('.answer').data();

            typeWriter(text, 0);

        }
    };

    annyang.addCommands(commands);
}
