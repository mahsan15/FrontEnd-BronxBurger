import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
export default function Checkout({ subtotal }) {
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }
  return (
    <StripeCheckout
      amount={subtotal * 100}
      billingAddress
      token={tokenHandler}
      stripeKey="pk_test_51MWbUfLW7Xl0IKbbJHbwRa9GeFJjge7ysaKfiJIiqKdQ8rTl88KE5jVNrrgAm1hkLzSflpPiVpJ1qbpbvZz7D9G50058iNUG4M"
      currency="CAD"
    >
      <button className="btn">Pay Now</button>
    </StripeCheckout>
  );
}
