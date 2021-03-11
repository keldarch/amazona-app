import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../actions/cartActions";

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const search = useLocation().search;
  const qty = new URLSearchParams(search).get("qty") || 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART: ProductID: {productId} Qty: {qty}
      </p>
    </div>
  );
}
