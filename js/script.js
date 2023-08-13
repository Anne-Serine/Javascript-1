const url = "https://api.noroff.dev/api/v1/rainy-days";

const resultsContainer = document.querySelector(".results");


async function getProducts() {

  const response = await fetch(url);

  const results = await response.json();

  const products = results;

  //resultsContainer.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    console.log(products[i].title);

    //resultsContainer.innerHTML += `<div class="results">${products[i].title}<div>`;
  }

}

getProducts();
