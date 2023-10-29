export const cartReducer=(state={cartitems:[]},action)=>{
    switch (action.type){
        case 'ADD_TO_CART' :
        const alreadyExit = state.cartitems.find(item=>item.id === action.payload.id)
        if(alreadyExit){
            return{
                ...state ,
                cartitems:state.cartitems.map(item=>item.id === action.payload.id ? action.payload :item)
            }
        }else{   
        return{
        ...state,
        cartitems:[...state.cartitems, action.payload]
        }
    }
    case 'REMOVE_FROM_CART' : return{
        ...state,
        cartitems: state.cartitems.filter(item=> item.id !== action.payload.id)
    }
        default : return state
    }

}