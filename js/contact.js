/*var tableBody = $("#cart-table").children("tbody");
var totalPrice;
$("#cart").click(showCartItems);

//show cart items
function showCartItems() {
  tableBody.empty();
  totalPrice = 0;
  var items = JSON.parse(localStorage.getItem("itemsOnCart"));
  items.forEach((item, i) => {
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
}*/
