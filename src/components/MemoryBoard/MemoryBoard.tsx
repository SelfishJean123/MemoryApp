import useTiles from "../../customHooks/useTiles";
import MemoryTile from "../MemoryTile/MemoryTile";
import "./MemoryBoard.scss";

const MemoryBoard = () => {
  const { array, checkMatch } = useTiles();

  return (
    <div className="memory-board full" role="memory-board">
      {array.map((tile, index) => {
        return (
          <MemoryTile
            key={index}
            id={tile.id}
            tileId={tile.tileId}
            path={tile.path}
            isActive={tile.isActive}
            isMatched={tile.isMatched}
            onTileClicked={checkMatch}
          />
        );
      })}
    </div>
  );
};

export default MemoryBoard;
