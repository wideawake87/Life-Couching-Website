$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
})

$(".js-input").keyup(function () {
    if ($(this).val()) {
        $(this).addClass("not-empty");
    } else {
        $(this).removeClass("not-empty");
    }
});
