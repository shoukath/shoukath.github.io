const applyLogoFill = function () {
    const heroHeight = $('.hero').height();
    const documentPosition = $(document).scrollTop();
    const $logo = $('#logo-svg');
    if (documentPosition >= heroHeight) {
        $logo.css({fill: 'black'});
    } else {
        $logo.css({fill: ''});
    }
}
$(document).scroll(applyLogoFill);

$('.hero .down-arrow').click(() => {
    const heroHeight = $('.hero').height();
    $('html, body').animate({scrollTop: heroHeight}, 500);
})