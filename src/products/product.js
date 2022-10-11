import React from "react";
import "./products.css";
import { useDispatch } from 'react-redux';
import { addToCart } from '../reducers/cartSlice';

const Product = (props) => {

    const dispatch = useDispatch();

    const addToCartHandler = (id, title, image, price) => {
        console.log("carhandler");
        dispatch(addToCart({ id, title, image, price }));
    }

    return (
        <div className="mainProduct" key={props.index}>
            <h4 className="productText">{props.item.title}</h4>
            <img src={props.item.image} className="productImage" />
            <h6 className="productText">{props.item.price}</h6>
            <input type="button" value="Add To Cart" className="btn" onClick={() =>
                addToCartHandler(props.item.id, props.item.title, props.item.image, props.item.price)
            } />
        </div>
    )
}

export default Product;