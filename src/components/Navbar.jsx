import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
// import { cartReducer } from '../Reducers/cartReducer';


export default function Navbar() {

    const cartState = useSelector(state=>state.cartReducer);
    const userState = useSelector(state=>state.userLoginReducer);
    const {currentUser} = userState
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-lg p-3 mb-5 bg-white rounded">
                <div className="container-fluid">
                <h1 className="navbar-brand text-danger fs-5" href="/">Cake Bekary </h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-danger" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-danger" to="/signup">Sign Up</Link>
                        </li>

                        {currentUser ? (
                            <div class="dropdown">
                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                              {currentUser.name}
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                              <li><a class="dropdown-item" href="#">Orders</a></li>
                              <li><a class="dropdown-item" href="#">LogOut</a></li>
                            </ul>
                          </div>) :(<li className="nav-item">
                            <Link className="nav-link text-danger" to="/login">Log In</Link>
                        </li>)}
                        <li className="nav-item">
                            <Link className="nav-link text-danger" to="/order">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-danger" to="/cart">Cart {cartState.cartitems.length}</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    )
}
