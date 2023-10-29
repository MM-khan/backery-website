import {useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {userOrderAction} from "../Actions/OrderAction"
import Navbar from '../components/Navbar';

export default function Orders() {
    const orderState = useSelector(state => state.userOrderReducer);
    const {orderData} = orderState
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(userOrderAction())
    },[])
  return (
    <>
    <Navbar />
        <div className="container">
            <h1>My Orders</h1>
            <hr />
            <div className="row">
                {orderData && orderData.map(order=>{
                return <div className="col-md-8">
                    <div className="d-flex">
                        <div>
                            {order.orderItem.map(item=>{
                                return <div>
                                    <h2>Items</h2>
                                <h3>{item.name} [{item.varient}] * {item.quantity} = {item.price} </h3>
                                </div>
                            })}
                        </div>
                        <div>
                            <h2>Address</h2>
                            <p>Street : {order.shippingAddress.street} </p>
                            <p>Country : {order.shippingAddress.Country} </p>
                            <p>City : {order.shippingAddress.city} </p>
                            <p>Postcode : {order.shippingAddress.postCode} </p>
                        </div>
                        <div>
                            <h2>Order Info</h2>
                            <p>Order-Amount : {order.orderAmount}</p>
                            <p>Date : {order.createdAt.substring(0,10)}</p>
                        </div>
                    </div>
                </div>
                })}
            </div>
        </div>
    </>
  )
}
