const INITIAL_STATE = {
  stateNoIncident: "",
};

function NoIncidentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDNOINC": {
      return {
        ...state,
        //stateContext: [...state.stateContext, action.payload],
        stateNoIncident: action.payload,
      };
    }
  }
  return state;
}
export default NoIncidentReducer;
