const INITIAL_STATE = {
  stateEquipment: "",
};

function EquipmentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDTAGEQUI": {
      return {
        ...state,
        //stateContext: [...state.stateContext, action.payload],
        stateEquipment: action.payload,
      };
    }
  }
  return state;
}
export default EquipmentReducer;
