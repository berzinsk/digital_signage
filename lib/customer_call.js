(function ($) {
  $.fn.Number = function () {
    var id = $(this).attr("id");
    for (var i = 0; i <= 100; i++) {
      var number = i;
      console.log(i);
      $("#" + id).text(i);
    };
  };
})(jQuery);