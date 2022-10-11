import './orderItem.css';


function OrdersItem({ id, image, title, price}) {

    return (
        <>
            <div className="cartItem">
                <img className="cartItem__image" src={image} alt='item' />
                <div className="cartItem__info">
                    <p className="cartItem__title">{title}</p>
                    <p className="cartItem__price">
                        <small>Rs.</small>
                        <strong>{price}</strong>
                    </p>
                </div>
            </div>
        </>
    )
}

export default OrdersItem;