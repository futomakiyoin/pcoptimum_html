// Most of the code of https://www.webslesson.info/2017/02/live-search-json-data-using-ajax-jquery.html
$(document).ready(function () {
  $.ajaxSetup({ cache: false });
  $("#search").keyup(function () {
    $("#offers").html("");
    var searchField = $("#search").val();
    var expression = new RegExp(searchField, "i");
    $.getJSON(
      "https://raw.githubusercontent.com/futomakiyoin/pcoptimum_html/main/json/offers.json",
      function (data) {
        $.each(data, function (key, value) {
          if (value.Offers.search(expression) != -1) {
            $("#offers").append(
              '<div class="mb-3"><div class="card" style="height:7rem;"><div class="card-body"><p class="card-title fw-bold text-orange">' +
                value.Get +
                ' points</p><p class="card-text"> For every ' +
                value.Buy +
                'spend on <span class="fw-bold">' +
                value.Offers +
                "</span></p></div></div></div>"
            );
          }
        });
      }
    );
  });

  $("#offers").on("click", "li", function () {
    var click_text = $(this).text().split("|");
    $("#search").val($.trim(click_text[0]));
    $("#offers").html("");
  });
});
