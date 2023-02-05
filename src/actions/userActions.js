import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const response = await axios.post("/users", user);
    console.log(response);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const response = await axios.post("/users/login", user);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    if (response.data.cartItems === null) {
      localStorage.setItem("cartItems", []);
    } else {
      localStorage.setItem(
        "cartItems",
        JSON.stringify(response.data.cartItems)
      ); //users saved cart loaded
    }
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};

//to logout the currentuser object is deleted from local storage
export const logoutUser = () => async (dispatch) => {
  const userstate = JSON.parse(localStorage.getItem("currentUser"))._id;
  //console.log(userstate);
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  console.log("this is the items " + JSON.stringify(cartItems));
  const response = await axios.put("/users/logout/" + userstate, { cartItems });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("cartItems");
  console.log(response);
  window.location.href = "/login";
};
