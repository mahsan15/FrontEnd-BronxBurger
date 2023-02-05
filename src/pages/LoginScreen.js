import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions.js";
import Loading from "../components/Loading.js";
import Error from "../components/Error.js";

export default function LoginScreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  function loginCurrUser() {
    dispatch(loginUser({ email, password }));
  }

  return (
    <div className="back">
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-4" style={{ fontSize: "40px" }}>
            Login
          </h2>
          {loading && <Loading />}
          {error && <Error error="Invalid Credentials" />}
          <div>
            <input
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <button onClick={loginCurrUser} className="btn mt-4">
              LOGIN
            </button>
            <a
              style={{
                color: "darkorange",
                fontSize: "20px",
                textDecoration: "underline",
              }}
              className="nav-link mt-3"
              href="/register"
            >
              Register for a new account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
