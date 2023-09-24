import { fetchProducts } from "./api/apiCall.js";

// const cartItems =  initShoppingCart();

const cartContainer = document.querySelector("#cartContainer");
const productsUrl = "https://api.noroff.dev/api/v1/rainy-days";


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


function calculateTotal() {
  const cart = load("cart");
  if(cart) {
    return cart.reduce((total, currentItem) => {
      return total + currentItem.quantity
    }, 0)
  } 
  return 0;
}


function setCartItemCounter() {
  const cartItemCounter = document.querySelector("#cartItemCounter")
  if(cartItemCounter) {
    cartItemCounter.innerHTML = calculateTotal();
  }
}

setCartItemCounter();



function onAddToCart(event) {
  const productId = event.target.value;

  let cart = load("cart") || [];

  const itemInCart = cart.find(item =>item.productId === productId)

  if (itemInCart) {
    itemInCart.quantity++;
  } else {
    cart.push({
      productId,
      quantity: 1
    })
  }
  save("cart", cart);

  setCartItemCounter();
}




function renderCart() {}


export function addToCartButton() {
  const button = document.querySelector("#shopNowButton");
  if (button) {
    button.addEventListener("click", onAddToCart);
  }
}


const loadedCart = load("cart")

if (cartContainer) {
  const productData = await fetchProducts(productsUrl, cartContainer);
  

  for (let i = 0; i < productData.length; i++) {
    if(loadedCart.some(item => item.productId === productData[i].id)) {

      let quantity = 0;
      for (let q = 0; q < loadedCart.length; q++) {
        if(productData[i].id === loadedCart[q].productId) {
          quantity = loadedCart[q].quantity;
        }
      }
      cartContainer.innerHTML += `<li>
                                <div class="cart-small-image"><img src="${productData[i].image}"></div>
                                <div>
                                <p>${productData[i].title}</p>
                                <p>${productData[i].baseColor}</p>
                                <p><span>${productData[i].price} $</span></p>
                                <p>${quantity}</p>
                                <p>${(productData[i].price * quantity).toLocaleString()}</p></div>
                                </li>`                                
    }
  }
}



function emptyCart() {
  const emptyCartButton = document.querySelector("#emptyCartButton");
  if(emptyCartButton) {
    emptyCartButton.addEventListener("click", function() {
      remove("cart");
      cartItemCounter.innerText = 0
  
      cartContainer.innerHTML = "Shopping cart is empty";
    })
  }
}

emptyCart()





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




export function initShoppingCart() {
  let cartItems = [];

  const storedCart = JSON.parse(localStorage.getItem("rainy-days-cart"));
  
  if(storedCart) {
    cartItems = storedCart;
  }

  const cartCounter = document.querySelector("#cartItemsCount");
  cartCounter.innerText = cartItems.length;

  addToCart(cartItems, cartCounter);

  return cartItems;
}






// // Empty the whole cart and clear local storage
// const emptyCartBtn = document.querySelector('#emptyCart');
// emptyCartBtn.addEventListener('click', () => {
//   const cartCounter = document.querySelector('#cartItemsCount')
//   cartCounter.innerText = 0
//   cartContainer.innerHTML = ''
//   localStorage.removeItem('rainy-days-cart')
// })