export function productCard(product) {

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