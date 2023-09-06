export async function getOneProduct() {
  
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("productId");

  const url2 = "https://api.noroff.dev/api/v1/rainy-days/" + id;
  const detailContainer = document.querySelector("#productDetails")


  try {
    const response = await fetch(url2);
    const detailData = await response.json();

    return detailData;
    //console.log(detailData);

  }
  catch(error) {
    //console.log("feil")
    detailContainer.innerHTML = "Sorry, something went wrong..."
  }
}
