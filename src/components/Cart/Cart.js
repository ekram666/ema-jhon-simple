import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    let shipping = 0;

    for(const product of cart)
    {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat(total *0.1);
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h5>Order summery</h5>
                <p>Selected Item: {cart.length}</p>
                <p>Total price: ${total} </p>
                <p>Total Shipping: {shipping}</p>
                <p>Tax: {tax}</p>
                <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;