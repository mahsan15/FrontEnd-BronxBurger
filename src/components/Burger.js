import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";

export default function Burger({ burger }) {
  const [quantity, setquantity] = useState(1);
  const [type, settype] = useState("burger");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  function addtocart() {
    dispatch(addToCart(burger, quantity, type));
  }

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
        <h1>{burger.name}</h1>
        <img
          alt="burger"
          src={burger.image}
          className="img-fluid"
          style={{ height: "200px", width: "300px" }}
        ></img>
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Type</p>
          <select
            className="form-control"
            value={type}
            onChange={(e) => {
              settype(e.target.value);
            }}
          >
            {burger.type.map((typ, i) => {
              return (
                <option key={i + 1} value={typ}>
                  {typ}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return (
                <option key={i} value={i + 1}>
                  {" "}
                  {i + 1}{" "}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-2">Price : ${burger.prices[0][type] * quantity}</h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addtocart}>
            ADD TO CART
          </button>
        </div>
      </div>

      <Modal show={show}>
        <Modal.Header onClick={handleClose} closeButton>
          <Modal.Title>{burger.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            alt="burger"
            src={burger.image}
            className="img-fluid"
            style={{ height: "400px", width: "500px" }}
          ></img>
          <p>{burger.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn" onClick={handleClose}>
            CLOSE
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
