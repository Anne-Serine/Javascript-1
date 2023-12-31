import { productCard } from "./productCard.js";
import { fetchProducts } from "./api/apiCall.js";
import { loadingIndicator } from "./functions.js";




async function createProductCards() {
  const url = "https://api.noroff.dev/api/v1/rainy-days"
  const resultsContainer = document.querySelector(".product-card-container");

  const products = await fetchProducts(url, resultsContainer);

  if (products) {
    resultsContainer.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
      resultsContainer.innerHTML += productCard(products[i]);
    }
  }
  
}
  
createProductCards();





async function createDetailCard() {

  const resultsContainer = document.querySelector(".product-detail-card");

  const params = new URLSearchParams(document.location.search);
  const id = params.get("productId");

  if (id) {

    const url2 = "https://api.noroff.dev/api/v1/rainy-days/" + id;

    
    const productDetails = await fetchProducts(url2, resultsContainer);
  

    if(productDetails) {
      
      const productImage = document.querySelector("#productImage");
      const productName = document.querySelector("#productName");
      const productDescription = document.querySelector("#productDescription");
      const tags = document.querySelector("#tags");
      const productSizes = document.querySelector("#productSizes");
      const productPrice = document.querySelector("#productPrice");
      const productThumbnail = document.querySelector("#productThumbnail");
      const loader = document.querySelector(".loading-container");

      document.title = productDetails.title + " | Rainy Days";

      loader.classList.add("dn")

      productImage.setAttribute("src", productDetails.image);
      productImage.setAttribute("alt", productDetails.description);
      productName.innerHTML = productDetails.title;
      productDescription.innerHTML = productDetails.description;

      for (let i = 0; i < productDetails.tags.length; i++) {

        tags.innerHTML += "<li>" + productDetails.tags[i] + "</li>";
      }

      for (let i = 0; i < productDetails.sizes.length; i++) {

        productSizes.innerHTML += "<p>" + productDetails.sizes[i] + "</p>";
      }

      productPrice.innerHTML = productDetails.price + " NOK";

      productThumbnail.setAttribute("src", productDetails.image);
      productThumbnail.setAttribute("alt", productDetails.description);
    }
  }

}

createDetailCard();





// async function createHtmlForDetailCard() {

//   const resultsContainer = document.querySelector(".product-detail-card");

//   const params = new URLSearchParams(document.location.search);
//   const id = params.get("productId");
  

//   const url2 = `https://api.noroff.dev/api/v1/rainy-days/${id}`;


//   const productData = await fetchProducts(url2, resultsContainer);
//   if (productData) {
  
//   document.title = productData.title + " | Rainy Days";

//   const loader = document.querySelector(".loading-container");
//   loader.classList.add("dn");

//   const productDetails = document.querySelector("#productDetails");

//   const detailContainer = document.createElement("div");
//   detailContainer.classList.add("product-image-gallery");

//   const detailContainer2 = document.createElement("div");
//   detailContainer2.classList.add("product-image-gallery");

//   const productImage = document.createElement("div");
//   productImage.classList.add("product-image");

//   const detailThumbnails = document.createElement("div");
//   detailThumbnails.classList.add("detail-thumbnails");
//   detailThumbnails.src = productData.image;
//   detailThumbnails.alt = productData.description;


//   const image = document.createElement("img");
//   image.classList.add("jacket-product_image");
//   image.src = productData.image;
//   image.alt = productData.description;

//   const div1 = document.createElement("div");
//   const div2 = document.createElement("div");
//   const div3 = document.createElement("div");
//   const div4 = document.createElement("div");

//   const productName = document.createElement("h1")
//   productName.innerHTML = productData.title;
  
//   const productDescription = document.createElement("p")
//   productDescription.innerHTML = productData.description;

//   const tags = document.createElement("ul");
    
//     for (let i = 0; i < productData.tags.length; i++) {
//       tags.innerHTML += `<p>${productData.tags[i]}</p>`;
//     }

//   const color = document.createElement("p");
//   color.innerText = "Select color"; 

//   const productCardColor = document.createElement("div");
//   productCardColor.classList.add("product-card-color");

//   const yellowBox = document.createElement("div");
//   yellowBox.classList.add("box", "yellow");

//   const lightGreyBox = document.createElement("div");
//   lightGreyBox.classList.add("box", "light-grey");

//   const blackBox = document.createElement("div");
//   blackBox.classList.add("box", "black");

//   const selectSize = document.createElement("p");
//   selectSize.innerText = "Select size";

//   const productCardSize = document.createElement("div");
//   productCardSize.classList.add("product-card-size")
    
//     for (let i = 0; i < productData.sizes.length; i++) {
//       productCardSize.innerHTML += `<p>${productData.sizes[i]}</p>`;
//     }

//   const flexContainer = document.createElement("div");
//   flexContainer.classList.add("flex-container");

//   const flexContainer2 = document.createElement("div");
//   flexContainer2.classList.add("flex-container");

//   const checkmark = document.createElement("img");
//   checkmark.src = "../icons/checkmark-light.png";  
  
//   const inStock = document.createElement("p");
//   inStock.innerText = "In stock"

//   const detailPrice = document.createElement("p");
//   detailPrice.classList.add("detail-price")
//   detailPrice.innerHTML = `${productData.price} NOK`;

//   const button = document.createElement("a");
//   button.href = "../checkout.html";
//   button.classList.add("button");
//   button.textContent = "Shop now";

//   const productCardEstimated = document.createElement("div");
//   productCardEstimated.classList.add("product-card-estimated")

//   const packageIcon = document.createElement("img");
//   packageIcon.src = "../icons/package.png"

//   const estimatedDelivery = document.createElement("p");
//   estimatedDelivery.innerText = "Estimated delivery 3-5 days";



//   productDetails.appendChild(detailContainer);
//   detailContainer.appendChild(productImage);
//   detailContainer.appendChild(detailThumbnails);
//   productImage.appendChild(image);
  
//   productDetails.appendChild(detailContainer2);
//   detailContainer2.appendChild(div1);
//   div1.appendChild(productName);
//   div1.appendChild(productDescription);

//   detailContainer2.appendChild(div2);
//   div2.appendChild(tags);

//   detailContainer2.appendChild(div3);
//   div3.appendChild(color);
//   div3.appendChild(productCardColor);
//   productCardColor.appendChild(yellowBox);
//   productCardColor.appendChild(lightGreyBox);
//   productCardColor.appendChild(blackBox);

//   detailContainer2.appendChild(div4);
//   div4.appendChild(selectSize);
//   div4.appendChild(productCardSize);

//   detailContainer2.appendChild(flexContainer);
//   flexContainer.appendChild(flexContainer2)
//   flexContainer.appendChild(detailPrice);
//   detailContainer2.appendChild(flexContainer);
//   flexContainer2.appendChild(checkmark);
//   flexContainer2.appendChild(inStock);

//   detailContainer2.appendChild(button);

//   detailContainer2.appendChild(productCardEstimated);
//   productCardEstimated.appendChild(packageIcon);
//   productCardEstimated.appendChild(estimatedDelivery);

//   }
// }

// createHtmlForDetailCard()