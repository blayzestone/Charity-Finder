const initialState = {
  user: {
    isLoggedIn: false,
    username: "",
    password: "",
  },
  users: [],
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}