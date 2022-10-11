import React, { useState } from "react";
import NavBar from "../navigation/navBar";
import "./checkout.css";
import { useDispatch, useSelector } from 'react-redux';
import { addToOrders } from '../reducers/cartSlice';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const [checkoutFlag, setCheckoutFlag] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart)

    const checkoutHandler = (event) => {
        if (event.target.checked) {
            setCheckoutFlag(true);
        }
        else {
            setCheckoutFlag(false);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addToOrders(cart));
        navigate('/orders');
    }

    return (
        <>
            <NavBar />
            <div className="row">
                <div className="col-75">
                    <div className="container">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-50">
                                    <h3>Billing Address</h3>
                                    <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="Lokesh Reddy" />
                                    <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                                    <input type="text" id="email" name="email" placeholder="lokesh@gmail.com" />
                                    <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                    <input type="text" id="adr" name="address" placeholder="Anantapur" />
                                    <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                                    <input type="text" id="city" name="city" placeholder="Anantapur" />
                                    <div className="row">
                                        <div className="col-50">
                                            <label htmlFor="state">State</label>
                                            <input type="text" id="state" name="state" placeholder="Andhra Pradesh" />
                                        </div>
                                        <div className="col-50">
                                            <label htmlFor="zip">Zip</label>
                                            <input type="text" id="zip" name="zip" placeholder="555000" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-50">
                                    <h3>Payment</h3>
                                    <label htmlFor="fname">Accepted Cards</label>
                                    <div className="icon-container">
                                        <i className="fa fa-cc-visa" style={{ color: 'navy', marginRight:'.5rem' }} ></i>
                                        <i className="fa fa-cc-amex" style={{ color: 'blue', marginRight: '.5rem' }} ></i>
                                        <i className="fa fa-cc-mastercard" style={{ color: 'red', marginRight: '.5rem' }}></i>
                                        <i className="fa fa-cc-discover" style={{ color: 'orange', marginRight: '.5rem' }}></i>
                                        <input type="checkbox" checked={checkoutFlag} name="cashondelivery" onChange={(e) => checkoutHandler(e)} /> <span style={{ fontSize: "10px" }}>Cash On Delivery</span>
                                    </div>
                                    {!checkoutFlag && <div>
                                    <label htmlFor="cname">Name on Card</label>
                                    <input type="text" id="cname" name="cardname" placeholder="Lokesh Reddy" />
                                    <label htmlFor="ccnum">Credit card number</label>
                                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                                    <label htmlFor="expmonth">Exp Month</label>
                                    <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                                    <div className="row">
                                        <div className="col-50">
                                            <label htmlFor="expyear">Exp Year</label>
                                            <input type="text" id="expyear" name="expyear" placeholder="2024" />
                                        </div>
                                        <div className="col-50">
                                            <label htmlFor="cvv">CVV</label>
                                            <input type="text" id="cvv" name="cvv" placeholder="352" />
                                        </div>
                                    </div>
                                    </div>}
                                </div>

                            </div>
                            <label>
                                <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
                            </label>
                            <input type="submit" value="Place Order" className="btn" />
                        </form>
                    </div>
                </div>

                {/*<div className="col-25">
                    <div className="container">
                        <h4>Cart <span className="price" style={{ color: 'black' }} ><i className="fa fa-shopping-cart"></i> <b>4</b></span></h4>
                        <p><a href="#">Product 1</a> <span className="price">$15</span></p>
                        <p><a href="#">Product 2</a> <span className="price">$5</span></p>
                        <p><a href="#">Product 3</a> <span className="price">$8</span></p>
                        <p><a href="#">Product 4</a> <span className="price">$2</span></p>
                        <hr />
                        <p>Total <span className="price" style={{ color: 'black' }} ><b>$30</b></span></p>
                    </div>
                </div>*/}
            </div>
        </>
    )
}

export default Checkout;