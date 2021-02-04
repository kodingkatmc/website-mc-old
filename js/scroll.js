$(window).on('hashchange load', function() {
    var $anchor = $(':target'),
    fixedElementHeight = 79;

    if ($anchor.length > 0) {

    $('html, body')
        .stop()
        .animate({
            scrollTop: $anchor.offset().top - fixedElementHeight
        }, 200);

    }
});
