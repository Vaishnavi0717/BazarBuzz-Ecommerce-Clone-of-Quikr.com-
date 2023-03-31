








let addedProduct = JSON.parse(localStorage.getItem("addData")) || [];

let tbody = document.getElementById("tbody")

showData(addedProduct);

function showData(arr) {
    let x = 0;
    tbody.innerHTML = null;
    arr.forEach((el, index) => {
        let tr = document.createElement("tr");

        let id = document.createElement("td");
        id.innerText = ++x;

        let brand = document.createElement("td")
        brand.innerText = el.title;

        let price = document.createElement("td");
        price.innerText = el.price;

        let Delete = document.createElement("td");
        Delete.innerText = "DELETE";
        Delete.setAttribute("id", "delete");

        let stock = document.createElement("td");
        stock.innerText = "In Stock";


        Delete.addEventListener("click", function () {
            arr.splice(index, 1)
            localStorage.setItem("addData", JSON.stringify(arr));
            showData(arr);
        })
        tr.append(id, brand, price, Delete, stock);

        tbody.append(tr);

    });
}


let searchBar = document.getElementById("searchBar");
            let searchBtn = document.getElementById("searchBtn");
          
            searchBtn.addEventListener("click", () => {
              if (searchBar.value == "mobile") {
                window.location.href = "/Day4/products.html";
              } else if (searchBar.value == "iphone") {
                window.location.href = "/Day4/products.html";
              } else if (searchBar.value == "Phone") {
                window.location.href = "/Day4/products.html";
              } else if (searchBar.value == "phone") {
                window.location.href = "/Day4/products.html";
              } else if (searchBar.value == "samsung") {
                window.location.href = "/Day4/products.html";
              } else if (searchBar.value == "Samsung") {
                window.location.href = "/Day4/products.html";
              } else if (searchBar.value == "Sofa set") {
                window.location.href = "/Day4/products.html";
              } else if (searchBar.value == "sofa sets") {
                window.location.href = "/Day4/products.html";
              } else if (searchBar.value == "Sofa sets") {
                window.location.href = "/Day4/products.html";
              } else if (searchBar.value == "Mobiles") {
                window.location.href = "/Day4/products.html";
              } else if (searchBar.value == "mobiles") {
                window.location.href = "/Day4/products.html";
              } else {
                window.location.href = "none.html";
              }
            });