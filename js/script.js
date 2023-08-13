const url = "https://api.noroff.dev/api/v1/rainy-days";

const resultsContainer = document.querySelector(".product-card-container");

function productCard(product) {
  return `<a href="/products/scott-waterproof-jacket.html" class="product-card">
  <div class="product-window">
    <img src="${product.image}" class="jacket_image" alt="${product.title}">
    <img src="/icons/heart-icon.svg" class="heart-icon" alt="heart-icon for favorites">
  </div>
  <p>${product.title}</p>
  <div class="flex-container">
    <p class="price">${product.price} NOK</p>
    <div class="flex-container">
      <div class="box light-grey"></div>
      <div class="box pink"></div>
      <div class="box sky-blue"></div>
    </div>
  </div>
</a>`
}


async function getProducts() {

  const response = await fetch(url);

  const productData = await response.json();


  resultsContainer.innerHTML = "";

  for (let i = 0; i < productData.length; i++) {
    //console.log(productData[i].title);

    

    resultsContainer.innerHTML += productCard(productData[i]);
  }

}

getProducts();

