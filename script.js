const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart'); 
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;
//✅
function updateTotalPrice(amount) {
  totalPrice += amount;
// actualiza la suma del nuevo precio cuando se remueve o agrega un item
  if (totalPrice < 0) totalPrice = 0;
  totalPriceSpan.textContent = totalPrice.toFixed(0); 
}
//✅
function removeItem(event) {

  // Bolsita 2 = Nombre + Precio + Button. Cuando das click on buttom 2. Es un li? NO, es un button. Mira hacia afuera y se pregunta Quien me envuelve? Bolsita 2, Es un li? SI, Se detiene y agarra toda la Bolsita 2, esta buscando el closest li
  const item = event.target.closest('li');
  // string to number
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}
//✅
function addProduct() {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);
  if (name === '' || isNaN(price) || price <= 0) {
    alert('Please enter a valid product name and a price greater than 0.');
    return;
  }
  const li = document.createElement('li');
  li.className = 'cart-item';
  li.dataset.price = price;
  const span = document.createElement('span');
  span.textContent = `${name} - $${price.toFixed(2)}`; 
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', removeItem);
  li.appendChild(span);
  li.appendChild(removeBtn);
  cart.appendChild(li);
  updateTotalPrice(price);
  productNameInput.value = '';
  productPriceInput.value = '';
}

addProductButton.addEventListener('click', addProduct);