var slider = document.getElementById("price-slider");

var products = document.querySelectorAll(
  ".product1, .product2, .product3, .product4, .product5, .product6, .product7, .product8, .product9, .product10, .product11, .product12, .product13, .product14, .product15, .product16, .product17, .product18, .product19, .product20, .product21, .product22, .product23, .product24"
);

var prices = Array.from(products).map(function (product) {
  return parseInt(product.querySelector("p").textContent.replace("€", ""));
});

slider.min = Math.min(...prices);
slider.max = Math.max(...prices);

slider.value = slider.max;

slider.addEventListener("input", function () {
  var maxPrice = parseInt(slider.value);
  products.forEach(function (product) {
    var price = parseInt(
      product.querySelector("p").textContent.replace("€", "")
    );
    if (price > maxPrice) {
      product.style.display = "none";
    } else {
      product.style.display = "block";
    }
  });
  document.getElementById("slider-value").textContent = "€" + slider.value;
});

slider.dispatchEvent(new Event("input"));
