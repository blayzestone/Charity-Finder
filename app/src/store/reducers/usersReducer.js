import { USER_LOGIN, SAVE_CHARITY, } from '../actions';

const initialState = {
  user: {
    isLoggedIn: false,
    id: null,
    username: "",
    password: "",
    charities: {},
  },
  users: [
    {
      id: 1,
      username: "admin",
      password: "admin",
      charities: {},
    }
  ],
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      const userIndex = state.users.findIndex(user => {
        return action.payload.username === user.username;
      });
      const user = state.users[userIndex]

      if (user && action.payload.password === user.password) {
        return {
          ...state,
          user: {
            ...state.user,
            isLoggedIn: true,
            id: user.id,
            username: user.username,
            password: user.password,
          }
        }
      }
      return state;
    case SAVE_CHARITY:
      const updatedCharities = {
        ...state.user.charities,
        [action.payload.ein]: action.payload,
      };
      const updatedUsers = state.users.map(user => {
        if(user.id === state.user.id) {
          return {
            ...user,
            charities: updatedCharities,
          }
        }
        return user;
      });

      return {
        ...state,
        user: {
          ...state.user,
          charities: updatedCharities,
        },
        users: updatedUsers,
      }
    default:
      return state;
  }
}