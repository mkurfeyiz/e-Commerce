var items = $(".shop-row .col-md-4");
var shopItems = [];
var shopRow = $(".shop-row");

//console.log($(".category:not(:checked)"));

//hover animation
$("#items .card").hover(function() {
  //console.log($(this).siblings("img"));
  //shadowing
  $(this).css("box-shadow", "4px 4px 2px #cfd8dc");
  //zoom-in
  $(this).children("img").css("transform", "scale(1.02)");

}, function() {
  //unshadowing
  $(this).css("box-shadow", "");

  //zoom-out
  $(this).children("img").css("transform", "scale(1)");
});

//checkbox filters
//filter variables
//category
var filterCategory = [];
var categoryValue;
//price
var filterPrice = [];
var priceValue, minPrice = 0,
  maxPrice = Infinity;
//gender
var filterGender = [];
var genderValue;
//brand
var filterBrand = [];
var brandValue;
//
$(".category").click(function() {
  $(".category:checked").each(function() {
    categoryValue = $(this).val().toLowerCase().trim();
    if (jQuery.inArray(categoryValue, filterCategory) < 0) {
      filterCategory.push(categoryValue);
    }
  });

  $(".category:not(:checked)").each(function() {
    categoryValue = $(this).val().toLowerCase();
    while (jQuery.inArray(categoryValue, filterCategory) > -1) {
      filterCategory.splice(filterCategory.indexOf(categoryValue), 1);
    }
  });

  $("#items .col-md-4 .card-title").filter(function() {
    var title = $(this).text().toLowerCase().trim();
    var result = jQuery.inArray(title, filterCategory);

    if (filterCategory.length > 0) {
      $(this).parent().parent().parent().toggle(result > -1);
    } else {
      //all categories unchecked
      $(this).parent().parent().parent().toggle(result == -1);
    }

  });
});
//price filter
//price class : .card-subtitle or h6 tag
//price checkboxes class name : .price
$(".price").click(function() {
  $(".price:checked").each(function() {
    priceValue = parseFloat($(this).val());
    console.log("price value: " + priceValue);
    if (jQuery.inArray(priceValue, filterPrice) < 0) {
      filterPrice.push(priceValue);
    }
  });

  $(".price:not(:checked)").each(function() {
    priceValue = parseFloat($(this).val());
    while (jQuery.inArray(priceValue, filterPrice) > -1) {
      filterPrice.splice(filterPrice.indexOf(priceValue), 1);
    }
  });

  $("#items .col-md-4 .price-title").filter(function() {
    var price = parseFloat($(this).text().trim());
    minPrice = Math.min(...filterPrice) - 50;
    maxPrice = Math.max(...filterPrice);
    console.log(maxPrice + "item price value: " + minPrice);

    if (filterPrice.length == 0) {
      minPrice = 0;
      maxPrice = Infinity;
    }
    $(this).parent().parent().parent().toggle(price >= minPrice && price < maxPrice);

  });
});

/*$(".price").change(function() {
  $(".price:not(:checked)").each(function() {
    priceValue = parseFloat($(this).val());
    while (jQuery.inArray(priceValue, filterPrice) > -1) {
      filterPrice.splice(filterPrice.indexOf(priceValue), 1);
    }
  });

  $("#items .col-md-4 .price-title").filter(function() {

    var price = parseFloat($(this).text().trim());
    minPrice = Math.min(...filterPrice) - 50;
    maxPrice = Math.max(...filterPrice);

    console.log(filterPrice);

    if (filterPrice.length == 0) {
      minPrice = 0;
      maxPrice = Infinity;
    }
    $(this).parent().parent().parent().toggle(price >= minPrice && price < maxPrice);

  });
});*/

//custom price filter
$("#min-price, #max-price").change(function() {
  $("#items .col-md-4 .price-title").filter(function() {
    console.log($(this).text());
    var price = parseFloat($(this).text().trim());
    minPrice = parseFloat($("#min-price").val());
    maxPrice = parseFloat($("#max-price").val());

    if (minPrice > maxPrice) {
      maxPrice = minPrice + 1;
      $("#max-price").val(maxPrice);
    }

    $(this).parent().parent().parent().toggle(price >= minPrice && price < maxPrice);

  });
});

//gender filter
$(".gender-check").click(function() {
  $(".gender-check:checked").each(function() {
    genderValue = $(this).val().toLowerCase().trim();
    if (jQuery.inArray(genderValue, filterGender) < 0) {
      filterGender.push(genderValue);
    }
  });

  $(".gender-check:not(:checked)").each(function() {
    genderValue = $(this).val().toLowerCase().trim();
    while (jQuery.inArray(genderValue, filterGender) > -1) {
      filterGender.splice(filterGender.indexOf(genderValue), 1);
    }
  });

  $("#items .col-md-4 .gender-title").filter(function() {
    var gender = $(this).text().toLowerCase().trim();
    var result = jQuery.inArray(gender, filterGender);

    console.log(gender);
    console.log("result : " + result + " array: " + filterGender);

    if (filterGender.length > 0) {
      $(this).parent().parent().parent().toggle(result > -1);
    } else {
      //all genders unchecked
      $(this).parent().parent().parent().toggle(result == -1);
    }
  });
});

//brand filter
$(".brand").click(function() {
  $(".brand:checked").each(function() {
    brandValue = $(this).val().toLowerCase().trim();
    if (jQuery.inArray(brandValue, filterBrand) < 0) {
      filterBrand.push(brandValue);
    }
  });

  $(".brand:not(:checked)").each(function() {
    brandValue = $(this).val().toLowerCase().trim();
    while (jQuery.inArray(brandValue, filterBrand) > -1) {
      filterBrand.splice(filterBrand.indexOf(brandValue), 1);
    }
  });

  $("#items .col-md-4 .brand-title").filter(function() {
    var brand = $(this).text().toLowerCase().trim();
    var result = jQuery.inArray(brand, filterBrand);

    console.log(brand);
    console.log("result : " + result + " array: " + filterBrand);

    if (filterBrand.length > 0) {
      $(this).parent().parent().parent().toggle(result > -1);
    } else {
      //all brands unchecked
      $(this).parent().parent().parent().toggle(result == -1);
    }
  });
});

//search filter
$(document).ready(function() {
  console.log("ready");
  $("#search-bar").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    //console.log(value + " deneme");
    $("#items .col-md-4 ").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

//alphabetic order
$(".alphabetic-order").click(alphabeticSort);

//price desc
$(".price-desc").click(priceDescSort);

//price asc
$(".price-asc").click(priceAscSort);

function priceAscSort() {

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
