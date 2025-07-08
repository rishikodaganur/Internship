const products = [
  {
    name: "Wireless Earbuds",
    price: 1999,
    image: "images/earbuds.png"
  },
  {
    name: "Smart Watch",
    price: 3499,
    image: "images/smartwatch.png"
  },
  {
    name: "Bluetooth Speaker",
    price: 2499,
    image: "images/Bluetooth Speaker.png"
  },
  {
    name: "Phone Tripod",
    price: 899,
    image: "images/Tripod.png"
  }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productName) {
  cart.push(productName);
  updateCartCount();
  alert(`${productName} added to cart!`);
}

function clearCart() {
  cart = [];
  updateCartCount();
  alert("Cart cleared!");
}

function displayProducts() {
  const container = document.getElementById("product-grid");
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button class="add-btn" onclick="addToCart('${product.name}')">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
  updateCartCount();
});
