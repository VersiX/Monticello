$(document).ready(function () {
    $('.header-slider').slick({
        arrows: false,
        dots: true,
        dotsClass: 'header-slider-dots',
        vertical: true,
        verticalSwiping: true
    });

    $(".news-slider").slick({
        dots: true,
        dotsClass: 'news-slider-dots',
        slidesToShow: 3,
        prevArrow: $(".news-slider-arr--left"),
        nextArrow: $(".news-slider-arr--right"),
        autoplay: true,
        autoplaySpeed: 4000
    })
});


$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });

$(".maximize").click(function (event) {
    $("#maximized__img").attr("src", $(this).attr("data-img-source"));
    $("#maximized").css("display", "flex");

});

$("#cover , #maximized-close").click(function (event) {
    $("#maximized").css("display", "none");
})