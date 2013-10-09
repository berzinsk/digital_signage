(function ($) {
  $.fn.Feed = function () {
    var feedUrl = "http://www.gsmarena.com/rss-news-reviews.php3";
    var count = 10;
    var id = $(this).attr("id");
    $.ajax({
      url: "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + count + "&output=json&q=" + encodeURIComponent(feedUrl) + "&hl=en&callback=?",
      dataType: "json",
      success: function (data) {
        $("#" + id).empty();
        var result = "";
        $.each(data.responseData.feed.entries, function (e, entry) {
          result += '<li>' + $(entry.content).text() + '</li>';
        });
        $("#" + id).append('<ul>' + result + '</ul>');
      }
    });
  };
})(jQuery);