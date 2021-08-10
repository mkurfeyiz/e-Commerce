/*$(".subtitle").hover(function(){
  $(this).css("background-color", "#4F9DA6");
  }, function(){
  $(this).css("background-color", "");
}); hover code*/

//Modal codes

//cart modal
$("#cart").click(function(){

  
  $("#cart-modal").modal("show");
});

//inspect modal
var itemImg, itemTitle, itemPrice, itemCaption, itemCount;
var card, modalContent, modalBody, btnGroup;

$(".inspect-btn").click(function(){
  //featured-col div
  card = $(this).parent().parent().parent();
  //Modal Content
  modalContent = $("#inspect-modal").children("div").children("div");
  //Modal Body
  modalBody = modalContent.children(".modal-body");
  //btn group
  btnGroup = modalBody.children(".modal-count").children(".btn-group");
  btnGroup.children("input").val(1);
  //console.log(card);
  itemImg = card.children("img").attr("src");
  itemTitle = card.children("div").children("div").children("h5").text();
  itemPrice = card.children("div").children("div").children("h6").text();
  itemCaption = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar at magna sit amet pretium. Donec orci tellus,iaculis sit amet blandit vulputate, laoreet in arcu. Morbi lobortis nibh nulla vitae accumsan massa faucibus nec";
  //console.log(itemTitle+" "+itemPrice);

  modalContent.children(".modal-header").children("h5").text(itemTitle);
  //item img, price, caption
  modalBody.children("img").attr("src", itemImg);
  modalBody.children(".modal-price").text("Fiyat : " + itemPrice);
  modalBody.children(".description").html("Ürün Açıklaması : " + '<h6 class="inspect-text modal-caption">' + itemCaption + '</h6>');

  $("#inspect-modal").modal("show");
});

//card = $(".inspect-btn").parent().parent().parent();
//Modal Content
modalContent = $("#inspect-modal").children("div").children("div");
//Modal Body
modalBody = modalContent.children(".modal-body");
btnGroup = modalBody.children(".modal-count").children(".btn-group");
itemCount = btnGroup.children("input").val();

//resetting item count
var inspectClose = modalContent.children(".modal-header").children(".inspect-close");
$("#inspect-modal").on("hidden.bs.modal", function(){
  itemCount = 1;
});

//increase/decrease count operations
//decrease
btnGroup.children(".decrease").click(function(){
  itemCount = btnGroup.children("input").val();
  if(itemCount > 0){
    itemCount--;
    btnGroup.children("input").val(itemCount);
    console.log(itemCount);
  } else {
    btnGroup.children("input").val(itemCount);
  }
});
//increase
btnGroup.children(".increase").click(function(){
  itemCount++;
  btnGroup.children("input").val(itemCount);
  console.log(itemCount);
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
