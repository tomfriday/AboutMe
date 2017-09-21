$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};



$(function () {
    $('body').fadeIn(2200);
    $(window).scroll(function () {
        if ($('.aboutUs').isInViewport()) {
            $('.aboutUs').addClass('animated');
            $('.aboutUs').addClass('fadeIn');
            $('.aboutUs h2').addClass('animated');
            $('.aboutUs h2').addClass('fadeInDown');
        }
        if ($('.services').isInViewport()) {
            $('.services').addClass('animated');
            $('.services').addClass('fadeIn');
            $('.services h2').addClass('animated');
            $('.services h2').addClass('fadeInDown');
        }
        if ($('.WhatWeDo').isInViewport()) {
            $('.WhatWeDo').addClass('animated');
            $('.WhatWeDo').addClass('fadeIn');
            $('.WhatWeDo h2').addClass('animated');
            $('.WhatWeDo h2').addClass('fadeInDown');
        }
        if ($('.gallery').isInViewport()) {
            $('.gallery').addClass('animated');
            $('.gallery').addClass('fadeIn');

        }
        if ($('.contact').isInViewport()) {
            $('.contact').addClass('animated');
            $('.contact').addClass('fadeInDown');
            $('.contact h2').addClass('animated');
            $('.contact h2').addClass('fadeInDown');
        }
        var y = $(this).scrollTop();
        if (y > 100) {
            $('.toTop').addClass('animated');
            $('.toTop').addClass('bounceIn');
            $('.toTop').removeClass('fadeOut');
            $('.toTop').addClass('pointer');
        }
        if (y < 100) {
            $('.toTop').addClass('fadeOut');
            $('.toTop').removeClass('pointer');
        }
    });
    $('.toTop').click(function () {
        $('body').animate({
                scrollTop: 0
            },
            700, 'linear'
        );
    });

});
