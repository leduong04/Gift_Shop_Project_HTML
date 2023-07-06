

for (var i = 0; i < window.listProducts.length; i++) {
  document.getElementById("select1").innerHTML += `
    <option value="${i}">${window.listProducts[i].name}</option>
  `;
  document.getElementById("select2").innerHTML += `
    <option value="${i}">${window.listProducts[i].name}</option>
  `;
}
function item1(a) {
  var select2 = document.getElementById("select2").value;
  if (a != select2) {
    document.getElementById("img1").src = window.listProducts[a].images;
    document.getElementById("price1").innerHTML = "$ " + window.listProducts[a].price;
    document.getElementById("sale1").innerHTML = "$ " + window.listProducts[a].sale;
    document.getElementById("desc1").innerHTML = window.listProducts[a].description;
    document.getElementById("brand1").innerHTML = window.listProducts[a].brand;
    document.getElementById("Should_be_used_for1").innerHTML = window.listProducts[a].Should_be_used_for;
    document.getElementById("Suitable_for1").innerHTML = window.listProducts[a].Suitable_for;
    var rating1 = document.getElementById("rating1");
    rating1.innerHTML = "";
    for (var i = 0; i < window.listProducts[a].rating; i++) {
      var star = document.createElement("span");
      star.className = "star";
      star.innerHTML = "&#9733;";
      rating1.appendChild(star);
    }
   
    var buyNow1 = document.getElementById('buyNow1');
    buyNow1.href = 'product_detail.html?id=' + (Number(a)+1);


  } else {
    document.getElementById("select1").selectedIndex = 'null';
    document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    document.getElementById("price1").innerHTML = "";
    document.getElementById("sale1").innerHTML = "";
    document.getElementById("desc1").innerHTML = "";
    document.getElementById("brand1").innerHTML = "";
    document.getElementById("Should_be_used_for1").innerHTML = "";
    document.getElementById("Suitable_for1").innerHTML = "";
    var rating1 = document.getElementById("rating1");
    rating1.innerHTML = "";
    var buyNow1 = document.getElementById('buyNow1');
    buyNow1.href = '#';
   
    
  }
}
function item2(a) {
  var select1 = document.getElementById("select1").value;
  if (a != select1) {
    document.getElementById("img2").src = window.listProducts[a].images;
    document.getElementById("price2").innerHTML = "$ " + window.listProducts[a].price;
    document.getElementById("sale2").innerHTML = "$ " + window.listProducts[a].sale;
    document.getElementById("desc2").innerHTML = window.listProducts[a].description;
    document.getElementById("brand2").innerHTML = window.listProducts[a].brand;
    document.getElementById("Should_be_used_for2").innerHTML = window.listProducts[a].Should_be_used_for;
    document.getElementById("Suitable_for2").innerHTML = window.listProducts[a].Suitable_for;

    var rating2 = document.getElementById("rating2");
    rating2.innerHTML = "";
    for (var i = 0; i < window.listProducts[a].rating; i++) {
      var star = document.createElement("span");
      star.className = "star";
      star.innerHTML = "&#9733;";
      rating2.appendChild(star);
    }

   
    var buyNow2 = document.getElementById('buyNow2');
    buyNow2.href = 'product_detail.html?id=' + (Number(a)+1);
  } else {
    document.getElementById("select2").selectedIndex = 'null';
    document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    document.getElementById("price2").innerHTML = "";
    document.getElementById("sale2").innerHTML = "";
    document.getElementById("desc2").innerHTML = "";
    document.getElementById("brand2").innerHTML = "";
    document.getElementById("Should_be_used_for2").innerHTML = "";
    document.getElementById("Suitable_for2").innerHTML = "";
    var rating2 = document.getElementById("rating2");
    rating2.innerHTML = "";
    var buyNow2 = document.getElementById('buyNow2');
    buyNow2.href = '#';


    
  }
}
