function getProductByCate(_cate) {
	return window.listProducts.filter(o => Array.isArray(o.categories) && o.categories.includes(_cate));
}

function displayProducts(category, targetId) {
  const target = document.querySelector(`#${targetId}`);
  const products = getProductByCate(category);
  const limitedProducts = products.slice(0, 4); 
  const htmlString = limitedProducts.map(o => `
    <li>
      <div class="product-item">
        <div class="product-top">
          <a href="product_detail.html?id=${o.id}" class="product-thumb">
            <img src="${o.images}" alt="">
          </a>
          <a href="product_detail.html?id=${o.id}" class="buy-now">Buy now</a>
        </div>
        <div class="product-info">
          <a href="product_detail.html?id=${o.id}" class="product-name">${o.name}</a>
          <div class="product-price"><span>$${o.price}</span> &emsp; $${o.sale}</div>
          <div class="product-short-description">
            ${o.short_description}
          </div>
        </div>
      </div>
    </li>
  `);
  target.innerHTML = htmlString.join('');
}


  displayProducts('Mugs', 'listMugsProduct');

  displayProducts('Cards', 'listCardsProduct');
  
  displayProducts('Bracelets', 'listBraceletsProduct');
  
