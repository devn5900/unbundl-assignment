

export const filterData=(data,cart)=>{

   return data.map((el)=>{
        const isCart= cart.find((ele)=>ele.id==el.id)
        if(isCart)return isCart;
        return el;
    })

}

export const totalPrice=(cart)=>{
    let price=0;

    cart.forEach(el => {
        price+=Number(el.price)*el.quantity
    });
    return price;
}