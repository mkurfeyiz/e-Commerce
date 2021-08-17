var items = $(".shop-row .col-md-4");
var shopItems = [];
var shopRow = $(".shop-row");

//console.log($("#items .col-md-4 .card .card-body *").text());

//hover animation
$("#items .card").hover(function(){
  //console.log($(this).siblings("img"));
  //shadowing
  $(this).css("box-shadow","4px 4px 2px #cfd8dc");
  //zoom-in
  $(this).children("img").css("transform","scale(1.02)");

}, function(){
  //unshadowing
  $(this).css("box-shadow","");

  //zoom-out
  $(this).children("img").css("transform","scale(1)");
});

//checkbox filters
/*$(document).ready(function(){
  var value = [];
  $(":checkbox").change(function(){
    if(this.checked){
      value.push($(this).val().toLowerCase());
      console.log(value);
      $("#items .col-md-4 ").filter(function() {
        for(var i=0; i<value.length; i++){
          $(this).toggle( $(this).text().toLowerCase().indexOf(value[i]) > -1);
        }
      });
    }
  });
});*/

$(":checkbox").click(function(){
  $(":checkbox:checked").each(function(){
    //$(".col-md-4").hide();
    var value = $(this).val().toLowerCase();
    //console.log(value);
    $("#items .col-md-4 ").filter(function() {
      $(this).toggle( $(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

//search filter
$(document).ready(function(){
  console.log("ready");
  $("#search-bar").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    //console.log(value + " deneme");
    $("#items .col-md-4 ").filter(function() {
      $(this).toggle( $(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

//alphabetic order
$(".alphabetic-order").click( alphabeticSort );

//price desc
$(".price-desc").click( priceDescSort );

//price asc
$(".price-asc").click( priceAscSort );

function priceAscSort(){

  var tempTag;
  for (var i = 0; i < items.length - 1; i++) {
    for (var j = 0; j < items.length - i - 1; j++) {
      if (getItemPrice(items[j].innerText) > getItemPrice(items[j + 1].innerText)) {
        tempTag = items[j];
        items[j] = items[j + 1];
        items[j + 1] = tempTag;
      }
    }
  }

  shopItems = items;

  shopRow.html(shopItems);
  shopRow.html(shopItems).fadeOut(500).fadeIn(500);
}

function priceDescSort() {

  var tempTag;
  for (var i = 0; i < items.length - 1; i++) {
    for (var j = 0; j < items.length - i - 1; j++) {
      if (getItemPrice(items[j].innerText) < getItemPrice(items[j + 1].innerText)) {
        tempTag = items[j];
        items[j] = items[j + 1];
        items[j + 1] = tempTag;
      }
    }
  }

  /*for (var i = 0; i < items.length; i++) {
    console.log(items[i].innerText);
  }*/

  shopItems = items;

  shopRow.html(shopItems);
  shopRow.html(shopItems).fadeOut(500).fadeIn(500);

}

function alphabeticSort() {
  /*if('a'>'b'){
    alert();
  } else {
    alert("kk")
  }*/
  //a < b

  //alphabetical bubble sort
  var tempTag;
  for (var i = 0; i < items.length - 1; i++) {
    for (var j = 0; j < items.length - i - 1; j++) {
      if (getItemName(items[j].innerText) > getItemName(items[j + 1].innerText)) {
        tempTag = items[j];
        items[j] = items[j + 1];
        items[j + 1] = tempTag;
      }
    }
  }

  shopItems = items;
  //deleting old order
  shopRow.html(shopItems).fadeOut(500).fadeIn(500);
}

function getItemName(str) {
  var index = str.indexOf("\n");
  return str.slice(0, index);
}

function getItemPrice(str) {
  var start = str.indexOf("\n");
  var end = str.indexOf("TL");
  return parseFloat(str.slice(start + 1, end));
}
