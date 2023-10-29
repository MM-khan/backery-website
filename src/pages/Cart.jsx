import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {addToCart} from "../Actions/CartAction";
import {deleteFromCart} from "../Actions/CartAction"
import Navbar from '../components/Navbar';
import CheckOut from '../components/CheckOut';

export default function Cart() {
    const dispatch = useDispatch()
    const cartstate = useSelector(state => state.cartReducer);
    const cartitems = cartstate.cartitems;
    const subtotal = cartitems.reduce((x,item)=> x+item.price , 0)
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row ">
                        <h1 className='text-center text-danger my-2'>My Cart</h1>
                    <div className="col-md-6">
                        {cartitems.map(item => {
                            return <div className="d-flex">
                                <div className='text-start m-1 w-100'>
                                    <h5>{item.name} [{item.varient}]</h5>
                                    <div>Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</div>
                                    <div className='d-flex'>Quantity :
                                        <p className='text-success me-2' onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.varient))}}>+</p>
                                        <p>{item.quantity}</p>
                                        <p className='text-danger ms-2' onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient))}}>-</p>
                                    </div>
                                    <hr />
                                </div>
                                <div className='m-1 w-100'>
                                    <img src={item.img} alt="cakes" style={{width:150 ,height:100}}/>
                                </div>
                                <div className='m-1 w-100'><div className="btn btn-danger text-light mt-4" onClick={()=>{dispatch(deleteFromCart(item))}}>Cancel</div></div>
                            </div>

                        })}
                    </div>
                    <div className="col-md-6">
                        <div className='fs-3 text-danger'>SubTotal : {subtotal} Rs/-</div>
                        <CheckOut subtotal={subtotal}/>
                    </div>
                </div>
            </div>
        </>
    )
}
