// WhatsApp, Delivery & Storage Configuration
const WHATSAPP_NUMBER = '8801898497847';
const DEFAULT_DELIVERY_FEE = 0; // 0 = Free Delivery at launch; change to 60 for ৳60
const DELIVERY_FEE_STORAGE_KEY = 'clayPotDeliveryFee';
const FIREBASE_DELIVERY_FEE_PATH = 'clayPotSettings/deliveryFee';
const CUSTOMER_ORDERS_KEY = 'clayPotCustomerOrders';
const FIREBASE_ORDERS_PATH = 'clayPotOrders';

// Firebase Configuration (`the-clay-pot` Realtime Database)
const firebaseConfig = {
  apiKey: 'AIzaSyDucXr5F3nd5rmSUGz-EwsxpB2e9517k_Q',
  authDomain: 'the-clay-pot.firebaseapp.com',
  databaseURL: 'https://the-clay-pot-default-rtdb.firebaseio.com',
  projectId: 'the-clay-pot',
  storageBucket: 'the-clay-pot.firebasestorage.app',
  messagingSenderId: '218391329107',
  appId: '1:218391329107:web:633e54ae86e84e129389a6',
  measurementId: 'G-D9Z287BQR5',
};

let rtdb = null;
try {
  if (typeof firebase !== 'undefined') {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    rtdb = firebase.database();
  }
} catch (err) {
  console.error('Firebase initialization warning:', err);
}

let currentDeliveryFee = (() => {
  const saved = localStorage.getItem(DELIVERY_FEE_STORAGE_KEY);
  if (saved !== null && saved !== '' && !Number.isNaN(Number(saved))) {
    return Math.max(0, Number(saved));
  }
  return DEFAULT_DELIVERY_FEE;
})();

