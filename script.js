// WhatsApp & Delivery Configuration
const WHATSAPP_NUMBER = '8801898497847';
const DELIVERY_FEE = 60;

// Translations Dictionary (English & Bengali)
const translations = {
  en: {
    cartText: "Cart",
    menuTitle: "Navigation Menu",
    navHome: "🏠 Home",
    navMenu: "🍯 Our Menu & Collection",
    navStory: "📖 Our Story & Craft",
    navPayment: "💳 Payment & bKash Info",
    navDelivery: "🚚 Delivery Areas & Charges",
    navContact: "📞 Contact & WhatsApp",
    badge: "Authentic Bogra Heritage",
    heroTitle: "Rooted in Tradition,<br />Crafted in Clay.",
    heroDesc: "Slow-baked creamy Mishti Doi set in unglazed terracotta pots for that unmistakable earthy aroma and caramelized malai crust—delivered fresh across Dhaka.",
    orderNowBtn: "Order Now",
    exploreBtn: "Explore Our Craft",
    collTitle: "Our Signature Collection",
    collDesc: "Prepared fresh in small batches using pure cow milk and traditional clay vessels.",
    soilTitle: "Rooted in Bogra's Soil",
    soilDesc: "Discover why our traditional preparation makes all the difference.",
    feat1Title: "Unglazed Terracotta",
    feat1Desc: "Breathable clay pots naturally absorb excess moisture, creating a thick, velvety texture and rich aroma.",
    feat2Title: "100% Pure Milk",
    feat2Desc: "Slow-simmered to perfection without artificial thickeners or preservatives—just pure, traditional taste.",
    feat3Title: "Fresh Batch Delivery",
    feat3Desc: "Carefully packed and delivered chilled to your doorstep in Mohammadpur, Dhanmondi, and surrounding areas.",
    payTitle: "💳 Easy Payment Methods",
    payDesc: "You can pay securely via <strong>bKash, Nagad, Rocket</strong> or choose <strong>Cash on Delivery (COD)</strong> when your fresh batch arrives at your doorstep in Dhaka.",
    delTitle: "🚚 Delivery & Coverage",
    delDesc: "We deliver across <strong>Mohammadpur, Dhanmondi, Lalmatia</strong> and nearby Dhaka zones. Standard delivery charge is flat ৳60.",
    footerSub: "Rooted in Tradition, Crafted in Clay.",
    footerNote: "Dhaka Delivery Hotline / WhatsApp Support Available.",
    waChat: "WhatsApp Chat",
    fbPage: "Facebook Page",
    basketTitle: "Your Order Basket",
    emptyCartMsg: "Your basket is empty.",
    subtotalText: "Subtotal",
    deliveryText: "Dhaka Delivery",
    totalText: "Total Payable",
    deliveryDetailsTitle: "Delivery Details",
    namePh: "Full Name",
    phonePh: "Phone Number (e.g., 017XXXXXXXX)",
    addressPh: "Full Address in Dhaka (House, Road, Area)",
    confirmOrderBtn: "Confirm Order Now",
    addToCartBtn: "+ Add to Basket"
  },
  bn: {
    cartText: "কার্ট",
    menuTitle: "নেভিগেশন মেনু",
    navHome: "🏠 হোম",
    navMenu: "🍯 আমাদের মেনু ও কালেকশন",
    navStory: "📖 আমাদের গল্প ও ঐতিহ্য",
    navPayment: "💳 পেমেন্ট ও বিকাশ তথ্য",
    navDelivery: "🚚 ডেলিভারি এলাকা ও চার্জ",
    navContact: "📞 যোগাযোগ ও হোয়াটসঅ্যাপ",
    badge: "খাঁটি বগুড়ার ঐতিহ্য",
    heroTitle: "ঐতিহ্যের শিকড়ে,<br />মাটির তৈরি দই।",
    heroDesc: "অগভীর মাটির পাত্রে ধীরে ধীরে বেক করা সুস্বাদু ও মালাইদার মিষ্টি দই—যা ঢাকা শহরের যেকোনো প্রান্তে পৌঁছে দেওয়া হয় টাটকা।",
    orderNowBtn: "এখনই অর্ডার করুন",
    exploreBtn: "আমাদের ঐতিহ্য জানুন",
    collTitle: "আমাদের সিগনেচার কালেকশন",
    collDesc: "বিশুদ্ধ গরুর দুধ ও ঐতিহ্যবাহী মাটির পাত্রে ছোট ব্যাচে প্রতিদিন তৈরি।",
    soilTitle: "বগুড়ার মাটির ছোঁয়া",
    soilDesc: "জেনে নিন কেন আমাদের ঐতিহ্যবাহী প্রণালী সবার চেয়ে আলাদা।",
    feat1Title: "অগভীর পোড়ামাটির পাত্র",
    feat1Desc: "প্রাকৃতিক মাটির পাত্র অতিরিক্ত আর্দ্রতা শোষণ করে দইকে করে তোলে ঘন, তুলতুলে ও সুবাসিত।",
    feat2Title: "১০০% খাঁটি দুধ",
    feat2Desc: "কোনো কৃত্রিম উপাদান বা প্রিজার্ভেটিভ ছাড়া নিখাদ ও ঐতিহ্যবাহী স্বাদের সমাহার।",
    feat3Title: "তাজা ও দ্রুত হোম ডেলিভারি",
    feat3Desc: "মোহাম্মদপুর, ধানমন্ডি এবং আশেপাশের এলাকায় একদম ঠাণ্ডা ও সতেজ অবস্থায় হোম ডেলিভারি।",
    payTitle: "💳 সহজ পেমেন্ট পদ্ধতি",
    payDesc: "বিকাশ, নগদ, রকেটের মাধ্যমে পেমেন্ট করতে পারেন অথবা ঢাকায় ক্যাশ অন ডেলিভারি (COD) বেছে নিতে পারেন।",
    delTitle: "🚚 ডেলিভারি ও কভারেজ",
    delDesc: "মোহাম্মদপুর, ধানমন্ডি, লালমাটিয়া এবং এর আশপাশে ডেলিভারি করা হয়। ডেলিভারি চার্জ মাত্র ৳৬০ ফ্ল্যাট।",
    footerSub: "ঐতিহ্যের শেড়ে, মাটির ছোঁয়া।",
    footerNote: "ঢাকা ডেলিভারি হটলাইন / হোয়াটসঅ্যাপ সাপোর্ট চালু আছে।",
    waChat: "হোয়াটসঅ্যাপ চ্যাট",
    fbPage: "ফেসবুক পেজ",
    basketTitle: "আপনার অর্ডার কার্ট",
    emptyCartMsg: "আপনার কার্টটি বর্তমানে খালি।",
    subtotalText: "সাবটোটাল",
    deliveryText: "ঢাকা ডেলিভারি",
    totalText: "সর্বমোট প্রদেয়",
    deliveryDetailsTitle: "ডেলিভারির বিবরণ",
    namePh: "সম্পূর্ণ নাম",
    phonePh: "মোবাইল নম্বর (যেমন: 017XXXXXXXX)",
    addressPh: "পূর্ণ ঠিকানা (বাসা, রোড, এলাকা)",
    confirmOrderBtn: "এখনই অর্ডার কনফার্ম করুন",
    addToCartBtn: "+ কার্টে যোগ করুন"
  }
};

