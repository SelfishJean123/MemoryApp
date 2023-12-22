const initialState = {
  score: 0,
  tries: 0,
};

function scoreReducer(state = initialState, action: { type: string; payload: { amount: number } }) {
  switch (action.type) {
    case "INCREMENT_TRIES":
      return { ...state, tries: state.tries + action.payload.amount };
    case "INCREMENT_SCORE":
      return { ...state, score: state.score + action.payload.amount };
    case "DECREMENT_SCORE":
      return { ...state, score: state.score - action.payload.amount };
    default:
      return state;
  }
}

export default scoreReducer;
