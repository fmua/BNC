const INITIAL_STATE = {
  apiToken: "",
};

function TokenReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDTOKEN": {
      return {
        ...state,
        //stateContext: [...state.stateContext, action.payload],
        apiToken: action.payload,
      };
    }
  }
  return state;
}
export default TokenReducer;
