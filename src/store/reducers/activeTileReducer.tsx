const initialState = {
  activeTileId: null,
};

function activeTileReducer(state = initialState, tileId: number | null) {
  return { ...state, activeTileId: tileId };
}

export default activeTileReducer;