let currentLang = 'en';

// Product Catalog with ImgBB Direct Image Links
const products = [
  {
    id: 1,
    nameEn: 'Mishti Doi (Sora)',
    nameBn: 'মিষ্টি দই',
    weightEn: '600g Clay Sora',
    weightBn: '৬০০ গ্রাম সরা',
    price: 310,
    descEn: 'Traditional Bogra mishti doi set in an unglazed clay sora with a delicious caramelized malai crust.',
    descBn: 'ঐতিহ্যবাহী অগভীর মাটির সরায় তৈরি খাঁটি বগুড়ার মিষ্টি দই। ওপরের অংশে থাকে লোভনীয় ক্যারামেল মালাইয়ের আস্তর।',
    image: 'https://i.ibb.co.com/bM8KtfKL/mishti-doi-600-jpg.jpg',
  },
  {
    id: 2,
    nameEn: 'Mishti Doi (Family Pot)',
    nameBn: 'মিষ্টি দই - পট আকৃতি',
    weightEn: '800g Family Pot',
    weightBn: '৮০০ গ্রাম ফ্যামিলি পট',
    price: 410,
    descEn: 'Large 800g clay pot pack ideal for family gatherings and guests. Rich milk cream and sweetness.',
    descBn: 'বড় পরিবার বা অতিথি আপ্যায়নের জন্য ৮০০ গ্রামের বিশেষ মাটির হাঁড়ি প্যাক। খাঁটি দুধের সর ও সুমিষ্ট স্বাদ।',
    image: 'https://i.ibb.co.com/jk3n8kPp/mishti-doi-pot-800-jpg.jpg',
  },
  {
    id: 3,
    nameEn: 'Tok Doi (Natural)',
    nameBn: 'টক দই',
    weightEn: '800g Natural Pot',
    weightBn: '৮০০ গ্রাম প্রাকৃতিক দই',
    price: 290,
    descEn: '100% pure and fresh sour yogurt set in earthenware, perfect for borhani, raita, or daily diet.',
    descBn: 'বোরহানি, রায়তা বা স্বাস্থ্যসচেতনদের প্রতিদিনের ডায়েটের জন্য ১০০% খাঁটি ও সতেজ টক দই।',
    image: 'https://i.ibb.co.com/M0zMLTq/tok-doi-800-jpg.jpg',
  },
  {
    id: 4,
    nameEn: 'Shahi Doi (Signature Special)',
    nameBn: 'শাহী দই',
    weightEn: '600g Premium Pot',
    weightBn: '৬০০ গ্রাম প্রিমিয়াম পট (Signature Special)',
    price: 460,
    descEn: 'Our premium signature item loaded with thick kheer, caramel glaze, and rich nut toppings.',
    descBn: 'আমাদের প্রিমিয়াম ও রাজকীয় সিগনেচার আইটেম। ঘন ক্ষীর, ক্যারামেল গ্লেজ এবং বাদামের টপিংয়ে ভরপুর অতুলনীয় স্বাদ।',
    image: 'https://i.ibb.co.com/V0YKxG87/shahi-doi-600-jpg.jpg',
  },
];

