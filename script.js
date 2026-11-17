// Replace with your active WhatsApp Business number (include country code 880 without '+')
const WHATSAPP_NUMBER = "8801898497847";
const DELIVERY_FEE = 60;

// Product Catalog
const products = [
  {
    id: 1,
    name: "Bogra Traditional Mishti Doi",
    weight: "1 kg Clay Pot",
    price: 450,
    desc: "Rich, slow-baked caramelized mishti doi in a deep unglazed terracotta pot.",
    image: "images/pot-1kg.jpg"
  },
  {
    id: 2,
    name: "Signature Sora Mishti Doi",
    weight: "500g Flat Clay Sora",
    price: 260,
    desc: "Extra thick malai layer set in a wide traditional clay sora for maximum creaminess.",
    image: "images/sora-500g.jpg"
  },
  {
    id: 3,
    name: "Classic Bogra Tok Doi",
    weight: "500g Clay Pot",
    price: 200,
    desc: "Refreshing, probiotic-rich sour yogurt set in natural earthenware.",
    image: "images/tok-500g.jpg"
  }
];

let cart = [];

// Render Menu
const productGrid = document.getElementById("productGrid");
products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="product-info">
      <div>
        <div class="product-weight">${product.weight}</div>
        <h3>${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
      </div>
      <div class="product-bottom">
        <span class="price">৳${product.price}</span>
        <button class="add-btn" onclick="addToCart(${product.id})">+ Add to Basket</button>
      </div>
    </div>
  `;
  productGrid.appendChild(card);
});

// Cart Functions
function addToCart(productId) {
  const item = products.find((p) => p.id === productId);
  const existing = cart.find((c) => c.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCartUI();
  openCart();
}

function changeQty(productId, delta) {
  const index = cart.findIndex((c) => c.id === productId);
  if (index > -1) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
  }
  updateCartUI();
}

function updateCartUI() {
  const cartItemsEl = document.getElementById("cartItems");
  const cartCountEl = document.getElementById("cartCount");
  const subtotalText = document.getElementById("subtotalText");
  const totalText = document.getElementById("totalText");

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  cartCountEl.textContent = totalCount;
  subtotalText.textContent = `৳${subtotal}`;
  totalText.textContent = `৳${subtotal > 0 ? subtotal + DELIVERY_FEE : 0}`;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p class="empty-msg">Your basket is empty.</p>`;
    return;
  }

  cartItemsEl.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item">
        <div>
          <strong>${item.name}</strong><br />
          <small>${item.weight} — ৳${item.price * item.qty}</small>
        </div>
        <div class="qty-controls">
          <button onclick="changeQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
    `
    )
    .join("");
}

// Cart Drawer Toggles
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");

function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");
}

document.getElementById("openCartBtn").addEventListener("click", openCart);
document.getElementById("closeCartBtn").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// Side Menu Drawer Toggles (Hamburger Menu)
const sideMenuDrawer = document.getElementById("sideMenuDrawer");
const sideMenuOverlay = document.getElementById("sideMenuOverlay");

function openSideMenu() {
  sideMenuDrawer.classList.add("open");
  sideMenuOverlay.classList.add("open");
}

function closeSideMenu() {
  sideMenuDrawer.classList.remove("open");
  sideMenuOverlay.classList.remove("open");
}

document.getElementById("openMenuBtn").addEventListener("click", openSideMenu);
document.getElementById("closeMenuBtn").addEventListener("click", closeSideMenu);
sideMenuOverlay.addEventListener("click", closeSideMenu);

// WhatsApp Checkout Submission
document.getElementById("checkoutForm").addEventListener("submit", function (e) {
  e.preventDefault();
  if (cart.length === 0) {
    alert("Please add at least one item to your basket first.");
    return;
  }

  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const address = document.getElementById("custAddress").value.trim();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal + DELIVERY_FEE;

  const itemLines = cart
    .map((item) => `• ${item.name} (${item.weight}) x${item.qty} = ৳${item.price * item.qty}`)
    .join("\n");

  const message =
    `*New Order — The Clay Pot* 🏺\n\n` +
    `*Customer:* ${name}\n` +
    `*Phone:* ${phone}\n` +
    `*Address:* ${address}\n\n` +
    `*Order Items:*\n${itemLines}\n\n` +
    `Subtotal: ৳${subtotal}\n` +
    `Delivery: ৳${DELIVERY_FEE}\n` +
    `*Total Payable: ৳${total}*`;

  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
});