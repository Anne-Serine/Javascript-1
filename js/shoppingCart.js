import { fetchProducts } from "./api/apiCall.js";


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

  const dialog = document.querySelector("dialog");
  dialog.showModal();

  const dialogCloseButton = document.querySelector(".close-window-button");
  dialogCloseButton.addEventListener("click", () => {
    dialog.close();
  })
}




export function addToCartButton() {
  const button = document.querySelector("#shopNowButton");
  if (button) {
    button.addEventListener("click", onAddToCart);
  }
}


const loadedCart = load("cart")
let total = 0;

if (cartContainer) {

  cartContainer.innerHTML = "Shopping cart is empty";

  if(loadedCart) {
    cartContainer.innerHTML = "";
  }
  const productData = await fetchProducts(productsUrl, cartContainer);

  for (let i = 0; i < productData.length; i++) {
    if(loadedCart && loadedCart.some(item => item.productId === productData[i].id)) {
      
      let quantity = 0;
      
      for (let q = 0; q < loadedCart.length; q++) {
        if(productData[i].id === loadedCart[q].productId) {
          quantity = loadedCart[q].quantity;
          total = total + (quantity * productData[i].price);
        }
      }

      cartContainer.innerHTML += `<li class="cart-display-box">
                                <div class="cart-items-display">
                                <a href="/products/jacket.html?productId=${productData[i].id}">
                                  <div class="cart-small-image"><img src="${productData[i].image}"></div>
                                  <div>
                                  <p>${productData[i].title}</p>
                                </a>
                                  <p>${productData[i].baseColor}</p>
                                  </div>
                                </div>
                                <div class="cart-price-display">
                                  <p>${productData[i].price} $</p>
                                  <p>${quantity}</p>
                                  <p class="each-product-total"><span>${(productData[i].price * quantity).toLocaleString()} $</span></p>
                                </div>
                                </li>`                            
    }
    
  }
  


  const totalContainer = document.querySelector(".cart-total-container");
  
  totalContainer.innerHTML += `<p>
                                Total: <span>${total.toLocaleString()} $
                              </span></p>`

}





function emptyCart() {
  const emptyCartButton = document.querySelector("#emptyCartButton");
  const totalContainer = document.querySelector(".cart-total-container");

  if(emptyCartButton) {
    emptyCartButton.addEventListener("click", function() {
      remove("cart");
      cartItemCounter.innerText = 0
  
      cartContainer.innerHTML = "Shopping cart is empty";
      totalContainer.innerHTML = `<p>
                                  Total: <span>0 $
                                  </span></p>`;
    })
  }
}

emptyCart()



