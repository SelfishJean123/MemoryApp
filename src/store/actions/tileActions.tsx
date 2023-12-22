import { Tile } from "../../models/tile.model";

const setTilesArray: any = (array: Tile[]) => {
  return {
    type: "SET_TILES_ARRAY",
    payload: { array },
  };
};

export { setTilesArray };
