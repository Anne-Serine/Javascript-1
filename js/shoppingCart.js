import { fetchProducts } from "./api/apiCall.js";

// const cartItems =  initShoppingCart();

// const cartContainer = document.querySelector("#cartContainer");
// const productsUrl = "https://api.noroff.dev/api/v1/rainy-days";


function save(key, value) {
  const encodedValue = JSON.stringify(value);
  localStorage.setItem(key, encodedValue);
}

function load(key) {
  const encodedValue = localStorage.getItem(key);
  return JSON.parse(encodedValue);
}

function remove(key) {
  localStorage.removeItem(key);
}

function onAddToCart() {}
function renderCart() {}
function demo() {}




// if (cartContainer) {
//   const productData = await fetchProducts(cartContainer, productsUrl);

//   for (let i = 0; i > productData.length; i++) {
//     if(cartItems.some(item => item.product.productId === productData[i].id)) {
//       cartContainer.innerHTML += `<li>
//                                   ${productData[i].title}<span>${productData[i].title}</span>
//                                 </li>`
//     }
//   }
// }





// export function addToCart (cartItems, cartCounter) {
//   const addToCartBtn = document.querySelector("#shopNowButton");

//   addToCartBtn.addEventListener("click", (event) => {
//     const productId = event.target.value;

//     if (!cartItems.some(item => item.product.productId === productId)) {
//       cartItems.push({
//         product: {
//           productId: productId,
//           qty: 1
//         }
//       })
//     }
//     localStorage.setItem("rainy-days-cart", JSON.stringify(cartItems)),
//     cartCounter.innerHTML = cartItems.length;
//   })
// }




// export function initShoppingCart() {
//   let cartItems = [];

//   const storedCart = JSON.parse(localStorage.getItem("rainy-days-cart"));
  
//   if(storedCart) {
//     cartItems = storedCart;
//   }

//   const cartCounter = document.querySelector("#cartItemsCount");
//   cartCounter.innerText = cartItems.length;

//   addToCart(cartItems, cartCounter);

//   return cartItems;
// }




// Empty the whole cart and clear local storage
const emptyCartBtn = document.querySelector('#emptyCart');
emptyCartBtn.addEventListener('click', () => {
  const cartCounter = document.querySelector('#cartItemsCount')
  cartCounter.innerText = 0
  cartContainer.innerHTML = ''
  localStorage.removeItem('rainy-days-cart')
})