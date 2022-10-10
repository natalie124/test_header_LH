$(document).ready(function() {

    // слайдеры

    $('.js-header-goods-slider').each(function() {
        var swiper = new Swiper($(this).find('.js-slider-container')[0], {
            loop: true,
            autoplay: {
                delay: 5000,
            },
            slidesPerView: 2,
            spaceBetween: 0,
            watchOverflow: false,
            observer: true,
            observeParents: true,
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1023: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1101: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
            },
        });
    });

    function responseMenu() {
        $('.js-header-cat-dropdown li').appendTo('.js-header-cat');
        $('.js-header-cat-toggler').parent().appendTo('.js-header-cat');
        var items = $('.js-header-cat li:not(.js-header-cat-dd)');
        var maxWidth = $('.js-header-cat').width() - $('.js-header-cat-toggler').outerWidth();
        var width = 0;
        var hideFrom = 0;

        items.css({ 'width': 'auto' });

        items.each(function(index) {
            if (width + $(this).outerWidth() > maxWidth) {
                return false;
            } else {
                hideFrom = index;
                width += $(this).outerWidth();
            }
        });
        if (hideFrom < items.length - 1) {
            items.eq(hideFrom).nextAll('.js-header-cat li:not(.js-header-cat-dd)').appendTo('.js-header-cat-dropdown');
            $('.js-header-cat-toggler').show();
        } else {
            $('.js-header-cat-toggler').hide();
        }
    }

    $(document).ready(function() {
        $('.js-header-cat').on('click', '.js-header-cat-toggler', function() {
            $('.js-header-cat-dropdown').slideToggle('fast');
            $('.js-header-cat-toggler').toggleClass('active');
        });

        $(document).on('keydown', function (e) {
            if (e.keyCode === 27) {
                $('.js-header-cat-dropdown').slideUp('fast');
                $('.js-header-cat-toggler').removeClass('active');
            }
        });

        $(document).on('click', function (e) {
            if (!$('.js-header-cat-dropdown').is(e.target) && 
                $('.js-header-cat-dropdown').has(e.target).length === 0 && 
                !$('.js-header-cat-toggler').is(e.target) && 
                $('.js-header-cat-toggler').has(e.target).length === 0) {
                
                $('.js-header-cat-dropdown').slideUp('fast');
                $('.js-header-cat-toggler').removeClass('active');
            }
        })

        $(window).on('resize', function() {
            responseMenu();
        }).trigger('resize');
    });
});