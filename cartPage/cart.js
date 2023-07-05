const things=[
    {
         Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/91b602ac2246e49568a2f7f4e95b99574492f875/Ovios-Patio-Furniture-Sets-6-piece-Rattan-Wicker-Rocking-Swivel-Chair-Sectional-Sofa-Set-With-Side-Tables.jpg?impolicy=mediumlow",
         saleStart: "Sale Starts at $1,012.49",
         name: "OVIOS 6-piece Rattan Wicker Patio Furniture Set Swivel Rocking",
         star:"⭐⭐⭐⭐⭐ 176",
    },
    {
        Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/5d8f356c6dbb86d80fdd5ffe6ecf936c382eeb44/2%22-Cordless-Faux-Wood-Blind---Smooth-White.jpg?impolicy=mediumlow",
        saleStart: "Sale Starts at $39.99",
        name: "2 Cordless Faux Wood Blind - Smooth White",
        star:"⭐⭐⭐⭐⭐ 176",
   },
   {
    Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/e688b56a7d3470588740b69f756e8736b11d0e6c/Lotus-%26-Windoware%2C-1%22-Cordless-Vinyl-Blind.jpg?impolicy=mediumlow",
    saleStart: "Sale Starts at $17.62",
    name: "1 Cordless Vinyl Mini Blind - White",
    star:"⭐⭐⭐⭐⭐ 186",
   },
   {
    Image: "https://ak1.ostkcdn.com/images/products/is/images/direct/e8345b4a66e8d37840e1b7743eb7b6716751af61/Ovios-6-piece-Outdoor-High-back-Wicker-Sectional-Set-With-Table.jpg?impolicy=mediumlow",
    saleStart: "Sale Starts at $967.04",
    name: "OVIOS 6-piece Outdoor High-back Wicker Sectional Set With Table",
    star:"⭐⭐⭐⭐⭐ 32",
   },
]

    let thingsdiv=document.querySelector("#things");
    addthings(things);

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
        psale.textContent=element.saleStart;
        pname.textContent=element.name;
        pstar.textContent=element.star;
        card.append(img,addtocart,psale,pname,pstar);
        thingsdiv.append(card);
        
    });
  }
  




