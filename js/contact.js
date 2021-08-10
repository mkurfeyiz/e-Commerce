$("#shop-link").click(function(e) {
  e.preventDefault();
  $.get("shop.html", function(data, status){
    $("#contact-div").html(data);
  })
});
