import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {useDispatch} from "react-redux"
import { orderAction } from '../Actions/OrderAction';

export default function CheckOut({subtotal}) {
    const dispatch = useDispatch()

    function tokenHandler(token){
        console.log(token);
        dispatch(orderAction(token,subtotal))
    }
  return (
    <>
        <StripeCheckout
            amount={subtotal *100}
            shippingAddress
            token={tokenHandler}
            stripeKey='pk_test_51NiXYRCo6uu3U8wiIgxgv1kt9AKsaTtSwckxtOquSw5y54wzbqFge9MXWlnqBbo5ZY10DcHWhtpg4rVhjttXZAgL00OtJaydP9'
        >
            <button className='btn btn-danger text-light'>Pay Now</button>
        </StripeCheckout>
    
    </>
  )
}
