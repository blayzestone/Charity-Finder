import { USER_LOGIN, SAVE_CHARITY } from "../actions";

const initialState = {
  user: {
    isLoggedIn: false,
    id: null,
    username: "",
    password: "",
    charities: {},
  },
  users: {
    1: {
      id: 1,
      username: "admin",
      password: "admin",
      charities: {},
    },
  },
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      const user = Object.values(state.users).find((user) => {
        return action.payload.username === user.username;
      });

      if (user && action.payload.password === user.password) {
        return {
          ...state,
          user: {
            isLoggedIn: true,
            id: user.id,
            username: user.username,
            password: user.password,
          },
        };
      }
      return state;
    case SAVE_CHARITY:
      const updatedCharities = {
        ...state.user.charities,
        [action.payload.ein]: action.payload,
      };

      return {
        ...state,
        user: {
          ...state.user,
          charities: updatedCharities,
        },
        users: {
          ...state.users,
          [state.user.id]: updatedCharities,
        },
      };
    default:
      return state;
  }
};
