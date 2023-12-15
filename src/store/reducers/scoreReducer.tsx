const initialState = {
  score: 0,
};

function scoreReducer(state = initialState, action: any) {
  console.log(state, action);

  switch (action.type) {
    case "INCREMENT":
      return { ...state, score: state.score + 1 };
    case "DECREMENT":
      return { ...state, score: state.score - 1 };
    default:
      return state;
  }
}

export default scoreReducer;
