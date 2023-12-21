import { title } from "process";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useTiles = () => {
    const checkMatch = (id: number, tileId: number, event: any) => {
        // TODO : for joanna to refactor and re-create        
        // const clickedTile = array.find((tile) => tile.id === id);
        // if (clickedTile) {
        //     clickedTile.isActive = true;
        //     setArray([...array, clickedTile]);
        // }

        // const activeTiles: number = array.filter((tile) => tile.isActive).length;
        

        // if (activeTiles === 2) {
            

        //     setTimeout(() => {
        //         const matchedTiles: number = array.filter((tile) => tile.tileId === tileId && tile.isActive).length;

        //         if (matchedTiles === 2) {
        //            // dispatch({ type: "INCREMENT" });

        //             // setArray(array.map((tile) => {
        //             //     tile.isActive = false;
        //             //     tile.isMatched = tile.tileId === tileId ? true : tile.isMatched;
        //             //     return tile;
        //             // }));
        //         } else {
        //             setArray(array.map((tile) => {
        //                 tile.isActive = false;
        //                 return tile;
        //             }));
        //         }
        //     }, 1000);
        // }
    };

    const generateRandomNumber = (maxNumberOfTiles: number): number => {
        let randomNum = Math.floor(Math.random() * maxNumberOfTiles) + 1;
        return randomNum;
    }


    const generateTileId = (maxNumberOfTiles: number, existedTiles: Array<number>): number => {
        const randomNumber = generateRandomNumber(maxNumberOfTiles);
        if(existedTiles.includes(randomNumber)){
            return generateTileId(maxNumberOfTiles, existedTiles);
        }
        return randomNumber;
    }

    const generateTiles = (): Array<any> => {
        const maxNumberOfTiles = 18;
        const tiles = [];
        const alreadySelectedIds: Array<number> = [];
        for (let index = 0; index < maxNumberOfTiles;index++) {
            const id = generateTileId(maxNumberOfTiles, alreadySelectedIds);
            alreadySelectedIds.push(id);
            tiles.push({
                id, isActive: false, isMatched: false, onTileClicked: checkMatch
            });
        }
        return tiles;
    }

    return { generateTiles, checkMatch };

}

export default useTiles;