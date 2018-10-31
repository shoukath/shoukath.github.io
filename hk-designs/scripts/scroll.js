const applyLogoFill = function () {
    const heroHeight = $('.hero').height();
    const documentPosition = $(document).scrollTop();
    const $logo = $('#logo-svg');
    if (documentPosition >= heroHeight) {
        $logo.css({fill: 'black'});
        $('.up-arrow').css({visibility: 'visible'});
    } else {
        $logo.css({fill: ''});
        $('.up-arrow').css({visibility: 'hidden'});
    }
}
$(document).scroll(applyLogoFill);

$('.hero .down-arrow').click(() => {
    const heroHeight = $('.hero').height();
    $('html, body').animate({scrollTop: heroHeight}, 500);
});

$('.up-arrow').click(() => {
    $('html, body').animate({scrollTop: 0}, 500);
});