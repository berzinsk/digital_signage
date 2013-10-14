(function ($) {
  var number = "1";
  $.fn.Video = function () {
    var current_showing = 1;
    var id = $(this).attr("id");
    // $('video').get(0).pause();
    // $('#video').hide();
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

    hide_all_video();
    loop_function();

    function hide_all_video () {
      for (var i = 0; i < $('video').length; i++) {
        $('video').get(i).pause();
        $("#one").hide(); 
        $("#two").hide();
      };
    }

    function loop_function () {
      setTimeout(function () {
      $('.content h1, p').hide();
      $("#one").show();
      play_video($('video').get(0));

        setTimeout(function () {
          pause_video($('video').get(0));
          $("#one").hide();
          $("#two").show();
          play_video($('video').get(1));
          // simulate();
          setTimeout(function () {
            pause_video($('video').get(1));
            if ($('video').get(1).paused) {
              $('.content h1, p').show();
              if (number < 10) {
                $("#current_number").text("00" + number);
              } else if(number >= 10 && number < 100) {
                $("#current_number").text("0" + number);
              } else {
                $("#current_number").text(number);
              };
              number++;
              if (number > 200) {
                number = 1;
              };
              $("#row1 li:first-child").text("032");
              $("#two").hide();
            };
          }, 1500);
        }, 2000);
      }, 1000);
      setTimeout(loop_function, 5000);
    }

    function simulate () {
      $('video').get(1).pause();
      $(".sidebar").hover(function () {
        if ($('video').get(1).paused) {
          console.log('Video paused!');
        } else {
          console.log('Video not paused!');
        };
      }, function () {
        console.log('Removed');
      });
    }

    /*$('video').get(0).pause();
    if ($('video').get(0).paused) {
      $("#one").hide(); 
      $("#two").hide();
      // $("video:eq(0)").hide();
    };*/

    function play_video(file) {
      file.play();
    }

    function pause_video (file) {
      file.pause();
    }
  };
})(jQuery);