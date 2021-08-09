/*$(".subtitle").hover(function(){
  $(this).css("background-color", "#4F9DA6");
  }, function(){
  $(this).css("background-color", "");
}); hover code*/

//Modal codes
$(".col.men").click(function(){
  $("#cart-modal").modal("show");
});


//Category hover codes
//women
$(".category-img.women").hover(function(){
  $(".category-text.women").animate({
    opacity: "0",
    visibility: "hidden",
  }, 300);
}, function(){
  $(".category-text.women").animate({
      opacity: "1",
      visibility: "visible",
    }, 200);
});
//men
$(".category-img.men").hover(function(){
  $(".category-text.men").animate({
    opacity: "0",
    visibility: "hidden",
  }, 300);
}, function(){
  $(".category-text.men").animate({
      opacity: "1",
      visibility: "visible",
    }, 200);
});
//accessory
$(".category-img.accessory").hover(function(){
  $(".category-text.accessory").animate({
    opacity: "0",
    visibility: "hidden",
  }, 300);
}, function(){
  $(".category-text.accessory").animate({
      opacity: "1",
      visibility: "visible",
    }, 200);
});
//
