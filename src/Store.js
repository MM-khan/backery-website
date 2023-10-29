import {combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {getAllCakesReducer} from "./Reducers/CakeReducer";
import {cartReducer} from './Reducers/cartReducer';
import { userRegisterReducer } from "./Reducers/UserReducer";
import { createStore } from 'redux';
import { userLoginReducer } from "./Reducers/UserReducer";
import { placeOrderReducer, userOrderReducer } from "./Reducers/OrderReducer";

const finalReducer= combineReducers({
    getAllCakesReducer:getAllCakesReducer,
    cartReducer : cartReducer,
    userRegisterReducer:userRegisterReducer,
    userLoginReducer:userLoginReducer,
    placeOrderReducer:placeOrderReducer,
    userOrderReducer:userOrderReducer
})
const cartitems = localStorage.getItem('cartitems')? JSON.parse(localStorage.getItem('cartitems')):[]
const currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')):null

const initialState={
    cartReducer:{
        cartitems:cartitems
    },
    userLoginReducer:{
        currentUser:currentUser
    }
};
 const composeenharnces = composeWithDevTools({});

 const store = createStore(finalReducer,initialState,composeenharnces(applyMiddleware(thunk)))

 export default store
