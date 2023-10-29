export const getAllCakesReducer = (state={},action)=>{
    switch(action.type){
        case "GET_CAKES_REQUEST" :return {
            ...state
        }
        case "GET_CAKES_SUCCESS" : return{
            cakes : action.payload
        }
        case "GET_CAKES_FAILED" : return {
            error : action.payload
        }
        default : return{
            state
        }
    }
}