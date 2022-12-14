const INITIAL_STATE = {
  userEmail: "",
  userLoged: false,
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, userLoged: true, userEmail: action.userEmail };
    case "LOG_OUT":
      return { ...state, userLoged: false, userEmail: "" };
    default:
      return state;
  }
}

export default userReducer