let cart = [];

// Render Menu Products
function renderProducts() {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;
  productGrid.innerHTML = '';

  products.forEach((product) => {
    const name = currentLang === 'bn' ? product.nameBn : product.nameEn;
    const weight = currentLang === 'bn' ? product.weightBn : product.weightEn;
    const desc = currentLang === 'bn' ? product.descBn : product.descEn;
    const btnText = translations[currentLang].addToCartBtn;

    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${name}" onerror="this.src='https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'" />
      <div class="product-info">
        <div>
          <div class="product-weight">${weight}</div>
          <h3>${name}</h3>
          <p class="product-desc">${desc}</p>
        </div>
        <div class="product-bottom">
          <span class="price">৳${product.price}</span>
          <button class="add-btn" onclick="addToCart(${product.id})">${btnText}</button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

// Language Switcher Function
function changeLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.getElementById('enLangBtn').classList.toggle('active', lang === 'en');
  document.getElementById('bnLangBtn').classList.toggle('active', lang === 'bn');

  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.getAttribute('data-translate-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });

  renderProducts();
  updateCartUI();
}

// Dark Mode Toggle Logic
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('change', function () {
    if (this.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
}

// Load Saved Theme on Startup
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (darkModeToggle) darkModeToggle.checked = true;
  }
  renderProducts();
});

// Settings Dropdown Toggle
const settingsToggleBtn = document.getElementById('settingsToggleBtn');
const settingsDropdown = document.getElementById('settingsDropdown');

if (settingsToggleBtn && settingsDropdown) {
  settingsToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    settingsDropdown.classList.toggle('open');
  });

  window.addEventListener('click', () => {
    if (settingsDropdown.classList.contains('open')) {
      settingsDropdown.classList.remove('open');
    }
  });

  settingsDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

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
  const t = translations[currentLang];

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cartCountEl) cartCountEl.textContent = totalCount;
  if (subtotalText) subtotalText.textContent = `৳${subtotal}`;
  if (totalText) totalText.textContent = `৳${subtotal > 0 ? subtotal + DELIVERY_FEE : 60}`;

  if (!cartItemsEl) return;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p class="empty-msg">${t.emptyCartMsg}</p>`;
    return;
  }

  cartItemsEl.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item">
        <div>
          <strong>${currentLang === 'bn' ? item.nameBn : item.nameEn}</strong><br />
          <small>${currentLang === 'bn' ? item.weightBn : item.weightEn} — ৳${item.price * item.qty}</small>
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
  if (cartDrawer) cartDrawer.classList.add('open');
  if (cartOverlay) cartOverlay.classList.add('open');
}

function closeCart() {
  if (cartDrawer) cartDrawer.classList.remove('open');
  if (cartOverlay) cartOverlay.classList.remove('open');
}

const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');

if (openCartBtn) openCartBtn.addEventListener('click', openCart);
if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

// Side Menu Drawer Toggles (Hamburger Menu)
const sideMenuDrawer = document.getElementById('sideMenuDrawer');
const sideMenuOverlay = document.getElementById('sideMenuOverlay');

function openSideMenu() {
  if (sideMenuDrawer) sideMenuDrawer.classList.add('open');
  if (sideMenuOverlay) sideMenuOverlay.classList.add('open');
}

function closeSideMenu() {
  if (sideMenuDrawer) sideMenuDrawer.classList.remove('open');
  if (sideMenuOverlay) sideMenuOverlay.classList.remove('open');
}

const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');

if (openMenuBtn) openMenuBtn.addEventListener('click', openSideMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeSideMenu);
if (sideMenuOverlay) sideMenuOverlay.addEventListener('click', closeSideMenu);

// Checkout & Order ID Modal Confirmation with LocalStorage Saving
const checkoutForm = document.getElementById('checkoutForm');
if (checkoutForm) {
  checkoutForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (cart.length === 0) {
      alert(currentLang === 'bn' ? 'দয়া করে কার্টে অন্তত একটি পণ্য যোগ করুন।' : 'Please add at least one item to your basket first.');
      return;
    }

    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const total = subtotal + DELIVERY_FEE;

    // Generate Unique Order ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const orderId = `#TCP-${randomNum}`;

    // Create Order Object for Admin Dashboard
    const newOrder = {
      orderId,
      name,
      phone,
      address,
      items: cart.map(item => ({
        name: currentLang === 'bn' ? item.nameBn : item.nameEn,
        qty: item.qty
      })),
      total,
      date: new Date().toLocaleString()
    };

    // Save to LocalStorage for Admin Dashboard
    let existingOrders = JSON.parse(localStorage.getItem('clayPotOrders')) || [];
    existingOrders.unshift(newOrder);
    localStorage.setItem('clayPotOrders', JSON.stringify(existingOrders));

    // Fill Modal Information
    document.getElementById('modalOrderId').textContent = orderId;
    document.getElementById('modalCustName').textContent = name;
    document.getElementById('modalCustPhone').textContent = phone;
    document.getElementById('modalCustAddress').textContent = address;
    document.getElementById('modalTotalAmount').textContent = `৳${total}`;

    // Close Cart & Open Success Modal
    closeCart();
    document.getElementById('successModal').style.display = 'block';
    document.getElementById('successModalOverlay').style.display = 'block';

    // Clear Cart and Form
    cart = [];
    updateCartUI();
    checkoutForm.reset();
  });
}

// Success Modal Close Functions
function closeSuccessModal() {
  document.getElementById('successModal').style.display = 'none';
  document.getElementById('successModalOverlay').style.display = 'none';
}

const successModalOverlay = document.getElementById('successModalOverlay');
if (successModalOverlay) {
  successModalOverlay.addEventListener('click', closeSuccessModal);
}