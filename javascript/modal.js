// Modal
var modal = document.getElementById("myModal");
var gamenbtn = document.getElementById("cart-nav");
var hidemoney = document.getElementsByClassName("cart-nav")[0];
// confirm block
var modal = document.getElementsByClassName("modal")[0];
var confirm = document.getElementsByClassName("confirm")[0];
// tại sao lại có [0] như  thế này bởi vì mỗi close là một html colection nên khi mình muốn lấy giá trị html thì phải thêm [0]. 
//Nếu mình có 2 cái component cùng class thì khi [0] nó sẽ hiển thị component 1 còn [1] thì nó sẽ hiển thị component 2.
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];

// tạo hàm update trong tab xác nhận
function updateconfirm () {
  // create array to store data
  let _price = [];
  let _quantity = [];
  let _card_title = [];
  var _sum = [];

  var cart_item = document.getElementsByClassName("cart-items")[0];
  var cart_rows = cart_item.getElementsByClassName("cart-row");

  for (var i = 0; i < cart_rows.length; i++) {
    var cart_row = cart_rows[i];
    var price_item = cart_row.getElementsByClassName("cart-price")[0];
    var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0];
    var price = parseFloat(price_item.innerText);// chuyển một chuổi string sang number để tính tổng tiền.
    var quantity = quantity_item.value; // lấy giá trị trong thẻ input
    var card_title = cart_row.getElementsByClassName("cart-item-title")[0];

    // price
    _price.push(price);
    // number
    _quantity.push(quantity);
    // title (name) 
    _card_title.push(card_title.innerText);

  }

  var confirmshow =``;
  var confirmname = `<div class = "confirm-col-name">`
  var codehtmlhourn = `<div class='confirm-col'>`
  var codehtmlitem = `<div class='confirm-item'>`
  var codehtmlfooder = `</div>`
  for (var i = 0; i < _card_title.length; i++) {
    var tatol = _price[i] * _quantity[i]
    confirmshow += codehtmlitem + confirmname + _card_title[i] + codehtmlfooder
    confirmshow += codehtmlhourn +  _quantity[i] + codehtmlfooder
    confirmshow += codehtmlhourn + '¥' + _price[i].toLocaleString("en") + codehtmlfooder
    confirmshow += codehtmlhourn + '¥' +tatol.toLocaleString("en") + codehtmlfooder + codehtmlfooder
    var sum = tatol
    _sum.push(sum)   

}
//lấy tổng của sum
function sumArray(_sum){
  let suma = 0;
  for (let i = 0; i < _sum.length; i++){
      suma += _sum[i];
  }
   
  return suma;
}
document.getElementsByClassName("confirm-show")[0].innerHTML = confirmshow;
var tatolconfirm = `<div class="goukei"><b>合計</div>
<div class="goukeinumber">¥${sumArray(_sum).toLocaleString("en")}</b></div>`;
document.getElementsByClassName("tatol-confirm")[0].innerHTML = tatolconfirm;
}


close_footer.onclick = function () {
  modal.style.display = "none";
  gamenbtn.style.display = "flex";

  updateconfirm()

  //ket thuc
  var getvalue = document.getElementsByClassName("cart-total-price")[0].innerHTML;
  //khi xóa hết vé trong giỏ hàng thì sẽ không hiện nữa
  if (getvalue == "¥"+"0") {
    hidemoney.style.display = "none";
  }else {
    hidemoney.style.display = "flex";
  }
 
}
order.onclick = function () {
  alert("ok ok ok") //test
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// xóa cart
var remove_cart = document.getElementsByClassName("btn-delete");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target;
    button_remove.parentElement.parentElement.remove();
  })
};
// update cart 
function updatecart() {
  var cart_item = document.getElementsByClassName("cart-items")[0];
  var cart_rows = cart_item.getElementsByClassName("cart-row");
  var cart_tatol = document.getElementsByClassName("cart-total")[0];
  var total = 0;
  for (var i = 0; i < cart_rows.length; i++) {
    var cart_row = cart_rows[i];
    
    var price_item = cart_row.getElementsByClassName("cart-price ")[0];
    var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0];
    var price = parseFloat(price_item.innerText);// chuyển một chuổi string sang number để tính tổng tiền.
    var quantity = quantity_item.value; // lấy giá trị trong thẻ input
    total = total + (price * quantity);
    
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = '¥' + total.toLocaleString("en"); // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
  // hiển thị giá khi thoát ra ngoài màn hình
  var htmlcart = `<button class="nedan" id="nedan" type="button"><div class="ti-shopping-cart"></div>¥${total.toLocaleString("en")}</button>
  <button class="next" id="next" type="button">レジに進む</button>`
  document.getElementsByClassName("cart-nav")[0].innerHTML = htmlcart;
  var modal = document.getElementById("myModal");
  var btnnext = document.getElementById("next");
  var cartindex = document.getElementById("nedan")
  btnnext.onclick = function () {
  confirm.style.display = "block";
}
  cartindex.onclick = function () {
    modal.style.display = "block"
  }
};
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
  var input = quantity_input[i];
  input.addEventListener("change", function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}

