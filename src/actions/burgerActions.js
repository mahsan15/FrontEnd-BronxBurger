import axios from "axios";
export const getAllBurgers = () => async (dispatch) => {
  dispatch({ type: "GET_BURGERS_REQUEST" });
  try {
    const response = await axios.get("/burgers");
    //console.log(response.data.data);
    dispatch({ type: "GET_BURGERS_SUCCESS", payload: response.data.data });
  } catch (error) {
    dispatch({ type: "GET_BURGERS_FAILED", payload: error });
  }
};
