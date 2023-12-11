import { useState } from "react";

import MemoryTile from "../MemoryTile/MemoryTile";
import "./MemoryBoard.scss";
import { click } from "@testing-library/user-event/dist/click";

const MemoryBoard = () => {
  const checkMatch = (id: number, tileId: number, event: any) => {


    
    const clickedTile = tileArray.find((tile) => tile.id === id);
    clickedTile!.isActive = true;
    setArray([...array, clickedTile!]);

    // if (firstTileId) {
    //   if (firstTileId === tileId) {
    //     setScore(score + 1);
    //   } else {
    //     setFirstTileId(undefined);
    //   }
    //   setFirstTileId(undefined);
    // } else {
    //   setFirstTileId(tileId);
    // }
  };

  const tileArray = [
    { id: 1, tileId: 1, path: 1, isActive: false, isMatched: false, onTileClicked: checkMatch },
    { id: 2, tileId: 1, path: 1, isActive: false, isMatched: false, onTileClicked: checkMatch },
    { id: 3, tileId: 2, path: 2, isActive: false, isMatched: false, onTileClicked: checkMatch },
    { id: 3, tileId: 2, path: 2, isActive: false, isMatched: false, onTileClicked: checkMatch },
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
  ];

  const [array, setArray] = useState(tileArray);
  const [score, setScore] = useState<number>(0);

  // const shuffleArray = (array: any) => {
  //   let currentIndex = array.length,
  //     randomIndex;

  //   while (currentIndex !== 0) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;
  //     [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  //   }

  //   return array;
  // };

  // const tileElements = shuffleArray(
  //   Array(16)
  //     .fill(null)
  //     .map((_, i) => <MemoryTile tileId={i} path={Math.floor(Math.random() * 100) + 1} onTileClicked={checkMatch} />)
  //     .map((tile) => [tile, tile])
  //     .flat(),
  // );

  return (
    <div className="memory-board full" data-testid="memory-board">
      {array.map((tile, index) => {
        return (
          <MemoryTile
            key={index}
            id={tile.id}
            tileId={tile.tileId}
            path={tile.path}
            isActive={tile.isActive}
            isMatched={tile.isMatched}
            onTileClicked={tile.onTileClicked}
          />
        );
      })}
    </div>
  );
};

export default MemoryBoard;