// Thêm vào giỏ
var add_cart = document.getElementsByClassName("btn-cart");
for (var i = 0; i < add_cart.length; i++) {
  var add = add_cart[i];
  add.addEventListener("click", function (event) {

    var button = event.target;
    var product = button.parentElement.parentElement;
    var title = product.getElementsByClassName("content-product-h3")[0].innerText;
    var pricea = product.getElementsByClassName("type")[0].innerText;
    var price = product.getElementsByClassName("price")[0].innerText;
    addItemToCart(title, pricea, price);
    // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
    modal.style.display = "block";
    
    updatecart();
  });
};
function addItemToCart(title, pricea, price) {
  var cartRow = document.createElement('div');
  cartRow.classList.add('cart-row');
  var cartItems = document.getElementsByClassName('cart-items')[0];
  var cart_title = cartItems.getElementsByClassName('cart-item-title');
//////////////////////////////////////////////////////////////////////////////////////////////////
  //Nếu title của sản phẩm bằng với title mà bạn thêm vao giỏ hàng thì sẽ thông cho user.
  for (var i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title + " " + pricea) {
      var temp_number_item = 0;
      var temp_number_item = document.getElementById("quantity".concat(price)).value;     
      temp_number_item = parseInt(temp_number_item);
       temp_number_item = temp_number_item + 1;
      var result = document.getElementById("quantity".concat(price)); 
       document.getElementById("quantity".concat(price)).value = new Number(temp_number_item);
      updatecart();
      return;
    }
  }
  price = +price; // đổi chuỗi thành số
  priceen = price.toLocaleString('en'); // đổi sang tiền tệ nhật

  var cartRowContents = `
  <div class="cart-item cart-column">
      <span class="cart-item-title">${title} ${pricea}</span><div class="mmoney">¥<span class="cart-price">${price}</span>
      <span class="cart-price-en">${priceen}</span>
      </div></div>
  
  
  <div class="cart-quantity cart-column" style="
  flex: 1;
">
        <input class="Subtraction" onclick="var result = document.getElementById('quantity${price}'); 
                        var qty = result.value; 
                          if( !isNaN(qty) && qty > 1 ) result.value-- ;
                          updatecart();
                          return false;" type='button' value='-' />

      <input id='quantity${price}' min='1' class="cart-quantity-input" type="number" value="1">

      <input class="sum" onclick="var result = document.getElementById('quantity${price}'); 
                      var qty = result.value;
                      if( !isNaN(qty)) result.value++;
                      updatecart();
                      return false;" 
                      type='button' value='+' />
      <button class="btn-delete" type="button">削除</button>
  </div>
  `
  
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);

  cartRow.getElementsByClassName('btn-delete')[0].addEventListener('click', function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove();
    updatecart();
  })
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart();
  }) 
};


order.onclick = function () {

updateconfirm()

  modal.style.display = "none";
  confirm.style.display = "block";
};
// quay lại và thanh toán
var comeback = document.getElementsByClassName("close-confirm")[0];
var payment = document.getElementsByClassName("payment")[0];
comeback.onclick = function () {
  confirm.style.display = "none";
  modal.style.display = "block";
}
payment.onclick = function () {
  alert("お金払ってください");
};
