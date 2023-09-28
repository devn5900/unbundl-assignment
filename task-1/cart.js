
const cartContainer= document.getElementById("dispCart");
const cartTotalPrice= document.getElementById("cartTotalPrice");
window.addEventListener("load",()=>{
    displayData();
    updateTotalCart();
})

const displayData=()=>{
    const cart= JSON.parse(localStorage.getItem("cart"))||[];
    cartContainer.innerHTML="";
    const cards= cart?.map((el)=>{
        return generateCards(el);
    })
    cartContainer.append(...cards);
    updateTotalCart();
    updateTotalPriceCart();
}

const generateCards=(item)=>{
    const mainDiv= document.createElement("div");
    const imgDiv= document.createElement("div");
    const img= document.createElement("img");
    img.src=item.image;
    imgDiv.append(img);

    const infoDiv= document.createElement("div");
    const title= document.createElement("p");
    title.innerText=item.name.split(" ").splice(0,4).join(" ");
    const price= document.createElement("p");
    price.innerText= `₹ ${item.price}`
    infoDiv.append(title,price)
    let btnDiv=null;
     const cartDiv= document.createElement("div");
     cartDiv.setAttribute("class","cartBtn")
     const decrementBtn= document.createElement("button");
     decrementBtn.innerText="-"
     decrementBtn.addEventListener("click",()=>decrementCartQuantity(item.id))
     const span= document.createElement("span");
     span.innerText=item.quantity;
     const incrementBtn= document.createElement("button");
     incrementBtn.innerText="+"
     incrementBtn.addEventListener("click",()=>incrementCartQuantity(item.id))
     cartDiv.append(decrementBtn,span,incrementBtn)
     btnDiv= cartDiv
        
    mainDiv.append(imgDiv,infoDiv,btnDiv)
    return mainDiv;
}

const decrementCartQuantity=(id)=>{
    let cart= JSON.parse(localStorage.getItem("cart"))||[];
    cart= cart.filter((el)=>{
       if(el.id==id){
            if(el.quantity==1){
                return null;
            }else{
                el.quantity-=1;
                return el;
            }
       }else{
        return el;
       }
    })
    localStorage.setItem("cart",JSON.stringify(cart));
    displayData();
    updateTotalCart();
  }
const incrementCartQuantity=(id)=>{
    let cart= JSON.parse(localStorage.getItem("cart"))||[];
    cart= cart.map((el)=>{
        if(el.id==id){
            if(el.quantity<8)
            el.quantity+=1;
            return el;
        }else{
            return el;
        }
    })
    localStorage.setItem("cart",JSON.stringify(cart));
    displayData();
    updateTotalCart();
}
const updateTotalCart=()=>{
    let cart= JSON.parse(localStorage.getItem("cart"))||[];
    cartTotal.innerText=`${cart.length}`
  }

  const updateTotalPriceCart=()=>{
    let cart= JSON.parse(localStorage.getItem("cart"))||[];
    let total=0;
    cart.forEach((el)=>{
        total+=(Number(el.price)*Number(el.quantity))
    })
    cartTotalPrice.innerText=`(${total.toFixed(2)})`
    console.log(total)
  }