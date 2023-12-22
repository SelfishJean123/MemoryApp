const incrementTries: any = (amount: number) => {
  return {
    type: "INCREMENT_TRIES",
    payload: { amount },
  };
};

const incrementScore: any = (amount: number) => {
  return {
    type: "INCREMENT_SCORE",
    payload: { amount },
  };
};

const decrementScore: any = (amount: number) => {
  return {
    type: "DECREMENT_SCORE",
    payload: { amount },
  };
};

export { incrementTries, incrementScore, decrementScore };
