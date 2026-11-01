const state = { cart: JSON.parse(localStorage.getItem('cozyCart') || '{}') };
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const nav = $('#primary-nav');
const navToggle = $('.nav-toggle');
const drawer = $('.cart-drawer');
const backdrop = $('.backdrop');
const cartItems = $('.cart-items');
const toast = $('.toast');
let toastTimer;

function money(value) { return `$${value.toFixed(2)}`; }
function saveCart() { localStorage.setItem('cozyCart', JSON.stringify(state.cart)); }
function itemCount() { return Object.values(state.cart).reduce((sum, item) => sum + item.quantity, 0); }

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function renderCart() {
  const entries = Object.values(state.cart);
  const count = itemCount();
  $('.cart-count').textContent = count;
  $('[data-open-cart]').setAttribute('aria-label', `Open cart, ${count} ${count === 1 ? 'item' : 'items'}`);
  if (!entries.length) {
    cartItems.innerHTML = '<div class="empty-cart"><span>☕</span><h3>Your cart is empty</h3><p>Add a favorite from the menu to get started.</p></div>';
  } else {
    cartItems.innerHTML = entries.map(item => `<div class="cart-item" data-cart-name="${item.name}"><div><h3>${item.name}</h3><p>${money(item.price)} each</p><div class="quantity"><button type="button" data-change="-1" aria-label="Remove one ${item.name}">−</button><strong>${item.quantity}</strong><button type="button" data-change="1" aria-label="Add one ${item.name}">＋</button></div><button type="button" class="remove-item">Remove</button></div><strong>${money(item.price * item.quantity)}</strong></div>`).join('');
  }
  const total = entries.reduce((sum, item) => sum + item.price * item.quantity, 0);
  $('.cart-total').textContent = money(total);
  $('.checkout-button').disabled = !entries.length;
  saveCart();
}

function setPageLocked(locked) {
  document.body.classList.toggle('locked', locked);
  backdrop.hidden = !locked;
}

function openCart() {
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  setPageLocked(true);
  $('.cart-drawer .icon-button').focus();
}

function closeAll() {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  $$('dialog[open]').forEach(dialog => dialog.close());
  setPageLocked(false);
}

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

$$('#primary-nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

$$('.filter').forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  $$('.filter').forEach(item => {
    item.classList.toggle('active', item === button);
    item.setAttribute('aria-pressed', item === button);
  });
  $$('.menu-card').forEach(card => card.classList.toggle('hidden', category !== 'all' && card.dataset.category !== category));
}));

$$('.add-button').forEach(button => button.addEventListener('click', () => {
  const card = button.closest('.menu-card');
  const { name, price } = card.dataset;
  state.cart[name] ??= { name, price: Number(price), quantity: 0 };
  state.cart[name].quantity += 1;
  renderCart();
  showToast(`${name} added to your cart`);
}));

cartItems.addEventListener('click', event => {
  const row = event.target.closest('.cart-item');
  if (!row) return;
  const name = row.dataset.cartName;
  if (event.target.matches('[data-change]')) {
    state.cart[name].quantity += Number(event.target.dataset.change);
    if (state.cart[name].quantity <= 0) delete state.cart[name];
  } else if (event.target.matches('.remove-item')) {
    delete state.cart[name];
  }
  renderCart();
});

$('[data-open-cart]').addEventListener('click', openCart);
$$('[data-close-dialog]').forEach(button => button.addEventListener('click', closeAll));
$('[data-open-offer]').addEventListener('click', () => $('.offer-dialog').showModal());

$('.checkout-button').addEventListener('click', () => {
  const order = `CC-${Math.floor(100 + Math.random() * 900)}`;
  state.cart = {};
  renderCart();
  closeAll();
  $('.order-number').textContent = order;
  $('.success-dialog').showModal();
});

$$('dialog').forEach(dialog => dialog.addEventListener('click', event => {
  if (event.target === dialog) closeAll();
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && drawer.classList.contains('open')) closeAll();
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}), { threshold: .12 });
$$('.reveal').forEach(element => observer.observe(element));

$('#year').textContent = new Date().getFullYear();
renderCart();
