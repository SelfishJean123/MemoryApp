import { useDispatch, useSelector } from "react-redux";
import { Tile } from "../models/tile.model";
import { setTilesArray } from "../store/actions/tileActions";
import { incrementTries, incrementScore, decrementScore } from "../store/actions/scoreActions";

const useCheckTile = () => {
    let tilesArray = useSelector((state: any) => state.tileReducer.tilesArray);
    let tries = useSelector((state: any) => state.scoreReducer.tries);
    const dispatch = useDispatch();

    const checkMatch = (id: number, tileId: number) => {
        const firstTile = tilesArray.find((tile: Tile) => tile.isActive);
        const updatedArray = tilesArray.map((tile: Tile) => tile.id === id ? { ...tile, isActive: true } : tile)
        dispatch(setTilesArray(updatedArray));

        if (!!firstTile) {
            setTimeout(() => {
                let updatedArray;
                if (firstTile.tileId === tileId) {
                    dispatch(incrementScore(1));
                    updatedArray = tilesArray.map((tile: Tile) => tile.tileId === tileId ? { ...tile, isActive: false, isMatched: true } : tile);
                } else {
                    if (tries >= 5) dispatch(decrementScore(1));
                    updatedArray = tilesArray.map((tile: Tile) => ({ ...tile, isActive: false }));
                }
                dispatch(setTilesArray(updatedArray));
                dispatch(incrementTries(1));
            }, 1000);
        }
    };

    return { checkMatch };
}

export default useCheckTile;