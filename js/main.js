/*$(".subtitle").hover(function(){
  $(this).css("background-color", "#4F9DA6");
  }, function(){
  $(this).css("background-color", "");
}); hover code*/

//Swicthing operations
//Shop section
$("#shop-link").click(function(e) {
  e.preventDefault();
  $.get("shop.html", function(data, status){
    $("#main-div").html(data);
  })
});

/*$(document).ready(function() {
  $("#shop-link").click(function(e) {
    e.preventDefault();
    $("#main-div").load("shop.html", function(responseTxt, statusTxt, jqXHR) {
      if (statusTxt == "success") {

      }
      if (statusTxt == "error") {
        alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
      }
    });
  });
});*/
//Contact section
/*$(document).ready(function() {
  $("#contact-link").click(function(e) {
    e.preventDefault();
    $("#main-div").load("contact.html", function(responseTxt, statusTxt, jqXHR) {
      if (statusTxt == "success") {

      }
      if (statusTxt == "error") {
        alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
      }
    });
  });
});*/

$("#contact-link").click(function(e) {
  e.preventDefault();
  $.get("contact.html", function(data, status){
    $("#main-div").html(data);
  })
});

/*$("#contact-link").click(function(e) {
  e.preventDefault();
  $.ajax({
    type: "GET",
    url: "contact.html",
    data: {},
    succes: function(data) {
      $("#main-div").html(data);
    }
  });
});*/


//Modal codes
//cart modal
var tableBody = $("#cart-table").children("tbody");
var totalPrice;
$("#cart").click(function() {
  tableBody.empty();
  totalPrice = 0;
  itemsOnCart.forEach((item, i) => {
    //console.log(isNaN(item.count));
    //console.log(isNaN(parseInt(item.price)));
    totalPrice += item.count * item.price;
    tableBody.append(
      '<tr class="table table-light">' +
      '<td class="cart-item"><img class="cart-item-img" src=' + item.image + ' alt=""> </td>' +
      '<td class="cart-item cart-item-name">' + item.name + '</td>' +
      '<td class="cart-item cart-item-count">' + item.count + '</td>' +
      '<td class="cart-item cart-item-price">' + (item.price * item.count) + '</td>' +
      '<td> <button type="button" class="btn delete-item"><i class="fas fa-times"></i></button></td>' +
      '</tr>'
    );
    $("#cart-table").children("caption").html("Toplam : " + totalPrice + " TL");
  });

  $("#cart-modal").modal("show");
});

//remove item from cart
//var itemList = $("#cart-table").children("tbody").children("tr");
//!!!!!!!!!!!!
$(".delete-item").click(function() {
  //var index = parseInt($(this).attr("rowIndex"));
  var index = 1;
  console.log(index + " aaaa");
  itemsOnCart.splice(index - 1, 1);
});

//remove all items from cart
$("#delete-all-items").click(function() {
  tableBody.empty();
  totalPrice = 0;
  $("#cart-table").children("caption").html("Toplam : " + totalPrice + " TL");
  itemsOnCart = [];
  $("#cart-count").html(itemsOnCart.length);
});

//end shopping
$("#end-shopping").click(function() {
  //direct to paying page
  $("#cart-modal").modal("hide");
});

//inspect modal
var itemImg, itemTitle, itemPrice, itemCaption, itemCount;
var card, modalContent, modalBody, btnGroup;
var itemsOnCart = [];

$(".inspect-btn").click(function() {
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
  itemPrice = parseFloat(card.children("div").children("div").children("h6").text());
  itemCaption = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar at magna sit amet pretium. Donec orci tellus,iaculis sit amet blandit vulputate, laoreet in arcu. Morbi lobortis nibh nulla vitae accumsan massa faucibus nec";
  //console.log(itemTitle+" "+itemPrice);

  modalContent.children(".modal-header").children("h5").text(itemTitle);
  //item img, price, caption
  modalBody.children("img").attr("src", itemImg);
  modalBody.children(".modal-price").text("Fiyat : " + itemPrice);
  modalBody.children(".description").html("Ürün Açıklaması : " + '<h6 class="inspect-text modal-caption">' + itemCaption + '</h6>');

  $("#inspect-modal").modal("show");
});

function print() {
  console.log(itemTitle + " price:" + itemPrice + " count:" + itemCount);
  console.log($("#cart-table").children("tbody").children("tr"));
  console.log($(".delete-item"));
  console.log($("#end-shopping"));
}
//card = $(".inspect-btn").parent().parent().parent();
//Modal Content
modalContent = $("#inspect-modal").children("div").children("div");
//Modal Body
modalBody = modalContent.children(".modal-body");
btnGroup = modalBody.children(".modal-count").children(".btn-group");
itemCount = btnGroup.children("input").val();

//resetting item count
var inspectClose = modalContent.children(".modal-header").children(".inspect-close");
$("#inspect-modal").on("hidden.bs.modal", function() {
  itemCount = 1;
});

//increase/decrease count operations
//decrease
btnGroup.children(".decrease").click(function() {
  itemCount = btnGroup.children("input").val();
  if (itemCount > 0) {
    itemCount--;
    btnGroup.children("input").val(itemCount);
    console.log(itemCount);
  } else {
    btnGroup.children("input").val(itemCount);
  }
});
//increase
btnGroup.children(".increase").click(function() {
  itemCount++;
  btnGroup.children("input").val(itemCount);
  console.log(itemCount);
});

//adding an item to cart
$("#add-to-cart").click(function() {
  var item = {
    name: itemTitle,
    count: itemCount,
    price: itemPrice,
    image: itemImg
  };
  if (item.count > 0) {
    itemsOnCart.push(item);
    $("#cart-count").html(itemsOnCart.length);
    $("#inspect-toast-success").fadeIn(400).delay(3000).fadeOut(400);
  } else {
    $("#inspect-toast-fail").fadeIn(400).delay(3000).fadeOut(400);
  }
  $("#inspect-modal").modal("hide");
});

//update the number of items you have in cart automatically
$(document).ready(function() {
  $("#cart-count").html(itemsOnCart.length);
});

//Category hover codes
//women
$(".category-img.women").hover(function() {
  $(".category-text.women").animate({
    opacity: "0",
    visibility: "hidden",
  }, 300);
}, function() {
  $(".category-text.women").animate({
    opacity: "1",
    visibility: "visible",
  }, 200);
});
//men
$(".category-img.men").hover(function() {
  $(".category-text.men").animate({
    opacity: "0",
    visibility: "hidden",
  }, 300);
}, function() {
  $(".category-text.men").animate({
    opacity: "1",
    visibility: "visible",
  }, 200);
});
//accessory
$(".category-img.accessory").hover(function() {
  $(".category-text.accessory").animate({
    opacity: "0",
    visibility: "hidden",
  }, 300);
}, function() {
  $(".category-text.accessory").animate({
    opacity: "1",
    visibility: "visible",
  }, 200);
});
//
