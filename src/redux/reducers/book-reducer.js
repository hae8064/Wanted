const bookReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.payload];
    case "DELETE_BOOK":
      //   return state.filter((id) => id !== action.payload.id);
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
