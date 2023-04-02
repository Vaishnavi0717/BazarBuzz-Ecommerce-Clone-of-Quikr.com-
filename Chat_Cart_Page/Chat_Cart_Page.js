
  
    let container=document.getElementById("cart-container")
    let cardata=JSON.parse(localStorage.getItem("cart"));
   
    let lsdata=JSON.parse(localStorage.getItem("unknown"))||[]
    let price1=document.getElementById("cart-total");
    console.log(cardata)
   console.log(cardata)
    function shopdata(data){
      container.innerHTML=null
      data.forEach((element,index)=>{
        let card=document.createElement("div");
        card.setAttribute("id","mode")
        let img=document.createElement("img");
        img.setAttribute("src",element.image);
 

       
        let brand=document.createElement("h2");
        brand.innerText=(element.title);
       
        let price=document.createElement("h3")
        price.innerText="₹"+" "+element.price;
       
        
        let increment=document.createElement("button")
        increment.innerText="+";
        let quantity=document.createElement("p")
        quantity.innerText=element.quantity
        let decrement=document.createElement("button")
        decrement.innerText="-"
        let d=document.createElement("div")
        d.setAttribute("id","button")
        increment.addEventListener("click",()=>{
          
          quantity.innerText++
          element.quantity++;
          cardata[index] = element;
          localStorage.setItem("cart",JSON.stringify(cardata));
          shopdata(cardata);

        });
        decrement.addEventListener("click",()=>{
        if(element.quantity > 1){
            quantity.innerText--
            element.quantity--;
            cardata[index] = element;
            localStorage.setItem("cart",JSON.stringify(cardata));
            shopdata(cardata)
        }
        })
       
        let remove=document.createElement("button");
        d.append(decrement,quantity,increment)
        remove.setAttribute("id","remove")
        remove.innerText="Remove"
       remove.addEventListener("click",()=>{
        lsdata.push(element);
        
        localStorage.setItem("unknown",JSON.stringify(lsdata));
        cardata.splice(index,1);

        localStorage.setItem("cart",JSON.stringify(cardata));
        document.getElementById("item").innerText=cardata.length;
        if(cardata.length===0){
    price1.innerText=0
   }
        shopdata(cardata)
       })
        
     
        let total=0;
        cardata.forEach((element,index)=>{
          
          total+=parseInt((element.price))*element.quantity
          price1.innerText= total;
        })
       let text=document.createElement("p")
       text.innerText="When your web visitors are unsure about which product to purchase, they look for suggestions what to buy. They’re often swayed to buy a product with the highest number of positive reviews. But there are other ways to sneak social proof into your product descriptions"
        let div1=document.createElement("div");
        div1.setAttribute("id","data")
        div1.append(brand,price,text,d,remove)


       
        card.append(img,div1);
        container.append(card)


      })
    }
    shopdata(cardata)

  
  
    let to=document.getElementById("item")
    to.innerText=cardata.length;
    document.getElementById("buy").addEventListener("click",()=>{
      // let order
      localStorage.setItem("order",JSON.stringify( cardata))
      window.location.pathname="address.html"

      localStorage.removeItem("cart")
    })
    let coupon=document.getElementById("coupne");
    let n=1
    coupon.addEventListener("click",()=>{
      
      if(price1.innerText>=100000 ){
        if(n==1){
          price1.innerText=Number(Math.ceil(price1.innerText*0.90));
        n=2
        Swal.fire({
            position: "centre",
            icon: "success",
            title: "Coupon Applied Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }else{
          // alert("Coupon used only once at a time")
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Coupon used only once at a time'
          })
        }
       
       
      }else{
        let x=100000-Number(price1.innerText);
        // alert(`you have to shop more for get coupon that is ${x}`)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `you have to shop more for get coupon that is ${x}`
          })
          setTimeout(()=>{
            window.location.href="furniture.html"
          },3000)
      }
    })



