const things=[
    {
         Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/91b602ac2246e49568a2f7f4e95b99574492f875/Ovios-Patio-Furniture-Sets-6-piece-Rattan-Wicker-Rocking-Swivel-Chair-Sectional-Sofa-Set-With-Side-Tables.jpg?impolicy=mediumlow",
         saleStart: "11249",
         price: 11249,
         name: "OVIOS 6-piece Rattan Wicker Patio Furniture Set Swivel Rocking",
         star:"⭐⭐⭐⭐⭐ 176",
    },
    {
        Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/5d8f356c6dbb86d80fdd5ffe6ecf936c382eeb44/2%22-Cordless-Faux-Wood-Blind---Smooth-White.jpg?impolicy=mediumlow",
        saleStart: "39986",
        price: 39986,
        name: "2 Cordless Faux Wood Blind - Smooth White",
        star:"⭐⭐⭐⭐⭐ 176",
   },
   {
    Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/e688b56a7d3470588740b69f756e8736b11d0e6c/Lotus-%26-Windoware%2C-1%22-Cordless-Vinyl-Blind.jpg?impolicy=mediumlow",
    saleStart: "17378",
    price: 17378,
    name: "1 Cordless Vinyl Mini Blind - White Wicker Sectional",
    star:"⭐⭐⭐⭐⭐ 186",
   },
   {
    Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/e8345b4a66e8d37840e1b7743eb7b6716751af61/Ovios-6-piece-Outdoor-High-back-Wicker-Sectional-Set-With-Table.jpg?impolicy=mediumlow",
    saleStart: "45678",
    price: 45678,
    name: "OVIOS 6-piece Outdoor High-back Wicker Sectional Set With Table",
    star:"⭐⭐⭐⭐⭐ 32",
   },
]