// Translations Dictionary (English & Bengali)
const translations = {
  en: {
    deskMenu: 'Menu',
    deskDelivery: 'Delivery',
    deskOrders: 'My Orders',
    cartText: 'Cart',
    menuTitle: 'Navigation Menu',
    navHome: '🏠 Home',
    catShopOrders: '🛍️ Shop & Orders',
    navMenu: '🍯 Our Menu & Collection',
    navMyOrders: '📦 My Orders',
    catOrderDelivery: '🚚 Order & Delivery Info',
    navPayment: '💳 Payment Info',
    navDelivery: '📍 Delivery Areas & Charges',
    navHistory: '📜 History',
    catSupport: '🎧 Support',
    navContact: '📞 Contact & WhatsApp',
    navFacebook: '📘 Facebook',
    navInstagram: '📸 Instagram',
    settingsText: 'Settings',
    catAboutBrand: '🏷️ About The Brand',
    navStory: '📖 Our Story & Craft',
    badge: 'Authentic Bogura Heritage',
    heroTitle: 'Rooted in Tradition,<br />Crafted in Clay.',
    heroDesc:
      'Slow-baked creamy Mishti Doi set in unglazed terracotta pots for that unmistakable earthy aroma and caramelized malai crust—delivered fresh across Dhaka.',
    orderNowBtn: 'Order Now',
    exploreBtn: 'Explore Our Craft',
    collTitle: 'Our Signature Collection',
    collDesc:
      'Prepared fresh in small batches using pure cow milk and traditional clay vessels.',
    soilTitle: "Rooted in Bogura's Soil",
    soilDesc:
      'Discover why our traditional preparation makes all the difference.',
    feat1Title: 'Unglazed Terracotta',
    feat1Desc:
      'Breathable clay pots naturally absorb excess moisture, creating a thick, velvety texture and rich aroma.',
    feat2Title: '100% Pure Milk',
    feat2Desc:
      'Slow-simmered to perfection without artificial thickeners or preservatives—just pure, traditional taste.',
    feat3Title: 'Fresh Batch Delivery',
    feat3Desc:
      'Carefully packed and delivered chilled to your doorstep in Mohammadpur, Dhanmondi, and surrounding areas.',
    payTitle: '💳 Easy Payment Methods',
    payDesc:
      'You can pay securely via <strong>bKash, Nagad, Rocket</strong> or choose <strong>Cash on Delivery (COD)</strong> when your fresh batch arrives at your doorstep in Dhaka.',
    payClickHint: '▼ Click to view numbers & payment options',
    payHideHint: '▲ Click to hide numbers & payment options',
    bkashLabel: '📱 bKash (Personal)',
    nagadLabel: '📲 Nagad (Personal)',
    rocketLabel: '🚀 Rocket (Personal)',
    sendMoneyTag: 'Send Money',
    numberLabel: 'Number:',
    copyBtn: 'Copy',
    codLabel: '💵 Cash on Delivery (COD)',
    availableTag: 'Available',
    codDesc:
      'Pay in cash to the delivery rider upon receiving your order in Dhaka.',
    delTitle: '🚚 Delivery & Coverage',
    delDesc:
      'We deliver across <strong>Mohammadpur, Dhanmondi, Lalmatia</strong> and nearby Dhaka zones. Delivery charge is controlled dynamically from admin.',
    footerSub: 'Rooted in Tradition, Crafted in Clay.',
    footerNote: 'Dhaka Delivery Hotline / WhatsApp Support Available.',
    waChat: 'WhatsApp Chat',
    fbPage: 'Facebook Page',
    basketTitle: 'Your Order Basket',
    emptyCartMsg: 'Your basket is empty.',
    subtotalText: 'Subtotal',
    deliveryText: 'Dhaka Delivery',
    totalText: 'Total Payable',
    deliveryDetailsTitle: 'Delivery Details',
    firstNameLabel: 'First Name *',
    lastNameLabel: 'Last Name *',
    phoneLabel: 'Phone Number *',
    addressFieldLabel: 'Delivery Address in Dhaka *',
    firstNamePh: 'e.g., Yeamin',
    lastNamePh: 'e.g., Hossain',
    phonePh: '017XXXXXXXX',
    addressPh: 'House, Road, Block, Area (e.g., Bosila, Mohammadpur)',
    confirmOrderBtn: 'Confirm Order Now',
    addToCartBtn: '+ Add to Basket',
    myOrdersTitle: '📦 My Orders',
    historyTitle: '📜 Delivery & Order History',
    noActiveOrders:
      'No active order right now. Completed or cancelled orders appear in History.',
    noHistoryOrders: 'No delivered or cancelled order history found yet.',
    latestConfirmMsg:
      'Live Order Tracker: Status syncs automatically with your order updates.',
    clearHistoryBtn: 'Clear History',
    orderIdLabel: 'Order ID',
    dateLabel: 'Time',
    itemsLabel: 'Items',
    totalLabel: 'Total',
    addressLabel: 'Address',
    statusPending: 'Pending',
    statusConfirmed: 'Confirmed',
    statusProcessing: 'Processing',
    statusDelivered: 'Delivered',
    statusCancelled: 'Cancelled',
  },
  bn: {
    deskMenu: 'মেনু',
    deskDelivery: 'ডেলিভারি',
    deskOrders: 'মাই অর্ডারস',
    cartText: 'কার্ট',
    menuTitle: 'নেভিগেশন মেনু',
    navHome: '🏠 হোম',
    catShopOrders: '🛍️ শপ ও অর্ডারস',
    navMenu: '🍯 আওয়ার মেনু ও কালেকশন',
    navMyOrders: '📦 মাই অর্ডারস',
    catOrderDelivery: '🚚 অর্ডার ও ডেলিভারি তথ্য',
    navPayment: '💳 পেমেন্ট তথ্য',
    navDelivery: '📍 ডেলিভারি এরিয়া ও চার্জ',
    navHistory: '📜 হিস্ট্রি',
    catSupport: '🎧 সাপোর্ট',
    navContact: '📞 কন্টাক্ট ও হোয়াটসঅ্যাপ',
    navFacebook: '📘 ফেসবুক',
    navInstagram: '📸 ইনস্টাগ্রাম',
    settingsText: 'সেটিংস',
    catAboutBrand: '🏷️ ব্র্যান্ড পরিচিতি',
    navStory: '📖 আওয়ার স্টোরি ও ক্রাফট',
    badge: 'খাঁটি বগুড়ার ঐতিহ্য',
    heroTitle: 'ঐতিহ্যের শিকড়ে,<br />মাটির তৈরি দই।',
    heroDesc:
      'অগভীর মাটির পাত্রে ধীরে ধীরে বেক করা সুস্বাদু ও মালাইদার মিষ্টি দই—যা ঢাকা শহরের যেকোনো প্রান্তে পৌঁছে দেওয়া হয় টাটকা।',
    orderNowBtn: 'এখনই অর্ডার করুন',
    exploreBtn: 'আমাদের ঐতিহ্য জানুন',
    collTitle: 'আমাদের সিগনেচার কালেকশন',
    collDesc:
      'বিশুদ্ধ গরুর দুধ ও ঐতিহ্যবাহী মাটির পাত্রে ছোট ব্যাচে প্রতিদিন তৈরি।',
    soilTitle: 'বগুড়ার মাটির ছোঁয়া',
    soilDesc: 'জেনে নিন কেন আমাদের ঐতিহ্যবাহী প্রণালী সবার চেয়ে আলাদা।',
    feat1Title: 'অগভীর পোড়ামাটির পাত্র',
    feat1Desc:
      'প্রাকৃতিক মাটির পাত্র অতিরিক্ত আর্দ্রতা শোষণ করে দইকে করে তোলে ঘন, তুলতুলে ও সুবাসিত।',
    feat2Title: '১০০% খাঁটি দুধ',
    feat2Desc:
      'কোনো কৃত্রিম উপাদান বা প্রিজার্ভেটিভ ছাড়া নিখাদ ও ঐতিহ্যবাহী স্বাদের সমাহার।',
    feat3Title: 'তাজা ও দ্রুত হোম ডেলিভারি',
    feat3Desc:
      'মোহাম্মদপুর, ধানমন্ডি এবং আশেপাশের এলাকায় একদম ঠাণ্ডা ও সতেজ অবস্থায় হোম ডেলিভারি।',
    payTitle: '💳 সহজ পেমেন্ট পদ্ধতি',
    payDesc:
      'বিকাশ, নগদ, রকেটের মাধ্যমে পেমেন্ট করতে পারেন অথবা ঢাকায় ক্যাশ অন ডেলিভারি (COD) বেছে নিতে পারেন।',
    payClickHint: '▼ নম্বর ও পেমেন্ট অপশন দেখতে ক্লিক করুন',
    payHideHint: '▲ নম্বর ও পেমেন্ট অপশন লুকাতে ক্লিক করুন',
    bkashLabel: '📱 বিকাশ (পার্সোনাল)',
    nagadLabel: '📲 নগদ (পার্সোনাল)',
    rocketLabel: '🚀 রকেট (পার্সোনাল)',
    sendMoneyTag: 'সেন্ড মানি',
    numberLabel: 'নম্বর:',
    copyBtn: 'কপি',
    codLabel: '💵 ক্যাশ অন ডেলিভারি (COD)',
    availableTag: 'চালু আছে',
    codDesc: 'ঢাকায় অর্ডার হাতে পাওয়ার পর ডেলিভারি রাইডারকে ক্যাশ টাকা দিন।',
    delTitle: '🚚 ডেলিভারি ও কভারেজ',
    delDesc:
      'মোহাম্মদপুর, ধানমন্ডি, লালমাটিয়া এবং এর আশপাশে ডেলিভারি করা হয়। ডেলিভারি চার্জ অ্যাডমিন প্যানেল থেকে নিয়ন্ত্রণ করা যায়।',
    footerSub: 'ঐতিহ্যের শিকড়ে, মাটির ছোঁয়া।',
    footerNote: 'ঢাকা ডেলিভারি হটলাইন / হোয়াটসঅ্যাপ সাপোর্ট চালু আছে।',
    waChat: 'হোয়াটসঅ্যাপ চ্যাট',
    fbPage: 'ফেসবুক পেজ',
    basketTitle: 'আপনার অর্ডার কার্ট',
    emptyCartMsg: 'আপনার কার্টটি বর্তমানে খালি।',
    subtotalText: 'সাবটোটাল',
    deliveryText: 'ঢাকা ডেলিভারি',
    totalText: 'সর্বমোট প্রদেয়',
    deliveryDetailsTitle: 'ডেলিভারির বিবরণ',
    firstNameLabel: 'নামের প্রথম অংশ (First Name) *',
    lastNameLabel: 'নামের শেষ অংশ (Last Name) *',
    phoneLabel: 'মোবাইল নম্বর *',
    addressFieldLabel: 'ঢাকার পূর্ণ ঠিকানা *',
    firstNamePh: 'যেমন: ইয়ামিন',
    lastNamePh: 'যেমন: হোসাইন',
    phonePh: '017XXXXXXXX',
    addressPh: 'বাসা, রোড, ব্লক, এলাকা (যেমন: বসিলা, মোহাম্মদপুর)',
    confirmOrderBtn: 'এখনই অর্ডার কনফার্ম করুন',
    addToCartBtn: '+ কার্টে যোগ করুন',
    myOrdersTitle: '📦 মাই অর্ডারস',
    historyTitle: '📜 ডেলিভারি ও অর্ডার হিস্ট্রি',
    noActiveOrders:
      'বর্তমানে কোনো চলমান অর্ডার নেই। ডেলিভার্ড বা ক্যান্সেলড অর্ডার হিস্ট্রিতে দেখা যাবে।',
    noHistoryOrders: 'এখনো কোনো ডেলিভার্ড বা ক্যান্সেলড অর্ডার হিস্ট্রি নেই।',
    latestConfirmMsg:
      'লাইভ অর্ডার ট্র্যাকার: অ্যাডমিন স্ট্যাটাস অনুযায়ী এটি স্বয়ংক্রিয়ভাবে আপডেট হয়।',
    clearHistoryBtn: 'হিস্ট্রি মুছুন',
    orderIdLabel: 'অর্ডার আইডি',
    dateLabel: 'সময়',
    itemsLabel: 'পণ্যসমূহ',
    totalLabel: 'মোট বিল',
    addressLabel: 'ঠিকানা',
    statusPending: 'পেন্ডিং',
    statusConfirmed: 'কনফার্মড',
    statusProcessing: 'প্রসেসিং',
    statusDelivered: 'ডেলিভার্ড',
    statusCancelled: 'ক্যান্সেলড',
  },
};

