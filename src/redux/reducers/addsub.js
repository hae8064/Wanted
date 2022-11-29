const initialState = {
  id: 0,
};

export default function addsubReducer(state = initialState, action) {
  switch (action.type) {
    case "ADDBOOK": {
      return {
        ...state,
        id: state.id = 5,
      };
    }
    case "decrement": {
      return {
        ...state,
        value: state.value - 1,
      };
    }
    case "reset": {
      return {
        ...state,
        value: 0,
      };
    }
    default:
      return state;
  }
}
