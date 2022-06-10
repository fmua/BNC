const INITIAL_STATE = {
  stateType: "",
};

function TypeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDTAGTYPE": {
      return {
        ...state,
        //stateContext: [...state.stateContext, action.payload],
        stateType: action.payload,
      };
    }
  }
  return state;
}
export default TypeReducer;
