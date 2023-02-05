import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";

export default function CartScreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="row justify-content-center ">
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px", paddingBottom: "50px" }}> </h2>
          {cartItems.map((item, i) => {
            return (
              <div
                className="flex-container shadow p-3 mb-5 bg-white rounded"
                key={item._id}
              >
                <div className="text left m-1 w-100" key={i + 1}>
                  <h1>{item.name}</h1>
                  <h1>[{item.type}]</h1>
                  <hr />
                  <i
                    style={{ color: "green", margin: "5px" }}
                    className="fa-solid fa-plus"
                    onClick={() => {
                      dispatch(addToCart(item, ++item.quantity, item.type));
                    }}
                  ></i>
                  <b style={{ fontSize: "20px" }}>{item.quantity}X</b>
                  <i
                    style={{ color: "red", margin: "5px" }}
                    className="fas fa-minus"
                    onClick={() => {
                      dispatch(addToCart(item, --item.quantity, item.type));
                    }}
                  ></i>
                  <h1 style={{ display: "inline" }}>
                    ${item.prices[0][item.type]} = ${item.price}
                  </h1>
                  <hr />
                </div>
                <div className="m-1 w-100">
                  <img
                    src={item.image}
                    style={{ height: "140px", width: "140px" }}
                    alt="burger"
                  ></img>
                </div>
                <div className="m-1 w-100">
                  <i
                    style={{
                      color: "darkorange",
                      margin: "5px",
                    }}
                    className="fa-solid fa-2x mt-5 fa-trash ms-auto"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="col-md-4 shadow p-3 mb-5 bg-white rounded"
          style={{ marginLeft: "80px" }}
        >
          <h2
            style={{
              fontSize: "50px",
              backgroundColor: "darkorange",
              borderRadius: "10px",
            }}
          >
            Cart{" "}
            <b
              style={{
                fontSize: "50px",
                paddingLeft: "100px",
                color: "white",
              }}
            >
              {cartItems.length}
              <i
                className="fa  fa-shopping-cart"
                style={{
                  fontSize: "40px",
                  paddingLeft: "10px",
                  color: "black",
                }}
              ></i>
            </b>
          </h2>
          <div style={{ paddingTop: "30px" }}>
            {cartItems.map((x, i) => {
              return (
                <h2 value={i + 1} style={{ paddingBottom: "20px" }} key={i + 1}>
                  Item {i + 1}
                  <b style={{ paddingLeft: "120px" }}>${x.price}</b>
                </h2>
              );
            })}
          </div>
          <hr />
          <h2 style={{ fontSize: "50px", paddingBottom: "20px" }}>
            Total ${subtotal}
          </h2>
          <Checkout subtotal={subtotal}>Pay Now</Checkout>
          <hr />
        </div>
      </div>
    </div>
  );
}
