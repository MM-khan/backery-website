import axios from "axios";

export const getAllCakes=()=> async dispatch=>{
    dispatch({type:"GET_CAKES_REQUEST"})

    try {
        const response =await axios.get('/cakeapi/cakedata')
        console.log(response);
        dispatch({type:"GET_CAKES_SUCCESS",payload:response.data})
    } catch (error) {
        dispatch({type:"GET_CAKES_FAILED",payload:error})
    }
}