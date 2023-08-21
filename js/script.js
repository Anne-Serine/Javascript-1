const url = "https://api.noroff.dev/api/v1/rainy-days";

const resultsContainer = document.querySelector(".product-card-container");



function productCard(product) {

  return `<a href="/products/jacket.html?productId=${product.id}" class="product-card">
  <div class="product-window">
    <img src="${product.image}" class="jacket_image" alt="${product.description}">
    <img src="/icons/heart-icon.svg" class="heart-icon" alt="heart-icon for favorites">
  </div>
  <div class="product-card-details">
    <p>${product.title}</p>
    <div class="flex-container">
      <p class="price">${product.price} NOK</p>
      <div class="flex-container">
        <div class="box light-grey"></div>
        <div class="box pink"></div>
        <div class="box sky-blue"></div>
      </div>
    </div>
  </div>
</a>`
}



async function getProducts() {

  const response = await fetch(url);
  const productData = await response.json();


  resultsContainer.innerHTML = "";

  for (let i = 0; i < productData.length; i++) {

    resultsContainer.innerHTML += productCard(productData[i]);
  }

}

getProducts();




const detailContainer = document.querySelector("#productDetails");

// get the query string
const queryString = document.location.search;

// create an object that will allows us to access all the query string parameters
const params = new URLSearchParams(queryString);

// get the id parameter from the query string
const id = params.get("productId");

const url2 = "https://api.noroff.dev/api/v1/rainy-days/" + id;


const productImage = document.querySelector("#productImage");
const productName = document.querySelector("#productName");
const productDescription = document.querySelector("#productDescription");
const tags = document.querySelector("#tags");
const productSizes = document.querySelector("#productSizes");
const productPrice = document.querySelector("#productPrice");
const productThumbnail = document.querySelector("#productThumbnail");



async function getDetails() {

  const response = await fetch(url2);

  const productData = await response.json();

  if(productImage || productName || productDescription || tags || productSizes || productPrice || productThumbnail) {

  
  productImage.setAttribute("src", productData.image);
  productImage.setAttribute("alt", productData.description);
  productName.innerHTML = productData.title;
  productDescription.innerHTML = productData.description;

  for (i = 0; i < productData.tags.length; i++) {

    tags.innerHTML += "<li>" + productData.tags[i] + "</li>";
  }

  for (i = 0; i < productData.sizes.length; i++) {

    productSizes.innerHTML += "<p>" + productData.sizes[i] + "</p>";
  }

  productPrice.innerHTML = productData.price + " NOK";

  productThumbnail.setAttribute("src", productData.image);
  productThumbnail.setAttribute("alt", productData.description);

  }
}

if(id) {
  getDetails();
}


