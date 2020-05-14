import { USER_LOGIN } from '../actions';

const initialState = {
  user: {
    isLoggedIn: false,
    id: null,
    username: "",
    password: "",
  },
  users: [
    {
      id: 1,
      username: "admin",
      password: "admin",
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
            isLoggedIn: true,
            id: user.id,
            username: user.username,
            password: user.password,
          }
        }
      }
      return state;
    default:
      return state;
  }
}