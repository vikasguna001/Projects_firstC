const initialState = {
  users: {},
  loggedInIser: null,
};
const loginReducers = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        users: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default loginReducers;
