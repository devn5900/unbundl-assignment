 const chocoData= [
    {
      "id": "1a2b3c4d",
      "image": "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "name": "Lotte Choco Pie 28 g (12 pcs)",
      "price": 2.99
    },
    {
      "id": "5e6f7g8h",
      "image": "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    
      "name": "Cadbury Dairy Milk Fruit & Nut Chocolate 36 g",
      "price": 3.49
    },
    {
      "id": "9i0j1k2l",
      "image": "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "name": "Cadbury Dairy Milk Oreo Chunks Lickables Chocolate 20 g",
      "price": 2.79
    },
    {
      "id": "3m4n5o6p",
      "image": "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "name": "Amul Choco Minis 250 g",
      "price": 4.99
    },
    {
      "id": "q7r8s9t0",
      "image": "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    
      "name": "Cadbury Dairy Milk Crackle Chocolate 36 g",
      "price": 3.29
    },
    {
      "id": "1u2v3w4x",
      "image": "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",   
      "name": "Cadbury Dairy Milk Family Pack Chocolate 130 g",
      "price": 5.99
    },
    {
      "id": "5y6z7a8b9",
      "image": "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "name": "Cadbury Dairy Milk Chocolate 24 g",
      "price": 2.49
    },
    {
      "id": "1c2d3e4f5g6h7i8j9k0l",
      "image": "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
       "name": "Snickers Delicious & Nutritious Roasted Peanuts, Nougat and Caramel Delight 22g (Pack of 32)",
      "price": 1.79
    },
    {
      "id": "9a8b7c6d5e4f3g2h1i",
      "image": "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "name": "Cadbury Celebration Chocolate 178.80 g",
      "price": 4.29
    }
  ]
  const prodContainer= document.getElementById("prodContainer");
  const totalProd= document.getElementById("totalProd");
  const cartTotal=document.getElementById("cartTotal");
  window.addEventListener("load",()=>{
    const data= JSON.parse(localStorage.getItem("data"));
    const cart= JSON.parse(localStorage.getItem("cart"));
    if(!data||data?.length<=0){
        localStorage.setItem("data",JSON.stringify(chocoData))
    }
    if(!cart){
        localStorage.setItem("cart",JSON.stringify([]))
    }
    displayData();
    updateTotalProd();
  })

  const displayData=()=>{
    const data= JSON.parse(localStorage.getItem("data"))||[]
    const filterData= filterOutCartData(data);
    console.log(filterData)
    prodContainer.innerHTML="";
   const cards= filterData?.map((el)=>{
        return generateCards(el);
    })
    prodContainer.append(...cards);
    updateTotalCart();

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
        if(!item?.quantity){
            const cartBtn= document.createElement("button");
            cartBtn.innerText="Add to cart"
            cartBtn.addEventListener("click",()=>addToCart(item.id))
            btnDiv = cartBtn;
        }else{
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
        }
            
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
  const addToCart=(id)=>{
        let cart= JSON.parse(localStorage.getItem("cart"))||[];
        let data= JSON.parse(localStorage.getItem("data"))||[];

        cart= [...cart,{...data.find((el)=>el.id==id),quantity:1}];
        localStorage.setItem("cart",JSON.stringify(cart));
        displayData();
        updateTotalCart();
  }


  const filterOutCartData= (data)=>{
    let cart= JSON.parse(localStorage.getItem("cart"))||[];
    const filterData= data.map((el)=>{
        const cartData= cart.find((ele)=>ele.id==el.id);
        if(cartData){
            return cartData
        }else{
            return el;
        }
    })
    return filterData;
  }

  const updateTotalProd=()=>{
    let data= JSON.parse(localStorage.getItem("data"))||[];
    totalProd.innerText=`${data.length} products`
  }

  const updateTotalCart=()=>{
    let cart= JSON.parse(localStorage.getItem("cart"))||[];
    cartTotal.innerText=`${cart.length}`
  }



  document.getElementById("redirectCart").addEventListener("click",()=>{
    window.location.href="/cart.html"
  })