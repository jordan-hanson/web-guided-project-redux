const initialState = {
  members: [
    { name: 'Jojo Zhang', dragonStatus: true },
    { name: 'Brandon Harris', dragonStatus: false }
  ]
};

export const dragonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MEMBER":
      return {
        ...state, 
        members: [...state.members, action.payload]
      };
    default:
      return state;
  }
}