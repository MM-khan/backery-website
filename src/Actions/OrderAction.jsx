import axios from "axios"

export const orderAction=(token,subtotal)=>async(dispatch,getState)=>{
    dispatch({type:'PLACE_ORDER_REQUEST'})
    const currentUser = getState().userLoginReducer.currentUser;
    const cartitems = getState().cartReducer.cartitems
    try {
        const response =await axios.post("/api/orders", {token,subtotal,cartitems,currentUser})
        dispatch({type:'PLACE_ORDER_SUCCESS'});
        console.log(response);
    } catch (error) {
        dispatch({type:'PLACE_ORDER_FAILED'})
    }
}




export const userOrderAction =()=>async (dispatch,getState)=>{

    dispatch({type:'USER_ORDER_REQUEST'});
    const currentUser = getState().userLoginReducer.currentUser
    try {
        const response = await axios.post("/api/getorder", {userid:currentUser._id});
        console.log(response);
        dispatch({type:'USER_ORDER_SUCCESS'})
    } catch (error) {
        dispatch({type:'USER_ORDER_FAILED',payload:error})
    }
}