export const addToCart =
  (burger, quantity, type) => async (dispatch, getState) => {
    var cartItem = {
      name: burger.name,
      _id: burger._id,
      image: burger.image,
      type: type,
      quantity: Number(quantity),
      prices: burger.prices,
      price: burger.prices[0][type] * quantity,
    };
    if (cartItem.quantity > 10) {
      //To alert user you cannot order more than 10
      alert("You cannot add more than 10 items");
    } else {
      if (cartItem.quantity < 1) {
        dispatch({ type: "DELETE_FROM_CART", payload: burger }); //deletes item when it hits zero
      } else {
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
      }
    }

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

export const deleteFromCart = (burger) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: burger });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
