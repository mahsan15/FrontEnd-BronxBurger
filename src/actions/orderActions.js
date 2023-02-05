import axios from "axios";
export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  localStorage.removeItem("cartItems");
  window.location.href = "/";
  alert("Your order has been placed, Thank you!");
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;
  try {
    const response = await axios.post("/orders", {
      token,
      subtotal,
      currentUser,
      cartItems,
    });
    console.log(response);
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED" });
  }
};
