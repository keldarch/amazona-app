import React from 'react'
import {useLocation} from 'react-router-dom';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const search = useLocation().search;
    const qty = new URLSearchParams(search).get('qty') || 1;
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>ADD TO CART: ProductID: {productId} Qty: {qty}</p>
        </div>
    )
}
