import './total.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Total() {

    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        if (cart.length > 0) {
            cart.forEach(item => {
                totalQuantity += item.quantity;
                totalPrice += item.price * item.quantity;
            })
        }
        return { totalPrice, totalQuantity };
    }

    const checkoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <div className="total">
            <h2>ORDER SUMMARY</h2>
            <div>
                <p className="total__p">
                    total ({getTotal().totalQuantity} items)
                    : <strong>Rs. {getTotal().totalPrice}</strong>
                </p>
                <input type="button" value="Go To Checkout" className="btn" onClick={checkoutHandler}/>
            </div>
        </div>
    )
}

export default Total