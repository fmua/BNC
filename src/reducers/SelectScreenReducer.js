const INITIAL_STATE = {
  selectScreen: "home",
};

function SelectScreenReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDSCREEN": {
      return {
        ...state,
        selectScreen: action.payload,
      };
    }
  }
  return state;
}
export default SelectScreenReducer;