let currentLang = localStorage.getItem('lang') === 'bn' ? 'bn' : 'en';

// Product Catalog
const products = [
  {
    id: 1,
    nameEn: 'Mishti Doi (Sora)',
    nameBn: 'মিষ্টি দই',
    weightEn: '600g Clay Sora',
    weightBn: '৬০০ গ্রাম সরা',
    price: 310,
    descEn:
      'Traditional Bogura mishti doi set in an unglazed clay sora with a delicious caramelized malai crust.',
    descBn:
      'ঐতিহ্যবাহী অগভীর মাটির সরায় তৈরি খাঁটি বগুড়ার মিষ্টি দই। ওপরের অংশে থাকে লোভনীয় ক্যারামেল মালাইয়ের আস্তর।',
    image: 'https://i.ibb.co.com/bM8KtfKL/mishti-doi-600-jpg.jpg',
  },
  {
    id: 2,
    nameEn: 'Mishti Doi (Family Pot)',
    nameBn: 'মিষ্টি দই - পট আকৃতি',
    weightEn: '800g Family Pot',
    weightBn: '৮০০ গ্রাম ফ্যামিলি পট',
    price: 410,
    descEn:
      'Large 800g clay pot pack ideal for family gatherings and guests. Rich milk cream and sweetness.',
    descBn:
      'বড় পরিবার বা অতিথি আপ্যায়নের জন্য ৮০০ গ্রামের বিশেষ মাটির হাঁড়ি প্যাক। খাঁটি দুধের সর ও সুমিষ্ট স্বাদ।',
    image: 'https://i.ibb.co.com/jk3n8kPp/mishti-doi-pot-800-jpg.jpg',
  },
  {
    id: 3,
    nameEn: 'Tok Doi (Natural)',
    nameBn: 'টক দই',
    weightEn: '800g Natural Pot',
    weightBn: '৮০০ গ্রাম প্রাকৃতিক দই',
    price: 290,
    descEn:
      '100% pure and fresh sour yogurt set in earthenware, perfect for borhani, raita, or daily diet.',
    descBn:
      'বোরহানি, রায়তা বা স্বাস্থ্যসচেতনদের প্রতিদিনের ডায়েটের জন্য ১০০% খাঁটি ও সতেজ টক দই।',
    image: 'https://i.ibb.co.com/M0zMLTq/tok-doi-800-jpg.jpg',
  },
  {
    id: 4,
    nameEn: 'Shahi Doi (Signature Special)',
    nameBn: 'শাহী দই',
    weightEn: '600g Premium Pot',
    weightBn: '৬০০ গ্রাম প্রিমিয়াম পট (Signature Special)',
    price: 460,
    descEn:
      'Our premium signature item loaded with thick kheer, caramel glaze, and rich nut toppings.',
    descBn:
      'আমাদের প্রিমিয়াম ও রাজকীয় সিগনেচার আইটেম। ঘন ক্ষীর, ক্যারামেল গ্লেজ এবং বাদামের টপিংয়ে ভরপুর অতুলনীয় স্বাদ।',
    image: 'https://i.ibb.co.com/V0YKxG87/shahi-doi-600-jpg.jpg',
  },
];

let cart = [];

// ==========================================
// DYNAMIC DELIVERY FEE SYNC
// ==========================================
function formatDeliveryChargeLabel(fee, lang) {
  if (fee <= 0) {
    return lang === 'bn' ? 'ফ্রি (৳০)' : 'Free (৳0)';
  }
  return `৳${fee}`;
}

