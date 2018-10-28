$(document).scroll(function () {
    const heroHeight = $('.hero').height();
    const documentPosition = $(document).scrollTop();
    const $logo = $('#logo-svg');
    if (documentPosition > heroHeight) {
        $logo.css({fill: 'black'});
    } else {
        $logo.css({fill: ''});
    }
})

$('.hero .down-arrow').click(function() {
    const heroHeight = $('.hero').height();
    $('html, body').animate({scrollTop: heroHeight}, 500);
})