export async function getProducts() {
  const url = "https://api.noroff.dev/api/v1/rainy-days";

  try {
    const response = await fetch(url);
    const productData = await response.json();

    return productData;
  }
  catch(error) {
    resultsContainer.innerHTML = "Sorry, something went wrong...";
  }
  
}

//getProducts();