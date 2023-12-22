import { Tile } from "../models/tile.model";

const useGenerateTiles = () => {
    const generateRandomNumber = (maxNumberOfTiles: number): number => {
        let randomNum = Math.floor(Math.random() * maxNumberOfTiles) + 1;
        return randomNum;
    }

    const generateTileId = (maxNumberOfTiles: number, existedTiles: Array<number>): number => {
        const randomNumber = generateRandomNumber(maxNumberOfTiles);
        if (existedTiles.includes(randomNumber)) {
            return generateTileId(maxNumberOfTiles, existedTiles);
        }
        return randomNumber;
    }

    const generateTiles = (): Array<any> => {
        const maxNumberOfTiles = 18;
        const tiles: Tile[] = [];
        const alreadySelectedIds: Array<number> = [];
        for (let index = 0; index < maxNumberOfTiles; index++) {
            const id = generateTileId(maxNumberOfTiles, alreadySelectedIds);
            alreadySelectedIds.push(id);
            tiles.push({ id, isActive: false, tileId: Math.ceil(id / 2), isMatched: false });
        }
        return tiles;
    }

    return { generateTiles };

}

export default useGenerateTiles;