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
        var aboutUs = $('.aboutUs');
        var services = $('.services');
        var WhatWeDo = $('.WhatWeDo');
        var gallery = $('.gallery');
        var contact = $('.contact');
        if (aboutUs.isInViewport()) {
            aboutUs.addClass('animated')
                .addClass('fadeIn');
            $('.aboutUs h2').addClass('fadeInDown');
        }
        if ($('.services').isInViewport()) {
            services.addClass('animated')
                .addClass('fadeIn')
            $('.services h2').addClass('fadeInDown');
        }
        if ($('.WhatWeDo').isInViewport()) {
            WhatWeDo.addClass('animated')
                .addClass('fadeIn');
            $('.WhatWeDo h2').addClass('animated')
                .addClass('fadeInDown');
        }
        if ($('.gallery').isInViewport()) {
            gallery.addClass('animated')
                .addClass('fadeIn');

        }
        if ($('.contact').isInViewport()) {
            contact.addClass('animated')
                .addClass('fadeInDown');
            $('.contact h2').addClass('animated')
                .addClass('fadeInDown');
        }
        var y = $(this).scrollTop();
        var buttonToTop = $('.toTop');
        if (y > 100) {
            buttonToTop.addClass('animated')
                .addClass('bounceIn')
                .removeClass('fadeOut')
                .addClass('pointer');
        }
        if (y < 100) {
            buttonToTop.addClass('fadeOut')
                .removeClass('pointer');
        }
    });
    $(document).ready(function () {
        $('.toTop').click(function () {
            $(window).scrollTop(0);
        });

    });


});
