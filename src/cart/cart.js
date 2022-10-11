import './cart.css';
import { useSelector } from 'react-redux';
import CartItem from './cartItem';
import Total from './total';
import NavBar from '../navigation/navBar';

const Cart = () => {

    const cart = useSelector((state) => state.cart)

    return (
        <>
            <NavBar />
            <div className="cart">
                <div className="cart__left">
                    <div>
                        <h3>Shopping Cart</h3>
                        {cart?.map((item) => (
                            <CartItem
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        ))}
                    </div>
                </div>

                <div className="cart__right">
                    <Total />
                </div>

            </div>
        </>
    )
}

export default Cart;