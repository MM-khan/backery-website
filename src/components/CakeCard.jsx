import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from "react-redux"
import { addToCart } from '../Actions/CartAction';

export default function CakeCard({cake}) {
    const [quantity, setQuantity] = useState(1);
    const [varient, setVarient] = useState("small");

    const [show, setShow] = useState(false);
    const handleShow = () => { setShow(true) }
    const handleClose = () => { setShow(false) }

    const dispatch = useDispatch()
     function addtocart() {
        dispatch(addToCart(cake,quantity,varient))
    }
    return (
        <>
            <div className="card my-3 shadow-lg bg-white rounded" style={{ width: "17rem" }}>
                <div onClick={handleShow}>
                    <h5 className="card-title text-center">{cake.name}</h5>
                    <img className="card-img img-fluid" src={cake.img} alt="Cakes" style={{ width: "270px", height: 200 }} />
                </div>
                <div className="card-body">
                    <div className="d-flex">
                        <div className="w-100">
                            Varients :
                            <select className='form-control p-0 mt-1' value={varient} onChange={(e) => { setVarient(e.target.value) }}>
                                {cake.varients.map(varient => {
                                    return <option value={varient}>{varient}</option>
                                })}
                            </select>
                        </div>
                        <div className="w-100">
                            Quantity : <br />
                            <select className='form-control ms-1 p-0 mt-1' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                                {[...Array(5).keys()].map((x, i) => {
                                    return <option value={i + 1}>{i + 1}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="d-flex mt-3">
                        <div className="w-100">
                            <h5>Price : {cake.prices[0][varient] * quantity}</h5>
                        </div>
                        <div className="w-100">
                            <button className="btn-sm btn-danger" onClick={addtocart}>ADD TO CART</button>

                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show}>
                <Modal.Header onClick={handleClose} closeButton>
                    <Modal.Title className='text-danger'>{cake.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img className='img-fluid' src={cake.img} alt="cake" style={{ width: 470, height: 250 }} />
                    <h5 className='my-2'>About Cake Quality</h5>
                    <p>{cake.discreption}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
