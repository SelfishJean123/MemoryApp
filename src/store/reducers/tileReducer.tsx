import { Tile } from "../../models/tile.model";

interface payloadType {
  array: Tile[];
}

const initialState = {
  tilesArray: [],
};

function tileReducer(state = initialState, action: { type: string; payload: payloadType }) {
  switch (action.type) {
    case "SET_TILES_ARRAY":
      return {
        ...state,
        tilesArray: action.payload.array,
      };
    default:
      return state;
  }
}

export default tileReducer;
