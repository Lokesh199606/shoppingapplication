import React from "react";
import "./navBar.css";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

    const cartHandler = () => {
        navigate('/cart');
    }

    const orderHandler = () => {
        navigate('/orders');
    }

    const homeHandler = () => {
        navigate('/');
    }

    const checkoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <div>
            <ul>
                <li><a className="active" onClick={homeHandler}>Home</a></li>
                <li><a onClick={orderHandler}>My Orders</a></li>
                <li><a onClick={cartHandler}>Cart</a></li>
                <li><a onClick={checkoutHandler}>Checkout</a></li>
            </ul>
        </div>
        )
}

export default NavBar;