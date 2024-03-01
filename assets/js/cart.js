var cartCount = document.getElementById("cart-count");

var buyButtons = document.getElementsByClassName("buy-button");

for (var i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener("click", function () {
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
  });
}
