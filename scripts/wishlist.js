let wishList = JSON.parse(localStorage.getItem("wish-list")) || [];
console.log(wishList);

window.addEventListener("load", function () {
  displayProducts(wishList);
});

let cartList = JSON.parse(localStorage.getItem("cart-list")) || [];
console.log(cartList);

let cartCount = document.getElementById("cart-count");
cartCount.textContent = localStorage.getItem("cart-count") || 0;

let parentDiv = document.getElementById("wishProducts");

function displayProducts(arr) {
  parentDiv.innerHTML = "<h1>Your Wishlist</h1>";
  arr.forEach(function (el, i) {
    let card = document.createElement("div");
    let imgDiv = document.createElement("div");
    let prodImg = document.createElement("img");
    let detailsDiv = document.createElement("div");
    let prodPrice = document.createElement("p");
    let prodName = document.createElement("p");
    let atcBtn = document.createElement("button");
    let removeFromWL = document.createElement("button");
    let off = document.createElement("span");

    prodName.setAttribute("class", "prod-name");
    prodPrice.setAttribute("class", "prod-price");

    prodImg.setAttribute("src", el.img);
    prodPrice.textContent = parseFloat(el.price).toLocaleString("en-US", {
      style: "currency",
      currency: "INR",
    });
    prodName.textContent = el.name;
    atcBtn.textContent = "Add to cart";
    off.textContent = "10%OFF";

    // if (el.category == "sofa") {
    //   prodPrice.append(off);
    // }

    atcBtn.addEventListener("click", function () {
      cartList.push(el);
      console.log(cartList.length);
      localStorage.setItem("cart-list", JSON.stringify(cartList));
      atcBtn.textContent = "Added!";
      atcBtn.style.backgroundColor = "green";
      atcBtn.style.color = "white";
      cartCount.textContent++;
      localStorage.setItem("cart-count", cartCount.textContent);

      setTimeout(function () {
        atcBtn.textContent = "Add to Cart";
        atcBtn.style.backgroundColor = "";
        atcBtn.style.color = "";
        atcBtn.style.transitionDuration = "0.5s";
      }, 2000);
    });
    removeFromWL.textContent = "Remove";
    removeFromWL.addEventListener("click", function () {
      card.remove();
      arr.splice(i, 1);
      localStorage.setItem("wish-list", JSON.stringify(arr));
    });
    imgDiv.append(prodImg);
    detailsDiv.append(prodPrice, prodName, atcBtn, removeFromWL);
    card.append(imgDiv, detailsDiv);
    parentDiv.append(card);
  });
}
