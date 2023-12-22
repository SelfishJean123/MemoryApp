import MemoryTile from "../MemoryTile/MemoryTile";
import "./MemoryBoard.scss";
import { useSelector } from "react-redux";
import { Tile } from "../../models/tile.model";

const MemoryBoard = () => {
  const tilesArray = useSelector((state: any) => state.tileReducer.tilesArray);

  return (
    <div className="memory-board full" role="memory-board">
      {tilesArray.length &&
        tilesArray.map((tile: Tile, index: number) => {
          return <MemoryTile key={index} id={tile.id} tileId={tile.tileId} isActive={tile.isActive} isMatched={tile.isMatched} />;
        })}
    </div>
  );
};

export default MemoryBoard;
