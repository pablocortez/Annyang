/**
 * text {String} - printing text
 * n {Number} - from what letter to start
 */
(function typeWriter(text, n) {
    if (n < (text.length)) {
        $('.answer').html(text.substring(0, n+1));
        n++;
        setTimeout(function() {
            typeWriter(text, n)
        }, 50);
    }
})