const recent=[
    {
         Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/e688b56a7d3470588740b69f756e8736b11d0e6c/Lotus-%26-Windoware%2C-1%22-Cordless-Vinyl-Blind.jpg?impolicy=mediumlow",
         saleStart: "87644",
         price: 87644,
         name: "1 Cordless Vinyl Mini Blind - White",
         star:"⭐⭐⭐⭐⭐ 186",
    },
    {
        Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/91b602ac2246e49568a2f7f4e95b99574492f875/Ovios-Patio-Furniture-Sets-6-piece-Rattan-Wicker-Rocking-Swivel-Chair-Sectional-Sofa-Set-With-Side-Tables.jpg?impolicy=mediumlow",
        saleStart: "34578",
        price: 34578,
        name: "OVIOS 6-piece Rattan Wicker Patio Furniture Set Swivel Rocking",
        star:"⭐⭐⭐⭐⭐ 176",
   },
   {
    Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/8b2be751946f252dd1ee936b13f35383132e6a36/SAFAVIEH-Courtyard-Charmaine-Indoor--Outdoor-Waterproof-Area-Rug.jpg?impolicy=mediumlow",
    saleStart: "86547",
    price: 86547,
    name: "SAFAVIEH Courtyard Charmaine Indoor/ Outdoor Waterproof Area",
    star:"⭐⭐⭐⭐⭐ 2567",
   },
   {
    Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/693943a957d7a96672e5677e05a2047eadbe456f/Costway-8PCS-Rattan-Patio-Furniture-Set-Cushioned-Sofa-Chair-Coffee.jpg?impolicy=mediumlow",
    saleStart: "34578",
    price: 34578,
    name: "Costway 8PCS Rattan Patio Furniture Set Cushioned Sofa",
    star:"⭐⭐⭐⭐⭐ 199",
   },
]

    let thingsdiv=document.querySelector("#things");
    addthings(things);
    thingsdiv=document.querySelector("#recent");
    addthings(recent);

    function addthings(array){
        thingsdiv.innerHTML=""; 
        array.forEach(function(element,index){

        var card=document.createElement("div");

        var img=document.createElement("img");
        var addtocart=document.createElement("button");
        var psale=document.createElement("p");
        var pname=document.createElement("p");
        var pstar=document.createElement("p");

        img.setAttribute("src",element.Image);
        addtocart.textContent="Add to Cart";
        addtocart.addEventListener("click",function(){
             var obj={
                img : element.Image,
                name: element.name,
                price: element.price,
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel",         
                id: 19,
                category: "patio"
            }
            cartList.push(obj);
            localStorage.setItem("cart-list",JSON.stringify(cartList));
            updateDOM(cartList);
        })


        psale.textContent="INR "+element.saleStart;
        pname.textContent=element.name;
        pstar.textContent=element.star;
        card.append(img,addtocart,psale,pname,pstar);
        thingsdiv.append(card);       
    });
  }
  


    let cartList = JSON.parse(localStorage.getItem("cart-list")) || [];
    let Wishlist = JSON.parse(localStorage.getItem("wish-list")) || [];
    //console.log(cartList);
    var emptydiv=document.querySelector("#empty");
    if(cartList.length!==0){
        emptydiv.remove();    
    }
    
    let Total_amount = JSON.parse(localStorage.getItem("Totalamount")) || 0;
    function updateDOM(cartList){
        //total items and cart total functionality
        if(cartList.length!==0){
            emptydiv.remove();    
        }
        var totalitems=document.querySelector("#totalitems");
        totalitems.textContent=cartList.length;
        var total=0;
        for(var i=0;i<cartList.length;i++)
        {
         total=total+ +cartList[i].price;
        }
        //console.log(total)
        var totals=document.querySelector("#total");
        totals.textContent=total.toFixed(1);

        var carttotal=document.querySelector("#cartTotal");
        carttotal.textContent=(total).toFixed(1);
        localStorage.setItem("Totalamount",JSON.stringify((total).toFixed(1)));

        var cartitem=document.querySelector("#cartitems");
        var promocodebtn=document.querySelector(".promocode+button");

        //Apply promo code
        promocodebtn.addEventListener("click",function(){
            event.preventDefault();
            var promocodeinput=document.querySelector(".promocode");
            if(promocodeinput.value ==="OverStock10")
            {
                //giving 10% static discount        
                var carttotal=document.querySelector("#cartTotal");
                carttotal.textContent=(total*0.1).toFixed(1);
                localStorage.setItem("Totalamount",JSON.stringify((total*0.1).toFixed(1)));

            }   
        });

        cartitem.innerHTML="";
        cartList.forEach(function(element,index){
              var carddiv=document.createElement("div");
              var imgdiv=document.createElement("div");
              var namePricediv=document.createElement("div");
    
              var Cimg=document.createElement("img");
    
              var Cname=document.createElement("p");
              var Cprice=document.createElement("h3");
              
              var Cremovebtn=document.createElement("button");
              var Csavebtn=document.createElement("button");
    
              Cimg.setAttribute("src",element.img);
              Cname.textContent=element.name;
              Cprice.textContent="INR "+element.price;
              
              Cremovebtn.textContent="Remove";
              Cremovebtn.addEventListener("click",function(){
                  event.preventDefault();            
                  //remove item from local storage 
                  //console.log(index);
                 event.preventDefault();                    
                 cartList.splice(index,1);
                 localStorage.setItem("cart-list", JSON.stringify(cartList));
                 updateDOM(cartList);   
              });

              Csavebtn.textContent="Save For Later";
              Csavebtn.addEventListener("click",function(){
                    alert("Product added to wishlist");
                    var obj={
                              img : element.img,
                              name: element.name,
                              price: element.price,
                              description:"Lorem ipsum dolor sit amet, consectetur consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel",         
                              id: 19,
                              category: "Sofa"
                            }
                        Wishlist.push(obj);
                        localStorage.setItem("wish-list",JSON.stringify(Wishlist));
              });
          
              imgdiv.append(Cimg);
              namePricediv.append(Cname,Cprice,Cremovebtn,Csavebtn);
              carddiv.append(imgdiv,namePricediv);
              cartitem.append(carddiv)
         
        });
    }
    updateDOM(cartList);


//Scroll to top of the page 
var scrolltop=document.querySelector(".arrow")
scrolltop.addEventListener("click",function(){
     //console.log("Hiii");
     window.scrollTo({top: 0, behavior: 'smooth'});
});