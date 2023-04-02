let cont = document.getElementById("container");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let item = document.getElementById("item");
let amount = document.getElementById("amount");
let totalAmount = document.getElementById("total-amount");
let productview = JSON.parse(localStorage.getItem("view")) || [];

displayData(cart)
function displayData(data)
{
cont.innerHTML = null;
item.textContent = cart.length;
data.forEach((product,index)=> {
    let card = document.createElement("div");
    let img = document.createElement("img");
    let brand = document.createElement("h4");
    let title = document.createElement("p");
    let price = document.createElement("h5");
    let btnDiv = document.createElement("div");
    let btmDiv = document.createElement('div');
    let inc = document.createElement("button");
    let dec = document.createElement("button");
    let quantity = document.createElement("span")
    let div = document.createElement("div");
    let remove = document.createElement("h5");
    
    img.src = product.image;
    brand.textContent = product.brand;
    title.textContent = product.title;
    price.textContent = product.prices;
    inc.textContent = "+";
    dec.textContent = "-";
    quantity.textContent = product.quantity;
    remove.textContent = "Remove"

inc.addEventListener("click",()=>{
product.quantity++;
displayData(data);
localStorage.setItem("cart",JSON.stringify(data))
})

dec.addEventListener("click",()=>{
if(product.quantity > 1)
{
    product.quantity--;
    displayData(data);
    localStorage.setItem("cart",JSON.stringify(data));
}
})

remove.addEventListener("click",()=>{
data.splice(index,1);
localStorage.setItem("cart",JSON.stringify(data));
displayData(data)
})
    
img.addEventListener("click",()=>{
productview.push(product).target;
localStorage.setItem("view",JSON.stringify(productview));
location.href = "productview.html"
})


cont.append(card);
    card.append(div,btmDiv)
    div.append(img,btnDiv)
    btmDiv.append(inc,quantity,dec,remove)
    btnDiv.append(brand,title,price)
   
});
let sum = 0;
for(let a= 0; a < cart.length; a++)
{
    sum += cart[a].prices * cart[a].quantity;
}
amount.textContent = sum;
totalAmount.textContent = sum;
}

let searchInp = document.getElementById("search")
let searchbtn = document.getElementById("searchbtn");
searchbtn.addEventListener("click",()=> {
if(searchInp.value === "")return false
else{
   let filteredData = cart.filter((product)=> {
    if(product.title.toUpperCase().includes(searchInp.value.toUpperCase()))
    {
        return true;
    }
    else
    {
        return false;
    }
})
displayData(filteredData) 
}

})


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}