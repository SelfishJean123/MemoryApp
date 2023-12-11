import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import "./MemoryTile.scss";

interface MemoryTileProps {
  id: number;
  tileId: number;
  path: number;
  isActive: boolean;
  isMatched: boolean;
  onTileClicked: (id: number, tileId: number, event: any) => void;
}

const MemoryTile: React.FC<MemoryTileProps> = ({ id, tileId, path, isActive, isMatched, onTileClicked }) => {
  return (
    <div
      role="button"
      className="memory-tile full"
      data-testid="memory-tile"
      id={`${tileId}`}
      onClick={(event) => {
        onTileClicked(id, tileId, event);
      }}
    >
      <div className={`tile-inner full ${isActive ? "clicked" : ""} ${isMatched ? "inactive" : ""}`}>
        <div className="tile-inner-front full">
          <QuestionMarkCircleIcon className="h-6 w-6 text-blue-500" />
        </div>
        <div className="tile-inner-back full">
          <img src={`https://source.unsplash.com/random?${path}`} className="tile-img" alt="tile" />
        </div>
      </div>
    </div>
  );
};

export default MemoryTile;
