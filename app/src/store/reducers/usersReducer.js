import { USER_LOGIN } from '../actions';

const initialState = {
  user: {
    isLoggedIn: false,
    username: "",
    password: "",
  },
  users: [
    {
      username: "admin",
      password: "admin",
    }
  ],
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      const username = state.users.find(user => action.payload.username === user.username);
      const password = state.users.find(user => action.payload.password === user.password);

      if (username && password) {
        return {
          ...state,
          user: {
            isLoggedIn: true,
            username,
            password,
          }
        }
      }
      return state;
    default:
      return state;
  }
}