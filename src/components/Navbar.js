import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";
export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = JSON.parse(localStorage.getItem("currentUser"));
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a
          className="navbar-brand"
          style={{
            color: "darkorange",
            fontSize: "35px",
            paddingLeft: "30px",
            fontWeight: "Bold",
          }}
          href="/"
        >
          BRONX BURGERS
        </a>
        <div className=" navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {userstate ? (
              <div className="dropdown">
                <p
                  style={{
                    color: "darkorange",
                    fontSize: "25px",
                  }}
                  className="dropdown-toggle nav-link"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userstate.firstName}
                </p>
                <ul className="dropdown-menu">
                  <li>
                    <p
                      className="dropdown-item"
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </p>
                  </li>
                </ul>
              </div>
            ) : (
              <li className="nav-item active">
                <a
                  style={{ color: "darkorange", fontSize: "25px" }}
                  className="nav-link"
                  href="/login"
                >
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a
                style={{ color: "darkorange", fontSize: "25px" }}
                className="nav-link"
                href="/cart"
              >
                Cart {cartstate.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
