import React from "react";
import { useSelector } from 'react-redux';
import NavBar from "../navigation/navBar";
import OrdersItem from "./ordresItem";

const Orders = () => {
    const cart = useSelector((state) => state.orders[1]);
    console.log(cart);
    return (
        <>
            <NavBar />
            <div className="cart">
                <div className="cart__left">
                    <div>
                        <h3>Orders</h3>
                        {cart?.map((item) => (
                            <OrdersItem
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </>
        )
}

export default Orders;