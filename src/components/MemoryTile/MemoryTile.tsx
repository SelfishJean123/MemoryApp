import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import "./MemoryTile.scss";
import { Tile } from "../../models/tile.model";
import useCheckTile from "../../customHooks/useCheckTile";

const MemoryTile: React.FC<Tile> = ({ id, tileId, isActive, isMatched }) => {
  const { checkMatch } = useCheckTile();

  return (
    <div
      role="listitem" // ! That's totally wrong
      className="memory-tile full"
      data-testid={tileId}
      onClick={() => checkMatch(id, tileId)}
    >
      <div className={`tile-inner full ${isActive ? "clicked" : ""} ${isMatched ? "inactive" : ""}`}>
        <div className="tile-inner-front full">
          <QuestionMarkCircleIcon className="h-6 w-6 text-blue-500" />
        </div>
        <div className="tile-inner-back full">
          <img src={`https://source.unsplash.com/random?${tileId}`} className="tile-img" alt="tile" />
        </div>
      </div>
    </div>
  );
};

export default MemoryTile;
