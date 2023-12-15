import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useTiles = () => {
    const checkMatch = (id: number, tileId: number, event: any) => {

        console.log();
        
        const clickedTile = array.find((tile) => tile.id === id);
        if (clickedTile) {
            clickedTile.isActive = true;
            setArray([...array, clickedTile]);
        }

        const activeTiles: number = array.filter((tile) => tile.isActive).length;
        

        if (activeTiles === 2) {
            

            setTimeout(() => {
                const matchedTiles: number = array.filter((tile) => tile.tileId === tileId && tile.isActive).length;

                if (matchedTiles === 2) {
                   // dispatch({ type: "INCREMENT" });

                    setArray(array.map((tile) => {
                        tile.isActive = false;
                        tile.isMatched = tile.tileId === tileId ? true : tile.isMatched;
                        return tile;
                    }));
                } else {
                    setArray(array.map((tile) => {
                        tile.isActive = false;
                        return tile;
                    }));
                }
            }, 1000);
        }
    };

    const [array, setArray] = useState([
        { id: 1, tileId: 1, path: 1, isActive: false, isMatched: false, onTileClicked: checkMatch },
        { id: 2, tileId: 1, path: 1, isActive: false, isMatched: false, onTileClicked: checkMatch },
        { id: 3, tileId: 2, path: 2, isActive: false, isMatched: false, onTileClicked: checkMatch },
        { id: 4, tileId: 2, path: 2, isActive: false, isMatched: false, onTileClicked: checkMatch },
        { id: 5, tileId: 3, path: 3, isActive: false, isMatched: false, onTileClicked: checkMatch },
        { id: 6, tileId: 3, path: 3, isActive: false, isMatched: false, onTileClicked: checkMatch },
        { id: 7, tileId: 4, path: 4, isActive: false, isMatched: false, onTileClicked: checkMatch },
        { id: 8, tileId: 4, path: 4, isActive: false, isMatched: false, onTileClicked: checkMatch },
        { id: 9, tileId: 5, path: 5, isActive: false, isMatched: false, onTileClicked: checkMatch },
        { id: 10, tileId: 5, path: 5, isActive: false, isMatched: false, onTileClicked: checkMatch },
        { id: 11, tileId: 6, path: 6, isActive: false, isMatched: false, onTileClicked: checkMatch },
        { id: 12, tileId: 6, path: 6, isActive: false, isMatched: false, onTileClicked: checkMatch },
        { id: 13, tileId: 7, path: 7, isActive: false, isMatched: false, onTileClicked: checkMatch },
        { id: 14, tileId: 7, path: 7, isActive: false, isMatched: false, onTileClicked: checkMatch },
        { id: 15, tileId: 8, path: 8, isActive: false, isMatched: false, onTileClicked: checkMatch },
        { id: 16, tileId: 8, path: 8, isActive: false, isMatched: false, onTileClicked: checkMatch },
        { id: 17, tileId: 9, path: 9, isActive: false, isMatched: false, onTileClicked: checkMatch },
        { id: 18, tileId: 9, path: 9, isActive: false, isMatched: false, onTileClicked: checkMatch },
    ]);

    return { array, checkMatch };

}

export default useTiles;