function attachDeliveryFeeListener() {
  if (!rtdb) {
    updateCartUI();
    return;
  }

  rtdb.ref(FIREBASE_DELIVERY_FEE_PATH).on('value', (snap) => {
    if (snap.exists() && snap.val() !== null && snap.val() !== '') {
      const parsed = Number(snap.val());
      if (!Number.isNaN(parsed) && parsed >= 0) {
        currentDeliveryFee = parsed;
        localStorage.setItem(DELIVERY_FEE_STORAGE_KEY, String(parsed));
        updateCartUI();
      }
    } else {
      rtdb
        .ref(FIREBASE_DELIVERY_FEE_PATH)
        .set(currentDeliveryFee)
        .catch(() => {});
      updateCartUI();
    }
  });
}

// ==========================================
// STRICT INPUT VALIDATION (NAME, PHONE, ADDRESS)
// ==========================================
const FAKE_NAME_BLOCKLIST = new Set([
  'xyz',
  'abc',
  'abcd',
  'test',
  'testing',
  'demo',
  'user',
  'admin',
  'guest',
  'name',
  'first',
  'last',
  'none',
  'null',
  'undefined',
  'asdf',
  'qwer',
  'qwerty',
  'zxcv',
  'fake',
  'sample',
  'nobody',
  'unknown',
  'aaa',
  'bbb',
  'ccc',
  'xxx',
]);

