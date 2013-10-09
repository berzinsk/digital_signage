(function ($) {
  $.fn.Video = function () {
    var current_showing = 1;
      $('#video').hide();
      function switch_promo() {
        if (current_showing == 1) {
          $('.content h1, p').hide();
          $('video').get(0).play();
          $('#video').show();
          current_showing = 2;
        } else {
          $('.content h1, p').show();
          $('#video').hide()
          $('video').get(0).pause();
          current_showing = 1;
        }
      }
      setInterval(switch_promo, 10000);
  };
})(jQuery);