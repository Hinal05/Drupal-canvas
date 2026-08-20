/**
 * @file
 * Initializes the Slick carousel for Testimonial components.
 */
(function ($, Drupal, once) {
  Drupal.behaviors.canvasThemeTestimonial = {
    attach: function (context) {
      once('canvas-testimonial-slider', '.testimonial-slider', context).forEach(function (el) {
        var $slider = $(el);
        var slidesToShow = parseInt($slider.data('slidesToShow'), 10) || 1;
        var autoplay = $slider.data('autoplay') === true || $slider.data('autoplay') === 'true';

        $slider.slick({
          slidesToShow: slidesToShow,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          autoplay: autoplay,
          autoplaySpeed: 5000,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: Math.min(slidesToShow, 2),
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      });
    },
  };
})(jQuery, Drupal, once);
