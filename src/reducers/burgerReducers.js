export const getAllBurgersReducer = (state = { burgers: [] }, action) => {
  switch (action.type) {
    case "GET_BURGERS_REQUEST":
      return { loading: true, ...state };
    case "GET_BURGERS_SUCCESS":
      return { loading: false, burgers: action.payload };
    case "GET_BURGERS_FAILED":
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};
