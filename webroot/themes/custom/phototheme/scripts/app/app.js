(function($) {

	'use strict';

	// Back to top button

    Drupal.behaviors.backToTop = {
        attach:function(context) {
            var btn = $('#block-backtotop a');

            $(window).scroll(function() {
                if ($(window).scrollTop() > 100) {
                    btn.addClass('show');
                } else {
                    btn.removeClass('show');
                }
            });

            btn.on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({scrollTop:0}, '100');
            });
        }
    };

    // Album page slider

    Drupal.behaviors.aboutPageBackground = {
        attach:function() {

        }
    };

    // Mobile menu

    Drupal.behaviors.mobileMenue = {
        attach: function (context) {

            $('.menu--mobile-main-menu > .menu-toggle', context).on('click', function () {
                // console.log('test');
                $('.menu--mobile-main-menu > ul').toggleClass('show');
            });


        }
    };







})(jQuery);