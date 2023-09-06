import { productCard } from "./productCard.js";
import { getProducts } from "./api/getProducts.js";





async function createProductCards() {
  const resultsContainer = document.querySelector(".product-card-container");

  const products = await getProducts();

  resultsContainer.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    resultsContainer.innerHTML += productCard(products[i]);
  }
  
}
  
createProductCards();




// const detailContainer = document.querySelector("#productDetails");

// // get the query string
// const queryString = document.location.search;

// // create an object that will allows us to access all the query string parameters
// const params = new URLSearchParams(queryString);

// // get the id parameter from the query string
// const id = params.get("productId");

// const url2 = "https://api.noroff.dev/api/v1/rainy-days/" + id;


// const productImage = document.querySelector("#productImage");
// const productName = document.querySelector("#productName");
// const productDescription = document.querySelector("#productDescription");
// const tags = document.querySelector("#tags");
// const productSizes = document.querySelector("#productSizes");
// const productPrice = document.querySelector("#productPrice");
// const productThumbnail = document.querySelector("#productThumbnail");



// async function getDetails() {

//   const response = await fetch(url2);

//   const productData = await response.json();

//   if(productImage || productName || productDescription || tags || productSizes || productPrice || productThumbnail) {

  
//   productImage.setAttribute("src", productData.image);
//   productImage.setAttribute("alt", productData.description);
//   productName.innerHTML = productData.title;
//   productDescription.innerHTML = productData.description;

//   for (i = 0; i < productData.tags.length; i++) {

//     tags.innerHTML += "<li>" + productData.tags[i] + "</li>";
//   }

//   for (i = 0; i < productData.sizes.length; i++) {

//     productSizes.innerHTML += "<p>" + productData.sizes[i] + "</p>";
//   }

//   productPrice.innerHTML = productData.price + " NOK";

//   productThumbnail.setAttribute("src", productData.image);
//   productThumbnail.setAttribute("alt", productData.description);

//   }
// }

// if(id) {
//   getDetails();
// }


