
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const titleElement = document.querySelector('title');
    titleElement.textContent = category; 
  
    displayProducts(category, 'listCategoryProduct');

    if (category == 'Mugs') {
      img = `https://sc04.alicdn.com/kf/H80df20557456476ebc767c963f82f5fb4.jpg`;
      p =`Mugs are one of the most versatile and thoughtful gift options available. They are not only practical but also hold sentimental value. Mugs are something that almost everyone needs and uses in their daily routine. They are perfect for sipping coffee, tea, hot chocolate, and even soup. With so many designs and styles, it's easy to choose one that matches the recipient's interests, personality, or personal taste. Whether it's a classic white ceramic mug, a funny pun, a cool graphic, or a customized design, there's a mug out there for every person on your gift-giving list.

      One of the best things about mugs is their customization options. You can choose to add a message or even a photo to the mug, making it a personalized and memorable gift. A mug that has a special message or image printed on it is something that the recipient is likely to cherish for years to come. Moreover, it will always remind them of the person who gifted the mug.
      
      Mugs are also a cost-effective gift option. They are often priced reasonably and do not compromise the quality of the gift. If you are looking for a budget-friendly yet thoughtful gift option, mugs are ideal. You can even buy them in bulk for office, corporate, or party gifting occasions.
      
      In conclusion, mugs make a fantastic gift choice that combines practicality and sentimentality. They are available in many styles, designs, and customization options, making them ideal for a variety of occasions and recipients. Whether you're looking for a thoughtful gift for a friend, family member, or coworker, a personalized mug is a great option that will likely be appreciated and used on a daily basis.`;
    }
    if (category == 'Cards') {
      img = `https://img.buzzfeed.com/buzzfeed-static/static/2020-05/13/15/asset/0145795810fc/sub-buzz-1709-1589385501-1.jpg?crop=794:847;0,114&downsize=900:*&output-format=auto&output-quality=auto`;
      p =`Cards make great gifts for many reasons. First, they offer a personal touch when you're not able to be there in person. A card lets the recipient know that you're thinking of them and that you took the time to select a special message just for them. Whether it's a birthday, holiday, or other special occasion, a card can help you express your thoughts and feelings in a thoughtful way.

      Another advantage of cards as gifts is that they are customizable and can be created to suit any occasion or recipient. You can choose from a wide variety of designs, colors, and messages to find one that perfectly matches the recipient's personality or interests. Whether they love flowers or sports, there's a card that will make them smile.
      
      Cards also offer a lasting keepsake that the recipient can enjoy for years to come. They can be displayed on a desk or bookshelf, or even hung on a wall. Whenever the recipient sees the card, they'll be reminded of the special occasion and the person who gifted it.
      
      Finally, cards are an affordable gift option that can be easily mailed to the recipient. They don't take up much space, making them ideal for long-distance gift-giving. Even if you're on a tight budget, you can still find a beautiful and meaningful card that will show the recipient how much you care.
      
      In conclusion, cards make thoughtful and meaningful gifts that offer a personal touch and lasting keepsake. They are customizable, affordable and can be sent anywhere to express your thoughts and feelings. Whether it's a birthday, holiday, or just because, a card is a gift that is sure to be appreciated by anyone on your gift-giving list.`;
    } 
    if (category == 'Bracelets') {
      img = `https://m.media-amazon.com/images/I/71PclWFwruL._AC_UY1100_.jpg`;
      p =`Bracelets make an excellent gift choice for several reasons. Firstly, they are versatile and available in many styles, designs, and sizes, making it easy to find one that matches the recipient's taste and personality. Whether you're looking for a classic gold bangle, a trendy leather wristband, or a colorful beaded bracelet, there is a style that will suit every occasion and individual. With their wonderful, delicate details and eye-catching designs, bracelets are ideal for formal events such as weddings or proms, as well as for casual everyday wear.

      Another reason why bracelets make perfect gifts is that they hold sentimental value. They can be personalized with initials, a message, or even birthstones, making them even more special and personal. A bracelet can be a symbolic gift to cherish forever, as they can represent friendship, love, and even family bonds.
      
      Bracelets have also become a popular option as a "stacking" or "layering" accessory, meaning they can be worn and combined with other bracelets or jewelry pieces, allowing for endless fashion and personalization options. They can be worn on their own as a statement piece or stacked together for a more unique appearance.
      
      Lastly, bracelets are budget-friendly gift options that do not compromise the quality of the gift. You can purchase a stunning bracelet at a price that will not break the bank, making them a perfect option for those who want to give an affordable yet thoughtful and stylish present.
      
      In conclusion, bracelets make great gifts due to their versatility, personalization options, and sentimental value. They can be worn on any occasion, hold special meaning, and fit any budget. Whether you are buying them for a special event or as an everyday accessory, bracelets are a thoughtful and stylish gift you can't go wrong with.`;
    } 
    const htmlString = `
    <img src="${img}" alt="" height="310px">
    <p id="p_id">${p}</p>
    `;
    document.getElementById('intro').innerHTML = htmlString;
    document.getElementById('h1_cate').innerHTML = category;
    document.getElementById(category).id = 'stay_here';

  });
  
  function getProductByCate(_cate) {
    return window.listProducts.filter(o => Array.isArray(o.categories) && o.categories.includes(_cate));
  }
  
  function displayProducts(category, targetId) {
    const target = document.querySelector(`#${targetId}`);
    const products = getProductByCate(category);
    const htmlString = products.map(o => `
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
            <div class="product-short-description">${o.short_description}</div>
          </div>
        </div>
      </li>
    `);
    target.innerHTML = htmlString.join('');
  }



  