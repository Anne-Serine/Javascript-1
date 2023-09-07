// export async function getProducts() {
//   const url = "https://api.noroff.dev/api/v1/rainy-days";

//   try {
//     const response = await fetch(url);
//     const productData = await response.json();

//     return productData;
//   }
//   catch(error) {
//     resultsContainer.innerHTML = "Sorry, something went wrong...";
//   }
  
// }



// export async function getOneProduct() {
  
  


//   try {
//     const response = await fetch(url2);
//     const detailData = await response.json();

//     return detailData;
//     //console.log(detailData);

//   }
//   catch(error) {
//     //console.log("feil")
//     detailContainer.innerHTML = "Sorry, something went wrong..."
//   }
// }


export async function fetchProducts(url, resultsContainer) {

  try {
    const response = await fetch(url);
    const productData = response.json();

    resultsContainer.innerHTML = "";

    return productData
  }
  catch(error) {
    resultsContainer.innerHTML = `<div role="alert"> Sorry, something went wrong... </div>`;

  }
}