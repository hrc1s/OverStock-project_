// const things = [
//   {
//     Image:
//       "https://ak1.ostkcdn.com/images/products/is/images/direct/91b602ac2246e49568a2f7f4e95b99574492f875/Ovios-Patio-Furniture-Sets-6-piece-Rattan-Wicker-Rocking-Swivel-Chair-Sectional-Sofa-Set-With-Side-Tables.jpg?impolicy=mediumlow",
//     saleStart: "11249",
//     price: 11249,
//     name: "OVIOS 6-piece Rattan Wicker Patio Furniture Set Swivel Rocking",
//     star: "⭐⭐⭐⭐⭐ 176",
//   },
//   {
//     Image:
//       "https://ak1.ostkcdn.com/images/products/is/images/direct/5d8f356c6dbb86d80fdd5ffe6ecf936c382eeb44/2%22-Cordless-Faux-Wood-Blind---Smooth-White.jpg?impolicy=mediumlow",
//     saleStart: "39986",
//     price: 39986,
//     name: "2 Cordless Faux Wood Blind - Smooth White",
//     star: "⭐⭐⭐⭐⭐ 176",
//   },
//   {
//     Image:
//       "https://ak1.ostkcdn.com/images/products/is/images/direct/e688b56a7d3470588740b69f756e8736b11d0e6c/Lotus-%26-Windoware%2C-1%22-Cordless-Vinyl-Blind.jpg?impolicy=mediumlow",
//     saleStart: "17378",
//     price: 17378,
//     name: "1 Cordless Vinyl Mini Blind - White Wicker Sectional",
//     star: "⭐⭐⭐⭐⭐ 186",
//   },
//   {
//     Image:
//       "https://ak1.ostkcdn.com/images/products/is/images/direct/e8345b4a66e8d37840e1b7743eb7b6716751af61/Ovios-6-piece-Outdoor-High-back-Wicker-Sectional-Set-With-Table.jpg?impolicy=mediumlow",
//     saleStart: "45678",
//     price: 45678,
//     name: "OVIOS 6-piece Outdoor High-back Wicker Sectional Set With Table",
//     star: "⭐⭐⭐⭐⭐ 32",
//   },
// ];

// const recent = [
//   {
//     Image:
//       "https://ak1.ostkcdn.com/images/products/is/images/direct/e688b56a7d3470588740b69f756e8736b11d0e6c/Lotus-%26-Windoware%2C-1%22-Cordless-Vinyl-Blind.jpg?impolicy=mediumlow",
//     saleStart: "87644",
//     price: 87644,
//     name: "1 Cordless Vinyl Mini Blind - White",
//     star: "⭐⭐⭐⭐⭐ 186",
//   },
//   {
//     Image:
//       "https://ak1.ostkcdn.com/images/products/is/images/direct/91b602ac2246e49568a2f7f4e95b99574492f875/Ovios-Patio-Furniture-Sets-6-piece-Rattan-Wicker-Rocking-Swivel-Chair-Sectional-Sofa-Set-With-Side-Tables.jpg?impolicy=mediumlow",
//     saleStart: "34578",
//     price: 34578,
//     name: "OVIOS 6-piece Rattan Wicker Patio Furniture Set Swivel Rocking",
//     star: "⭐⭐⭐⭐⭐ 176",
//   },
//   {
//     Image:
//       "https://ak1.ostkcdn.com/images/products/is/images/direct/8b2be751946f252dd1ee936b13f35383132e6a36/SAFAVIEH-Courtyard-Charmaine-Indoor--Outdoor-Waterproof-Area-Rug.jpg?impolicy=mediumlow",
//     saleStart: "86547",
//     price: 86547,
//     name: "SAFAVIEH Courtyard Charmaine Indoor/ Outdoor Waterproof Area",
//     star: "⭐⭐⭐⭐⭐ 2567",
//   },
//   {
//     Image:
//       "https://ak1.ostkcdn.com/images/products/is/images/direct/693943a957d7a96672e5677e05a2047eadbe456f/Costway-8PCS-Rattan-Patio-Furniture-Set-Cushioned-Sofa-Chair-Coffee.jpg?impolicy=mediumlow",
//     saleStart: "34578",
//     price: 34578,
//     name: "Costway 8PCS Rattan Patio Furniture Set Cushioned Sofa",
//     star: "⭐⭐⭐⭐⭐ 199",
//   },
// ];
let allProducts = JSON.parse(localStorage.getItem("all-products")) || [];
let thingsdiv = document.querySelector("#things");
addthings(allProducts);
thingsdiv = document.querySelector("#recent");
addthings(allProducts);

let cartList = JSON.parse(localStorage.getItem("cart-list")) || [];
let Wishlist = JSON.parse(localStorage.getItem("wish-list")) || [];

