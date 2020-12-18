export const initialState = {
    title: "WEBPT22 Dragon Club 🐲",
    editing: false
  };
  
  export const titleReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_TITLE":
        return {
          ...state,
          title: action.payload,
          editing: false
        };
      case "TOGGLE_EDITING":
        return {
          ...state,
          editing: !state.editing
        };
      default:
        return state;
    }
  };
  