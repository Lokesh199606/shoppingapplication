import React, { useEffect, useState } from 'react';
import Product from './product';
import axios from "axios";
import NavBar from '../navigation/navBar';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AllProducts = () => {

    const navigate = useNavigate();

    const [productsData, setproductsData] = useState([]);

    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        axios
            .get("/db/products.json")
            .then((res) => {
                setproductsData(res.data);
            })
            .catch((err) => console.log(err));

        console.log(productsData);

    }, []);

    const getTotalQuantity = () => {
        let total = 0;
        if (cart.length > 0) {
            cart.forEach(item => {
                total += item.quantity;
            })
        }
        return total;
    }

    return (
        <>
            <NavBar />
            <div className="pContainer">
                {
                    productsData && productsData.length > 0 && productsData.map((item, index) => {
                        return (
                            <div key={index}>
                                <Product item={item} index={index+1}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className='shopping-cart' onClick={() => navigate('/cart')}>
                <p>{getTotalQuantity() || 0}</p>
            </div>
        </>
    )
}

export default AllProducts;