if (cartList.length == 0) {

}
console.log(cartList);
let cartCount = document.getElementById("cart-count");
cartCount.textContent = localStorage.getItem("cart-count") || 0;
function addthings(array) {
    thingsdiv.innerHTML = "";
    var counter = 0;
  
    // Fisher-Yates shuffle algorithm
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  
    array.forEach(function (el) {
      if (counter < 4) {
        let card = document.createElement("div");
        let prodImg = document.createElement("img");
        let prodPrice = document.createElement("p");
        let prodName = document.createElement("p");
        let atcBtn = document.createElement("button");
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
  
        // if (el.category == "sofas") {
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
          window.location.reload();
        });
  
        prodImg.addEventListener("click", function () {
          localStorage.setItem(
            "selected-product",
            JSON.stringify({
              img: el.img,
              id: el.id,
              name: el.name,
              description: el.description,
              price: el.price,
              category: el.category,
            })
          );
          window.location.href = "product-details.html";
          console.log(localStorage.getItem("selected-product"));
        });
  
        card.append(prodImg, prodPrice, prodName, atcBtn);
        thingsdiv.append(card);
  
        counter++;
      } else {
        // Break out of the loop if four items have been added
        return;
      }
    });
  }
  
var cartitem = document.querySelector("#cartitems");
//console.log(cartList);
var emptydiv = document.querySelector("#empty");
if (cartList.length !== 0) {
  emptydiv.remove();
}
else {
    cartitem.style.display = "none"
}

let Total_amount = JSON.parse(localStorage.getItem("Totalamount")) || 0;
function updateDOM(cartList) {
  //total items and cart total functionality
  if (cartList.length !== 0) {
    emptydiv.remove();
  }
  var totalitems = document.querySelector("#totalitems");
  totalitems.textContent = cartList.length;
  var total = 0;
  for (var i = 0; i < cartList.length; i++) {
    total = total + +cartList[i].price;
  }
  //console.log(total)
  var totals = document.querySelector("#total");
  totals.textContent = parseFloat(total).toLocaleString("en-US", {
    style: "currency",
    currency: "INR",
  });

  var carttotal = document.querySelector("#cartTotal");
  carttotal.textContent = parseFloat(total).toLocaleString("en-US", {
    style: "currency",
    currency: "INR",
  });
  localStorage.setItem("Totalamount", JSON.stringify(total.toFixed(2)));

  
  var promocodebtn = document.querySelector("#checkout-button");

  //Apply promo code
  promocodebtn.addEventListener("click", function () {
    event.preventDefault();
    var promocodeinput = document.querySelector(".promocode");
    if (promocodeinput.value === "OverStock10") {
      //giving 10% static discount
      var carttotal = document.querySelector("#cartTotal");
      carttotal.textContent = total;
      localStorage.setItem("Totalamount", JSON.stringify(total));
    }
    if (cartList.length == 0) {
        alert("Not buying anything?")
    } 
    else {
        window.location.href = "payment.html";
    }
  });

  cartitem.innerHTML = "";
  console.log(cartList);
  cartList.forEach(function (element, index) {
    var carddiv = document.createElement("div");
    var imgdiv = document.createElement("div");
    var namePricediv = document.createElement("div");

    var Cimg = document.createElement("img");

    var Cname = document.createElement("p");
    var Cprice = document.createElement("h3");

    var Cremovebtn = document.createElement("button");
    var Csavebtn = document.createElement("button");

    Cimg.setAttribute("src", element.img);
    Cname.textContent = element.name;
    Cprice.textContent = "₹" + element.price;

    Cremovebtn.textContent = "Remove";
    Cremovebtn.addEventListener("click", function () {
      event.preventDefault();
      //remove item from local storage
      //console.log(index);
      cartList.splice(index, 1);
      cartCount.textContent--;
      localStorage.setItem("cart-count", cartCount.textContent);
      localStorage.setItem("cart-list", JSON.stringify(cartList));
      updateDOM(cartList);
    });

    Csavebtn.textContent = "Save For Later";
    Csavebtn.addEventListener("click", function () {
      alert("Product added to wishlist");
      var obj = {
        img: element.img,
        name: element.name,
        price: element.price,
        description: element.description,
        id: element.id,
        category: element.category,
      };
      Wishlist.push(obj);
      carddiv.remove();
      cartList.splice(index, 1);
      cartCount.textContent--;
      localStorage.setItem("cart-count", cartCount.textContent)
      localStorage.setItem("cart-list", JSON.stringify(cartList));
      localStorage.setItem("wish-list", JSON.stringify(Wishlist));
      window.location.reload();
    });

    imgdiv.append(Cimg);
    namePricediv.append(Cname, Cprice, Cremovebtn, Csavebtn);
    carddiv.append(imgdiv, namePricediv);
    cartitem.append(carddiv);
  });
}
updateDOM(cartList);

//Scroll to top of the page
var scrolltop = document.querySelector(".arrow");
scrolltop.addEventListener("click", function () {
  //console.log("Hiii");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
