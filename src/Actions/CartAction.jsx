export const addToCart=(cake,quantity,varient)=>(dispatch,getState)=>{

    const cartItem={
        name : cake.name,
        id :cake.id,
        img:cake.img,
        prices:cake.prices,
        quantity:Number(quantity),
        varient:varient,
        price:cake.prices[0][varient] * quantity,
    }
    if(cartItem.quantity >5){
        alert("You Can Not Add More Then 6 Items.")
    }else{
        if(cartItem.quantity<1){
            dispatch({type:'REMOVE_FROM_CART', payload:cake}) 
        }else{
    dispatch({type:"ADD_TO_CART",payload:cartItem});
        }
    }
    const cartitems = getState().cartReducer.cartitems
    localStorage.setItem('cartitems', JSON.stringify(cartitems))
};

export const deleteFromCart = (cake)=>(dispatch,getState)=>{
    dispatch({type:'REMOVE_FROM_CART', payload:cake})
    const cartitems = getState().cartReducer.cartitems
    localStorage.setItem('cartitems', JSON.stringify(cartitems))
}