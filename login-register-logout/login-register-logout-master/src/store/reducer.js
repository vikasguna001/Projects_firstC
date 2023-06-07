import { createStore } from "redux";

const initialState = {
  users: [],
  loggedInIser: null,
  products: [
    {
      id: 1,
      name: "pen",
      price: 5,
    },
    {
      id: 12,
      name: "pen1",
      price: 2,
    },
    {
      id: 3,
      name: "pen2",
      price: 6,
    },
    {
      id: 4,
      name: "pen3",
      price: 8,
    },
  ],
  card: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        users: null,
      };

    default:
      return state;
  }
};

export default createStore(reducer);
