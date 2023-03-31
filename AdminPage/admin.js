const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})






//..................

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