function validatePersonName(rawValue, fieldType = 'first') {
  const value = (rawValue || '').trim().replace(/\s+/g, ' ');
  const isBn = currentLang === 'bn';
  const label =
    fieldType === 'first'
      ? isBn
        ? 'নামের প্রথম অংশ'
        : 'First name'
      : isBn
      ? 'নামের শেষ অংশ'
      : 'Last name';

  if (!value) {
    return {
      valid: false,
      message: isBn ? `${label} অবশ্যই লিখতে হবে।` : `${label} is required.`,
    };
  }

  if (value.length < 2 || value.length > 35) {
    return {
      valid: false,
      message: isBn
        ? `${label} কমপক্ষে ২ অক্ষরের হতে হবে।`
        : `${label} must be between 2 and 35 characters.`,
    };
  }

  const validCharsRegex =
    /^[A-Za-z\u0980-\u09FF]+(?:[ .'-][A-Za-z\u0980-\u09FF]+)*$/;
  if (!validCharsRegex.test(value)) {
    return {
      valid: false,
      message: isBn
        ? `${label}-এ সংখ্যা (123) বা অপ্রয়োজনীয় চিহ্ন ব্যবহার করা যাবে না।`
        : `${label} cannot contain numbers (123) or invalid symbols.`,
    };
  }

  const normalizedLower = value
    .toLowerCase()
    .replace(/[^a-z\u0980-\u09FF]/g, '');

  if (FAKE_NAME_BLOCKLIST.has(normalizedLower)) {
    return {
      valid: false,
      message: isBn
        ? `দয়া করে আপনার আসল ${label} লিখুন (XYZ বা Test গ্রহণযোগ্য নয়)।`
        : `Please enter your real ${label.toLowerCase()} (XYZ or Test is not allowed).`,
    };
  }

  if (/^(.)\1+$/.test(normalizedLower)) {
    return {
      valid: false,
      message: isBn
        ? `দয়া করে একটি সঠিক ${label} দিন।`
        : `Please enter a valid ${label.toLowerCase()}.`,
    };
  }

  return { valid: true, formatted: value };
}

const COUNTRY_PHONE_RULES = {
  '+880': {
    validate: (digits) => {
      const local11 =
        digits.length === 10 && digits.startsWith('1') ? '0' + digits : digits;
      if (!/^01[3-9]\d{8}$/.test(local11)) return null;
      const subscriber = local11.slice(3);
      if (
        /^(\d)\1{7}$/.test(subscriber) ||
        subscriber === '12345678' ||
        subscriber === '87654321'
      ) {
        return null;
      }
      return `+880${local11.slice(1)}`;
    },
    hintEn: 'Enter a valid 11-digit BD mobile number (e.g., 017XXXXXXXX).',
    hintBn: 'সঠিক ১১ ডিজিটের বাংলাদেশি মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)।',
  },
  '+91': {
    validate: (digits) => {
      const clean =
        digits.length === 11 && digits.startsWith('0')
          ? digits.slice(1)
          : digits;
      if (!/^[6-9]\d{9}$/.test(clean) || /^(\d)\1{9}$/.test(clean)) return null;
      return `+91${clean}`;
    },
    hintEn: 'Enter a valid 10-digit Indian mobile number.',
    hintBn: 'সঠিক ১০ ডিজিটের ভারতীয় মোবাইল নম্বর দিন।',
  },
  '+966': {
    validate: (digits) => {
      const clean =
        digits.length === 10 && digits.startsWith('0')
          ? digits.slice(1)
          : digits;
      if (!/^5\d{8}$/.test(clean) || /^(\d)\1{8}$/.test(clean)) return null;
      return `+966${clean}`;
    },
    hintEn: 'Enter a valid 9-digit Saudi number (5XXXXXXXX).',
    hintBn: 'সঠিক ৯ ডিজিটের সৌদি নম্বর দিন (5XXXXXXXX)।',
  },
  '+971': {
    validate: (digits) => {
      const clean =
        digits.length === 10 && digits.startsWith('0')
          ? digits.slice(1)
          : digits;
      if (!/^5\d{8}$/.test(clean) || /^(\d)\1{8}$/.test(clean)) return null;
      return `+971${clean}`;
    },
    hintEn: 'Enter a valid 9-digit UAE number (5XXXXXXXX).',
    hintBn: 'সঠিক ৯ ডিজিটের আরব আমিরাত নম্বর দিন (5XXXXXXXX)।',
  },
  '+974': {
    validate: (digits) => {
      if (!/^[3567]\d{7}$/.test(digits) || /^(\d)\1{7}$/.test(digits))
        return null;
      return `+974${digits}`;
    },
    hintEn: 'Enter a valid 8-digit Qatar mobile number.',
    hintBn: 'সঠিক ৮ ডিজিটের কাতার মোবাইল নম্বর দিন।',
  },
  '+965': {
    validate: (digits) => {
      if (!/^[569]\d{7}$/.test(digits) || /^(\d)\1{7}$/.test(digits))
        return null;
      return `+965${digits}`;
    },
    hintEn: 'Enter a valid 8-digit Kuwait mobile number.',
    hintBn: 'সঠিক ৮ ডিজিটের কুয়েত মোবাইল নম্বর দিন।',
  },
  '+968': {
    validate: (digits) => {
      if (!/^[79]\d{7}$/.test(digits) || /^(\d)\1{7}$/.test(digits))
        return null;
      return `+968${digits}`;
    },
    hintEn: 'Enter a valid 8-digit Oman mobile number.',
    hintBn: 'সঠিক ৮ ডিজিটের ওমান মোবাইল নম্বর দিন।',
  },
  '+60': {
    validate: (digits) => {
      const clean = digits.startsWith('0') ? digits.slice(1) : digits;
      if (!/^1\d{8,9}$/.test(clean) || /^(\d)\1+$/.test(clean)) return null;
      return `+60${clean}`;
    },
    hintEn: 'Enter a valid Malaysian mobile number.',
    hintBn: 'সঠিক মালয়েশিয়ান মোবাইল নম্বর দিন।',
  },
  '+65': {
    validate: (digits) => {
      if (!/^[89]\d{7}$/.test(digits) || /^(\d)\1{7}$/.test(digits))
        return null;
      return `+65${digits}`;
    },
    hintEn: 'Enter a valid 8-digit Singapore mobile number.',
    hintBn: 'সঠিক ৮ ডিজিটের সিঙ্গাপুর মোবাইল নম্বর দিন।',
  },
  '+44': {
    validate: (digits) => {
      const clean =
        digits.length === 11 && digits.startsWith('0')
          ? digits.slice(1)
          : digits;
      if (!/^7\d{9}$/.test(clean) || /^(\d)\1{9}$/.test(clean)) return null;
      return `+44${clean}`;
    },
    hintEn: 'Enter a valid UK mobile number (7XXXXXXXXX).',
    hintBn: 'সঠিক ইউকে মোবাইল নম্বর দিন (7XXXXXXXXX)।',
  },
  '+1': {
    validate: (digits) => {
      if (!/^[2-9]\d{9}$/.test(digits) || /^(\d)\1{9}$/.test(digits))
        return null;
      return `+1${digits}`;
    },
    hintEn: 'Enter a valid 10-digit US/Canada phone number.',
    hintBn: 'সঠিক ১০ ডিজিটের US/Canada ফোন নম্বর দিন।',
  },
};

function validateInternationalPhone(countryCode, rawPhone) {
  const isBn = currentLang === 'bn';
  const digitsOnly = (rawPhone || '').replace(/\D/g, '');

  if (!digitsOnly) {
    return {
      valid: false,
      message: isBn
        ? 'ফোন নম্বর অবশ্যই দিতে হবে।'
        : 'Phone number is required.',
    };
  }

  const rule = COUNTRY_PHONE_RULES[countryCode];
  if (!rule) {
    if (
      digitsOnly.length < 7 ||
      digitsOnly.length > 14 ||
      /^(\d)\1+$/.test(digitsOnly)
    ) {
      return {
        valid: false,
        message: isBn
          ? 'দয়া করে একটি বৈধ ফোন নম্বর দিন।'
          : 'Please enter a valid phone number.',
      };
    }
    return { valid: true, formatted: `${countryCode}${digitsOnly}` };
  }

  const normalized = rule.validate(digitsOnly);
  if (!normalized) {
    return {
      valid: false,
      message: isBn ? rule.hintBn : rule.hintEn,
    };
  }

  return { valid: true, formatted: normalized };
}

function validateDeliveryAddress(rawAddress) {
  const isBn = currentLang === 'bn';
  const value = (rawAddress || '').trim().replace(/\s+/g, ' ');

  if (!value) {
    return {
      valid: false,
      message: isBn
        ? 'ডেলিভারির পূর্ণ ঠিকানা লিখুন।'
        : 'Delivery address is required.',
    };
  }

  if (value.length < 8) {
    return {
      valid: false,
      message: isBn
        ? 'দয়া করে বাসা, রোড ও এলাকার নামসহ পূর্ণ ঠিকানা দিন।'
        : 'Please provide a complete address (House, Road, and Area).',
    };
  }

  const lower = value.toLowerCase();
  if (
    FAKE_NAME_BLOCKLIST.has(lower) ||
    /^(.)\1+$/.test(lower.replace(/\s/g, ''))
  ) {
    return {
      valid: false,
      message: isBn
        ? 'দয়া করে সঠিক ডেলিভারি ঠিকানা লিখুন।'
        : 'Please enter a valid delivery address.',
    };
  }

  return { valid: true, formatted: value };
}

function setFieldValidationState(inputEl, errorEl, result) {
  if (!inputEl || !errorEl) return;
  if (result.valid) {
    inputEl.classList.remove('input-invalid');
    errorEl.textContent = '';
  } else {
    inputEl.classList.add('input-invalid');
    errorEl.textContent = result.message;
  }
}

// ==========================================
// ORDER STATUS NORMALIZATION & LIVE SYNC
// ==========================================
function normalizeOrderStatus(rawStatus) {
  const s = String(rawStatus || 'Confirmed')
    .trim()
    .toLowerCase();
  if (s === 'pending') return 'Pending';
  if (s === 'processing' || s === 'in progress') return 'Processing';
  if (
    s === 'delivered' ||
    s === 'dropped off' ||
    s === 'drop off' ||
    s === 'completed'
  ) {
    return 'Delivered';
  }
  if (s === 'cancelled' || s === 'canceled') return 'Cancelled';
  return 'Confirmed';
}

function isFinalOrHistoryStatus(status) {
  const norm = normalizeOrderStatus(status);
  return norm === 'Delivered' || norm === 'Cancelled';
}

function getStatusBadgeInfo(status, t) {
  const norm = normalizeOrderStatus(status);
  if (norm === 'Pending') {
    return { text: t.statusPending, cssClass: 'status-pending' };
  }
  if (norm === 'Processing') {
    return { text: t.statusProcessing, cssClass: 'status-processing' };
  }
  if (norm === 'Delivered') {
    return { text: t.statusDelivered, cssClass: 'status-delivered' };
  }
  if (norm === 'Cancelled') {
    return { text: t.statusCancelled, cssClass: 'status-cancelled' };
  }
  return { text: t.statusConfirmed, cssClass: 'status-confirmed' };
}

function getOrderFirebaseKey(orderId) {
  return String(orderId || '').replace(/[^a-zA-Z0-9_-]/g, '_');
}

function syncOrderStatusLocally(orderId, nextStatus) {
  const normalized = normalizeOrderStatus(nextStatus);
  let changed = false;

  const customerList = getCustomerOrders();
  const updatedCustomerList = customerList.map((ord) => {
    if (
      ord.orderId === orderId &&
      normalizeOrderStatus(ord.status) !== normalized
    ) {
      changed = true;
      return { ...ord, status: normalized };
    }
    return ord;
  });

  if (changed) {
    localStorage.setItem(
      CUSTOMER_ORDERS_KEY,
      JSON.stringify(updatedCustomerList)
    );
    updateCustomerOrderBadges();
  }

  try {
    const adminList = JSON.parse(localStorage.getItem('clayPotOrders')) || [];
    const updatedAdminList = adminList.map((ord) =>
      ord.orderId === orderId ? { ...ord, status: normalized } : ord
    );
    localStorage.setItem('clayPotOrders', JSON.stringify(updatedAdminList));
  } catch {}

  const modal = document.getElementById('customerOrdersModal');
  if (modal && modal.style.display === 'block') {
    const mode = modal.dataset.currentMode || 'active';
    const titleEl = document.getElementById('customerOrdersTitle');
    const bodyEl = document.getElementById('customerOrdersBody');
    if (titleEl && bodyEl) {
      window.renderCustomerOrdersView(mode, titleEl, bodyEl, currentLang);
    }
  }
}

function attachRealtimeListenersForCustomerOrders() {
  if (!rtdb) return;
  const orders = getCustomerOrders();
  orders.forEach((ord) => {
    if (!ord || !ord.orderId) return;
    const key = getOrderFirebaseKey(ord.orderId);
    const ref = rtdb.ref(`${FIREBASE_ORDERS_PATH}/${key}/status`);
    ref.off();
    ref.on('value', (snap) => {
      if (snap.exists() && snap.val()) {
        syncOrderStatusLocally(ord.orderId, snap.val());
      }
    });
  });
}

// ==========================================
// FIREBASE & LOCALSTORAGE ORDER PERSISTENCE
// ==========================================
async function saveOrderToFirebaseRealtime(orderObj) {
  try {
    let existingOrders =
      JSON.parse(localStorage.getItem('clayPotOrders')) || [];
    existingOrders.unshift(orderObj);
    localStorage.setItem('clayPotOrders', JSON.stringify(existingOrders));
  } catch {}

  if (!rtdb) {
    throw new Error('Realtime Database is not initialized');
  }

  const safeKey = getOrderFirebaseKey(orderObj.orderId);
  await rtdb.ref(`${FIREBASE_ORDERS_PATH}/${safeKey}`).set({
    ...orderObj,
    status: normalizeOrderStatus(orderObj.status || 'Confirmed'),
    createdAt: Date.now(),
  });
}

window.fetchCloudOrders = async function () {
  if (!rtdb) return [];
  const snapshot = await rtdb.ref(FIREBASE_ORDERS_PATH).get();
  if (!snapshot.exists()) return [];
  const val = snapshot.val();
  return Object.values(val).sort(
    (a, b) => (b.createdAt || 0) - (a.createdAt || 0)
  );
};

function getCustomerOrders() {
  try {
    return JSON.parse(localStorage.getItem(CUSTOMER_ORDERS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCustomerOrder(orderObj) {
  const list = getCustomerOrders();
  list.unshift({
    ...orderObj,
    status: normalizeOrderStatus(orderObj.status || 'Confirmed'),
  });
  localStorage.setItem(CUSTOMER_ORDERS_KEY, JSON.stringify(list));
  updateCustomerOrderBadges();
  attachRealtimeListenersForCustomerOrders();
}

function clearCustomerOrdersHistory() {
  const orders = getCustomerOrders();
  const remainingActive = orders.filter(
    (ord) => !isFinalOrHistoryStatus(ord.status)
  );
  localStorage.setItem(CUSTOMER_ORDERS_KEY, JSON.stringify(remainingActive));
  updateCustomerOrderBadges();

  const titleEl = document.getElementById('customerOrdersTitle');
  const bodyEl = document.getElementById('customerOrdersBody');
  if (titleEl && bodyEl) {
    renderCustomerOrdersView('history', titleEl, bodyEl, currentLang);
  }
}

function updateCustomerOrderBadges() {
  const orders = getCustomerOrders();
  const activeOrders = orders.filter(
    (ord) => !isFinalOrHistoryStatus(ord.status)
  );
  const historyOrders = orders.filter((ord) =>
    isFinalOrHistoryStatus(ord.status)
  );

  const activeBadgeText = String(activeOrders.length);
  const historyBadgeText = String(historyOrders.length);

  const activeCountEl = document.getElementById('activeOrdersCount');
  const desktopActiveCountEl = document.getElementById(
    'desktopActiveOrdersCount'
  );
  const historyCountEl = document.getElementById('historyOrdersCount');

  if (activeCountEl) activeCountEl.textContent = activeBadgeText;
  if (desktopActiveCountEl) desktopActiveCountEl.textContent = activeBadgeText;
  if (historyCountEl) historyCountEl.textContent = historyBadgeText;
}

function formatOrderItemsText(items) {
  if (!Array.isArray(items) || items.length === 0) return '-';
  return items.map((i) => `${i.name} × ${i.qty}`).join(', ');
}

function renderOrderCardHtml(order, t, showTrackerNote = false) {
  const badgeInfo = getStatusBadgeInfo(order.status, t);
  return `
    <div class="order-record-card">
      <div class="order-record-top">
        <strong style="color: var(--terracotta);">${t.orderIdLabel}: ${
    order.orderId
  }</strong>
        <span class="order-status-badge ${badgeInfo.cssClass}">${
    badgeInfo.text
  }</span>
      </div>
      ${
        showTrackerNote
          ? `<p style="font-size: 0.84rem; color: var(--espresso); background: var(--surface); padding: 8px 10px; border-radius: 8px; border: 1px dashed var(--border); margin-bottom: 8px;">${t.latestConfirmMsg}</p>`
          : ''
      }
      <p style="margin-bottom: 4px;"><strong>${
        t.itemsLabel
      }:</strong> ${formatOrderItemsText(order.items)}</p>
      <p style="margin-bottom: 4px;"><strong>${t.totalLabel}:</strong> ৳${
    order.total
  }</p>
      <p style="margin-bottom: 4px;"><strong>${t.addressLabel}:</strong> ${
    order.address
  }</p>
      <p style="font-size: 0.8rem; color: var(--text-muted);"><strong>${
        t.dateLabel
      }:</strong> ${order.date}</p>
    </div>
  `;
}

window.renderCustomerOrdersView = function (mode, titleEl, bodyEl, lang) {
  const activeLang = lang || currentLang;
  const t = translations[activeLang] || translations.en;
  const modal = document.getElementById('customerOrdersModal');
  if (modal) modal.dataset.currentMode = mode;

  const orders = getCustomerOrders();

  if (mode === 'history') {
    titleEl.textContent = t.historyTitle;
    const historyOrders = orders.filter((ord) =>
      isFinalOrHistoryStatus(ord.status)
    );

    if (historyOrders.length === 0) {
      bodyEl.innerHTML = `<p style="color: var(--text-muted);">${t.noHistoryOrders}</p>`;
      return;
    }

    const cardsHtml = historyOrders
      .map((ord) => renderOrderCardHtml(ord, t, false))
      .join('');

    bodyEl.innerHTML = `
      ${cardsHtml}
      <button
        type="button"
        class="btn-secondary full-width"
        style="margin-top: 8px;"
        onclick="clearCustomerOrdersHistory()"
      >
        ${t.clearHistoryBtn}
      </button>
    `;
  } else {
    titleEl.textContent = t.myOrdersTitle;
    const activeOrders = orders.filter(
      (ord) => !isFinalOrHistoryStatus(ord.status)
    );

    if (activeOrders.length === 0) {
      bodyEl.innerHTML = `<p style="color: var(--text-muted);">${t.noActiveOrders}</p>`;
      return;
    }

    bodyEl.innerHTML = activeOrders
      .map((ord, idx) => renderOrderCardHtml(ord, t, idx === 0))
      .join('');
  }
};

// Render Menu Products
function renderProducts() {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;
  productGrid.innerHTML = '';

  const positionClassMap = {
    4: 'featured-top-center',
    1: 'row-bottom-1',
    2: 'row-bottom-2',
    3: 'row-bottom-3',
  };

  const displayOrderIds = [4, 1, 2, 3];
  const orderedProducts = displayOrderIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  orderedProducts.forEach((product) => {
    const name = currentLang === 'bn' ? product.nameBn : product.nameEn;
    const weight = currentLang === 'bn' ? product.weightBn : product.weightEn;
    const desc = currentLang === 'bn' ? product.descBn : product.descEn;
    const btnText = translations[currentLang].addToCartBtn;
    const posClass = positionClassMap[product.id] || '';

    const card = document.createElement('div');
    card.className = `product-card ${posClass}`.trim();
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

function refreshPaymentToggleHint() {
  const hintEl = document.getElementById('paymentToggleHint');
  const box = document.getElementById('easyPaymentBox');
  const t = translations[currentLang] || translations.en;
  if (hintEl) {
    const isOpen = box?.classList.contains('open');
    hintEl.textContent = isOpen ? t.payHideHint : t.payClickHint;
  }
}
window.refreshPaymentToggleHint = refreshPaymentToggleHint;

// Language Switcher Function
function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const t = translations[lang];

  ['enLangBtn', 'desktopEnLangBtn'].forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) btn.classList.toggle('active', lang === 'en');
  });

  ['bnLangBtn', 'desktopBnLangBtn'].forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) btn.classList.toggle('active', lang === 'bn');
  });

  document.querySelectorAll('[data-translate]').forEach((el) => {
    const key = el.getAttribute('data-translate');
    if (key === 'payClickHint') {
      refreshPaymentToggleHint();
    } else if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll('[data-translate-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-translate-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });

  renderProducts();
  updateCartUI();
  updateCustomerOrderBadges();
}

// Theme Sync Helper
function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.setAttribute(
    'data-theme',
    isDark ? 'dark' : 'light'
  );
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) darkModeToggle.checked = isDark;

  const desktopThemeBtn = document.getElementById('desktopThemeBtn');
  if (desktopThemeBtn) {
    desktopThemeBtn.textContent = isDark ? '☀️' : '🌙';
  }
}

const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('change', function () {
    applyTheme(this.checked ? 'dark' : 'light');
  });
}

const desktopThemeBtn = document.getElementById('desktopThemeBtn');
if (desktopThemeBtn) {
  desktopThemeBtn.addEventListener('click', function () {
    const isCurrentlyDark =
      document.documentElement.getAttribute('data-theme') === 'dark';
    applyTheme(isCurrentlyDark ? 'light' : 'dark');
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
  const deliveryFeeTextEl = document.getElementById('deliveryFeeText');
  const totalText = document.getElementById('totalText');
  const t = translations[currentLang];

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const activeFee = subtotal > 0 ? currentDeliveryFee : 0;

  if (cartCountEl) cartCountEl.textContent = totalCount;
  if (subtotalText) subtotalText.textContent = `৳${subtotal}`;
  if (deliveryFeeTextEl) {
    deliveryFeeTextEl.textContent = formatDeliveryChargeLabel(
      currentDeliveryFee,
      currentLang
    );
  }
  if (totalText) {
    totalText.textContent = `৳${
      subtotal > 0 ? subtotal + activeFee : currentDeliveryFee
    }`;
  }

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
          <strong>${
            currentLang === 'bn' ? item.nameBn : item.nameEn
          }</strong><br />
          <small>${currentLang === 'bn' ? item.weightBn : item.weightEn} — ৳${
        item.price * item.qty
      }</small>
        </div>
        <div class="qty-controls">
          <button type="button" onclick="changeQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button type="button" onclick="changeQty(${item.id}, 1)">+</button>
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

// Side Menu Drawer Toggles
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

// Live Validation, Delivery Fee Sync & Realtime Status Sync
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
  changeLanguage(currentLang);
  updateCustomerOrderBadges();
  attachRealtimeListenersForCustomerOrders();
  attachDeliveryFeeListener();

  const firstNameInput = document.getElementById('custFirstName');
  const lastNameInput = document.getElementById('custLastName');
  const countrySelect = document.getElementById('countryCodeSelect');
  const phoneInput = document.getElementById('custPhone');
  const addressInput = document.getElementById('custAddress');

  const firstNameError = document.getElementById('firstNameError');
  const lastNameError = document.getElementById('lastNameError');
  const phoneError = document.getElementById('phoneError');
  const addressError = document.getElementById('addressError');

  if (countrySelect && phoneInput) {
    countrySelect.addEventListener('change', () => {
      const code = countrySelect.value;
      if (code === '+880') {
        phoneInput.placeholder = '017XXXXXXXX';
      } else if (code === '+91' || code === '+1') {
        phoneInput.placeholder = '9876543210';
      } else if (code === '+966' || code === '+971') {
        phoneInput.placeholder = '5XXXXXXXX';
      } else {
        phoneInput.placeholder = 'XXXXXXXX';
      }

      if (phoneInput.value.trim()) {
        setFieldValidationState(
          phoneInput,
          phoneError,
          validateInternationalPhone(code, phoneInput.value)
        );
      }
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      phoneInput.value = phoneInput.value.replace(/[^\d]/g, '').slice(0, 14);
      if (phoneError.textContent) {
        setFieldValidationState(
          phoneInput,
          phoneError,
          validateInternationalPhone(
            countrySelect ? countrySelect.value : '+880',
            phoneInput.value
          )
        );
      }
    });
  }

  if (firstNameInput) {
    firstNameInput.addEventListener('blur', () => {
      setFieldValidationState(
        firstNameInput,
        firstNameError,
        validatePersonName(firstNameInput.value, 'first')
      );
    });
  }

  if (lastNameInput) {
    lastNameInput.addEventListener('blur', () => {
      setFieldValidationState(
        lastNameInput,
        lastNameError,
        validatePersonName(lastNameInput.value, 'last')
      );
    });
  }

  if (addressInput) {
    addressInput.addEventListener('blur', () => {
      setFieldValidationState(
        addressInput,
        addressError,
        validateDeliveryAddress(addressInput.value)
      );
    });
  }

  [firstNameInput, lastNameInput, countrySelect, phoneInput, addressInput]
    .filter(Boolean)
    .forEach((field) => {
      field.addEventListener('focus', () => {
        setTimeout(() => {
          field.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 260);
      });
    });
});

// Checkout & Order Submission
const checkoutForm = document.getElementById('checkoutForm');
if (checkoutForm) {
  checkoutForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    if (cart.length === 0) {
      alert(
        currentLang === 'bn'
          ? 'দয়া করে কার্টে অন্তত একটি পণ্য যোগ করুন।'
          : 'Please add at least one item to your basket first.'
      );
      return;
    }

    const firstNameInput = document.getElementById('custFirstName');
    const lastNameInput = document.getElementById('custLastName');
    const countrySelect = document.getElementById('countryCodeSelect');
    const phoneInput = document.getElementById('custPhone');
    const addressInput = document.getElementById('custAddress');

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const phoneError = document.getElementById('phoneError');
    const addressError = document.getElementById('addressError');

    const firstRes = validatePersonName(firstNameInput.value, 'first');
    const lastRes = validatePersonName(lastNameInput.value, 'last');
    const phoneRes = validateInternationalPhone(
      countrySelect ? countrySelect.value : '+880',
      phoneInput.value
    );
    const addrRes = validateDeliveryAddress(addressInput.value);

    setFieldValidationState(firstNameInput, firstNameError, firstRes);
    setFieldValidationState(lastNameInput, lastNameError, lastRes);
    setFieldValidationState(phoneInput, phoneError, phoneRes);
    setFieldValidationState(addressInput, addressError, addrRes);

    if (!firstRes.valid) {
      firstNameInput.focus();
      return;
    }
    if (!lastRes.valid) {
      lastNameInput.focus();
      return;
    }
    if (!phoneRes.valid) {
      phoneInput.focus();
      return;
    }
    if (!addrRes.valid) {
      addressInput.focus();
      return;
    }

    const fullName = `${firstRes.formatted} ${lastRes.formatted}`;
    const fullPhone = phoneRes.formatted;
    const cleanAddress = addrRes.formatted;

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const total = subtotal + currentDeliveryFee;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const orderId = `#TCP-${randomNum}`;

    const newOrder = {
      orderId,
      firstName: firstRes.formatted,
      lastName: lastRes.formatted,
      name: fullName,
      countryCode: countrySelect ? countrySelect.value : '+880',
      phone: fullPhone,
      address: cleanAddress,
      items: cart.map((item) => ({
        name: currentLang === 'bn' ? item.nameBn : item.nameEn,
        qty: item.qty,
      })),
      deliveryFee: currentDeliveryFee,
      total,
      status: 'Confirmed',
      date: new Date().toLocaleString(),
    };

    try {
      await saveOrderToFirebaseRealtime(newOrder);
    } catch (err) {
      console.error('Could not push order to Realtime Database:', err);
    }

    saveCustomerOrder(newOrder);

    document.getElementById('modalOrderId').textContent = orderId;
    document.getElementById('modalCustName').textContent = fullName;
    document.getElementById('modalCustPhone').textContent = fullPhone;
    document.getElementById('modalCustAddress').textContent = cleanAddress;
    document.getElementById('modalTotalAmount').textContent = `৳${total}`;

    closeCart();
    document.getElementById('successModal').style.display = 'block';
    document.getElementById('successModalOverlay').style.display = 'block';

    cart = [];
    updateCartUI();
    checkoutForm.reset();
    [firstNameError, lastNameError, phoneError, addressError].forEach((el) => {
      if (el) el.textContent = '';
    });
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
