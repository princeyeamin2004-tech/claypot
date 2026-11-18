// Replace with your active WhatsApp Business number (include country code 880 without '+')
const WHATSAPP_NUMBER = '8801898497847';
const DELIVERY_FEE = 60;

// Product Catalog (Updated with 4 specific ddoi products & Shahi Doi Signature Special)
const products = [
  {
    id: 1,
    name: 'মিষ্টি দই',
    weight: '৬০০ গ্রাম সরা',
    price: 310,
    desc: 'ঐতিহ্যবাহী অগভীর মাটির সরায় তৈরি খাঁটি বগুড়ার মিষ্টি দই। ওপরের অংশে থাকে লোভনীয় ক্যারামেল মালাইয়ের আস্তর।',
    image: 'images/mishti_doi_600.jpg',
  },
  {
    id: 2,
    name: 'মিষ্টি দই - পট আকৃতি',
    weight: '৮০০ গ্রাম ফ্যামিলি পট',
    price: 410,
    desc: 'বড় পরিবার বা অতিথি আপ্যায়নের জন্য ৮০০ গ্রামের বিশেষ মাটির হাঁড়ি প্যাক। খাঁটি দুধের সর ও সুমিষ্ট স্বাদ।',
    image: 'images/mishti_doi_pot_800.jpg',
  },
  {
    id: 3,
    name: 'টক দই',
    weight: '৮০০ গ্রাম প্রাকৃতিক দই',
    price: 290,
    desc: 'বোরহানি, রায়তা বা স্বাস্থ্যসচেতনদের প্রতিদিনের ডায়েটের জন্য ১০০% খাঁটি ও সতেজ টক দই।',
    image: 'images/tok_doi_800.jpg',
  },
  {
    id: 4,
    name: 'শাহী দই',
    weight: '৬০০ গ্রাম প্রিমিয়াম পট (Signature Special)',
    price: 460,
    desc: 'আমাদের প্রিমিয়াম ও রাজকীয় সিগনেচার আইটেম। ঘন ক্ষীর, ক্যারামেল গ্লেজ এবং বাদামের টপিংয়ে ভরপুর অতুলনীয় স্বাদ।',
    image: 'images/shahi_doi_600.jpg',
  },
];

let cart = [];

// Render Menu
const productGrid = document.getElementById('productGrid');
products.forEach((product) => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'" />
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
  const cartItemsEl = document.getElementById('cartItems');
  const cartCountEl = document.getElementById('cartCount');
  const subtotalText = document.getElementById('subtotalText');
  const totalText = document.getElementById('totalText');

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
    .join('');
}

// Cart Drawer Toggles
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');

function openCart() {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
}

function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
}

document.getElementById('openCartBtn').addEventListener('click', openCart);
document.getElementById('closeCartBtn').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Side Menu Drawer Toggles (Hamburger Menu)
const sideMenuDrawer = document.getElementById('sideMenuDrawer');
const sideMenuOverlay = document.getElementById('sideMenuOverlay');

function openSideMenu() {
  sideMenuDrawer.classList.add('open');
  sideMenuOverlay.classList.add('open');
}

function closeSideMenu() {
  sideMenuDrawer.classList.remove('open');
  sideMenuOverlay.classList.remove('open');
}

document.getElementById('openMenuBtn').addEventListener('click', openSideMenu);
document
  .getElementById('closeMenuBtn')
  .addEventListener('click', closeSideMenu);
sideMenuOverlay.addEventListener('click', closeSideMenu);

// WhatsApp Checkout Submission
document
  .getElementById('checkoutForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Please add at least one item to your basket first.');
      return;
    }

    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const total = subtotal + DELIVERY_FEE;

    const itemLines = cart
      .map(
        (item) =>
          `• ${item.name} (${item.weight}) x${item.qty} = ৳${
            item.price * item.qty
          }`
      )
      .join('\n');

    const message =
      `*New Order — The Clay Pot* 🏺\n\n` +
      `*Customer:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Address:* ${address}\n\n` +
      `*Order Items:*\n${itemLines}\n\n` +
      `Subtotal: ৳${subtotal}\n` +
      `Delivery: ৳${DELIVERY_FEE}\n` +
      `*Total Payable: ৳${total}*`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, '_blank');
  });