import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions.js";
import Loading from "../components/Loading.js";
import Success from "../components/Success.js";
import Error from "../components/Error.js";

export default function RegisterScreen() {
  const [firstName, setfname] = useState("");
  const [lastName, setlname] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const dispatch = useDispatch();
  const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;
  function register() {
    if (password !== cpassword) {
      alert("Passwords do not match");
    } else {
      const user = {
        firstName,
        lastName,
        email,
        phoneNumbers: [phonenumber],
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  return (
    <div className="back">
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-4" style={{ fontSize: "40px" }}>
            Register
          </h2>
          {loading && <Loading />}
          {success && (
            <Success success="User successfly registered, Try logging in" />
          )}
          {error && (
            <Error error="Email might be alredy registered or any other issue" />
          )}
          <div>
            <input
              required
              type="text"
              placeholder="First name"
              className="form-control"
              value={firstName}
              onChange={(e) => {
                setfname(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="Last name"
              className="form-control"
              value={lastName}
              onChange={(e) => {
                setlname(e.target.value);
              }}
            />
            <input
              required
              type="email"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="phone number"
              className="form-control"
              value={phonenumber}
              onChange={(e) => {
                setphonenumber(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
            <button onClick={register} className="btn mt-4">
              REGISTER
            </button>
            <a
              style={{
                color: "darkorange",
                fontSize: "20px",
                textDecoration: "underline",
              }}
              className="nav-link mt-3"
              href="/login"
            >
              Already have an account? Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
