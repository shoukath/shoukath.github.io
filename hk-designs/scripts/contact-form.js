//Refer this article for setup
// https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175
var $form = $('form.contact-form'),
url = 'https://script.google.com/macros/s/AKfycbxJPGLh67OhZvRcET47CHHwkG7-F6yQusM-fXyCRrP1HYY9m2s/exec'
$form.find('button[type="submit"]').on('click', function(e) {
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serialize()
    });
    $form.replaceWith('Thanks! Your information has been submitted');
});