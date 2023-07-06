const things=[
    {
         Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/91b602ac2246e49568a2f7f4e95b99574492f875/Ovios-Patio-Furniture-Sets-6-piece-Rattan-Wicker-Rocking-Swivel-Chair-Sectional-Sofa-Set-With-Side-Tables.jpg?impolicy=mediumlow",
         saleStart: "101249",
         name: "OVIOS 6-piece Rattan Wicker Patio Furniture Set Swivel Rocking",
         star:"⭐⭐⭐⭐⭐ 176",
    },
    {
        Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/5d8f356c6dbb86d80fdd5ffe6ecf936c382eeb44/2%22-Cordless-Faux-Wood-Blind---Smooth-White.jpg?impolicy=mediumlow",
        saleStart: "399986",
        name: "2 Cordless Faux Wood Blind - Smooth White",
        star:"⭐⭐⭐⭐⭐ 176",
   },
   {
    Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/e688b56a7d3470588740b69f756e8736b11d0e6c/Lotus-%26-Windoware%2C-1%22-Cordless-Vinyl-Blind.jpg?impolicy=mediumlow",
    saleStart: "176278",
    name: "1 Cordless Vinyl Mini Blind - White Wicker Sectional",
    star:"⭐⭐⭐⭐⭐ 186",
   },
   {
    Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/e8345b4a66e8d37840e1b7743eb7b6716751af61/Ovios-6-piece-Outdoor-High-back-Wicker-Sectional-Set-With-Table.jpg?impolicy=mediumlow",
    saleStart: "45678",
    name: "OVIOS 6-piece Outdoor High-back Wicker Sectional Set With Table",
    star:"⭐⭐⭐⭐⭐ 32",
   },
]

const recent=[
    {
         Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/e688b56a7d3470588740b69f756e8736b11d0e6c/Lotus-%26-Windoware%2C-1%22-Cordless-Vinyl-Blind.jpg?impolicy=mediumlow",
         saleStart: "87644",
         name: "1 Cordless Vinyl Mini Blind - White",
         star:"⭐⭐⭐⭐⭐ 186",
    },
    {
        Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/91b602ac2246e49568a2f7f4e95b99574492f875/Ovios-Patio-Furniture-Sets-6-piece-Rattan-Wicker-Rocking-Swivel-Chair-Sectional-Sofa-Set-With-Side-Tables.jpg?impolicy=mediumlow",
        saleStart: "34578",
        name: "OVIOS 6-piece Rattan Wicker Patio Furniture Set Swivel Rocking",
        star:"⭐⭐⭐⭐⭐ 176",
   },
   {
    Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/8b2be751946f252dd1ee936b13f35383132e6a36/SAFAVIEH-Courtyard-Charmaine-Indoor--Outdoor-Waterproof-Area-Rug.jpg?impolicy=mediumlow",
    saleStart: "86547",
    name: "SAFAVIEH Courtyard Charmaine Indoor/ Outdoor Waterproof Area",
    star:"⭐⭐⭐⭐⭐ 2567",
   },
   {
    Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/693943a957d7a96672e5677e05a2047eadbe456f/Costway-8PCS-Rattan-Patio-Furniture-Set-Cushioned-Sofa-Chair-Coffee.jpg?impolicy=mediumlow",
    saleStart: "34578",
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
        array.forEach(function(element){

        var card=document.createElement("div");

        var img=document.createElement("img");
        var addtocart=document.createElement("button");
        var psale=document.createElement("p");
        var pname=document.createElement("p");
        var pstar=document.createElement("p");

        img.setAttribute("src",element.Image);
        addtocart.textContent="Add to Cart";
        addtocart.addEventListener("click",function(){
            //add this item to local storage
            //var obj={
            console.log("Hiii")
            //}
           // push to local
        })


        psale.textContent="INR "+element.saleStart;
        pname.textContent=element.name;
        pstar.textContent=element.star;
        card.append(img,addtocart,psale,pname,pstar);
        thingsdiv.append(card);       
    });
  }
  
const products = [
    {
        img: "https://ak1.ostkcdn.com/images/products/is/images/direct/5815823c37c7ef667df605e6d6f99c047026c0e0/Modern-3-Seat-Sofa-Removable-Cushions-Couch-for-Living-Room-with-2-Throw-Pillows-and-Side-Hidden-Storage-Bags.jpg?imwidth=480&impolicy=medium",
        id: 1,
        originalPrice: 32555,
        category: "sofa",
        name: "Modern 3-Seat Sofa Removable Cushions Couch for Living Room with 2 Throw Pillows and Side Hidden Storage Bags",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero."
      },
      {
        img: "https://ak1.ostkcdn.com/images/products/is/images/direct/0d0d159f8dc5bfb87feabe1ab02aec1c1dde03e6/64-inch-living-room-folding-sofa-Velvet-Peach-sofa-bed.jpg?imwidth=480&impolicy=medium",
        id: 2,
        originalPrice: 43102,
        category: "sofa",
        name: "63 inch living room folding sofa Velvet Peach sofa bed",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero."
      },
      {
        img: "https://ak1.ostkcdn.com/images/products/is/images/direct/6e981b31c9f44845e0fa960e2d638d2ec5898085/Serta-Palisades-Upholstered-61%22-Sofas-for-Living-Room-Modern-Design-Couch%2C-Straight-Arms%2C-Soft-Fabric-Upholstery.jpg?imwidth=480&impolicy=medium",
        id: 3,
        originalPrice: 36434,
        category: "sofa",
        name: "Serta Palisades Upholstered 61 Sofas for Living Room Modern Design Couch, Straight Arms, Soft Fabric Upholstery",
        description:"Lorem ipsum dolo r sit amet, consectetur adipiscing elit. Phasellus consequat jus turpis, non hendrerit metus. Pellentesque vel interdum libero."
      },
];

//var prodcut=JSON.parse(localStorage.getItem("keyname")) || [];
var emptydiv=document.querySelector("#empty");
var cartitem=document.querySelector("#cartitems");
if(products.length!==0){

    emptydiv.remove(); 

    products.forEach(function(element,index){
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
          Cprice.textContent="INR "+element.originalPrice;
          
          Cremovebtn.textContent="Remove";
          Cremovebtn.addEventListener("click",function(){
              //remove item from local storage 
              console.log("removed");             
          })
          Csavebtn.textContent="Save For Later";
      
          imgdiv.append(Cimg);
          namePricediv.append(Cname,Cprice,Cremovebtn,Csavebtn);
          carddiv.append(imgdiv,namePricediv);
          cartitem.append(carddiv)
     
    });
}

//total items and cart total functionality

//var cartarrLS=JSON.parse(localStorage.getItem("keyName")) || [];

var totalitems=document.querySelector("#totalitems");
totalitems.textContent=products.length;
var total=0;
for(var i=0;i<products.length;i++)
{
    total=total+ +products[i].originalPrice;
}
//console.log(total)
var totals=document.querySelector("#total");
totals.textContent=total;

var promocodebtn=document.querySelector(".promocode+button");

promocodebtn.addEventListener("click",function(){
    var promocodeinput=document.querySelector(".promocode");
    if(promocodeinput.value ==="OverStock10")
    {
        //giving 10% static discount        
        //console.log((total*0.1).toFixed(2));
        var carttotal=document.querySelector("#cartTotal");
        carttotal.textContent=(total*0.1).toFixed(2);
    }
});


//Scroll to top of the page 

var scrolltop=document.querySelector(".arrow")
scrolltop.addEventListener("click",function(){
     //console.log("Hiii");
     window.scrollTo({top: 0, behavior: 'smooth'});
});





