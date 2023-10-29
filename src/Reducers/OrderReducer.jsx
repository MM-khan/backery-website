export const placeOrderReducer=(state={}, action)=>{

    switch(action.type){
        case 'PLACE_ORDER_REQUEST' : return{
            loading:true
        }
        case 'PLACE_ORDER_SUCCESS' : return{
            loading:false,
            success:true
        }
        case 'PLACE_ORDER_FAILED' : return{
            loading:false,
            error:action.payload
        }
        default : return state
    }
}


export const userOrderReducer=(state={order:[]}, action)=>{

    switch(action.type){
        case 'USER_ORDER_REQUEST' : return{
            loading:true,
            ...state
        }
        case 'USER_ORDER_SUCCESS' : return{
            loading:false,
            order:action.payload
        }
        case 'USER_ORDER_FAILED' : return{
            loading:false,
            error:action.payload
        }
        default : return state
    }
}
