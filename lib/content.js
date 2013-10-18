(function ($) {
  var number = "4";
  var desk_numbers = [1,3,5];
  var ticket_numbers = [1,2,3];
  $.fn.Content = function () {
    hide_all_video();
    next_customer();

    function next_customer () {
      set_numbers(0);
        if (desk_numbers.length < 4) {
          set_numbers(0);
        } else {
          set_numbers(1);
        };
        
        $('.content h1, p').hide();
        $("#one").show();
        play_video($('video').get(0));
        setTimeout(function () {
          pause_video($('video').get(0));
          $("#one").hide();
          $("#two").show();
          play_video($('video').get(1));
          setTimeout(function () {
            pause_video($('video').get(1));
            if ($('video').get(1).paused) {
              $('.content h1, p').show();
              $("#current_number").text(display_number(number));
              ticket_numbers.push(number);
              if (ticket_numbers.length > 4) {
                ticket_numbers.shift();
              };
              var desk_number = Math.floor((Math.random()*5)+1);

              desk_numbers.push(desk_number);
              if (desk_numbers.length > 4) {
                desk_numbers.shift();
              };

              $('#desk_number').text(desk_number);
              var previous_number = number;
              number++;
              if (number > 200) {
                number = 1;
              };
              if (ticket_numbers.length > 3) {
                set_numbers(0);
              };
              $("#two").hide();
            };
          }, 20000);
        }, 15000);
      setTimeout(next_customer, 40000);
    }

    function resize_video () {
      // body...
    }

    function set_numbers (times) {
      $("#row1 li:first-child").text(display_number(ticket_numbers[2 + times]));
      $("#row1 strong").text(desk_numbers[2 + times]);

      $("#row2 li:first-child").text(display_number(ticket_numbers[1 + times]));
      $("#row2 strong").text(desk_numbers[1 + times]);

      $("#row3 li:first-child").text(display_number(ticket_numbers[0 + times]));
      $("#row3 strong").text(desk_numbers[0 + times]);
    }

    function pause_video (file) {
      file.pause();
    }

    function play_video (file) {
      file.play();
    }

    function display_number (number) {
      if (number < 10) {
        return "00" + number;
      } else if (number >= 10 && number < 100) {
        return "0" + number;
      } else {
        return number;
      };
    }

    function hide_all_video () {
      for (var i = 0; i < $('video').length; i++) {
        $('video').get(i).pause();
        $("#one").hide();
        $("#two").hide();
      };
    }
  };

  $.fn.highlight = function() {
   $(this).each(function() {
        var el = $(this);
        el.before("<div/>")
        el.prev()
            .width(el.width())
            .height(el.height())
            .css({
                "position": "absolute",
                "background-color": "#ffff99",
                "opacity": ".9"   
            })
            .fadeOut(500);
    });
}
})(jQuery);