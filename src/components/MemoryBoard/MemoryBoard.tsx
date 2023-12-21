import useTiles from "../../customHooks/useTiles";
import MemoryTile from "../MemoryTile/MemoryTile";
import "./MemoryBoard.scss";

const MemoryBoard = () => {
  const { generateTiles, checkMatch } = useTiles();

  return (
    <div className="memory-board full" role="memory-board">
      {generateTiles().map((tile, index) => {
        return (
          <MemoryTile
            key={index}
            id={tile.id}
            tileId={Math.ceil(tile.id / 2)}
            path={Math.ceil(tile.id / 2)}
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
