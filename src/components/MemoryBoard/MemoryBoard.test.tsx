import { render, screen, fireEvent } from "@testing-library/react";
import MemoryBoard from "./MemoryBoard";

import { renderHook, act } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
 import configureStore from "redux-mock-store";
import useCheckTile from "../../customHooks/useCheckTile";
import { Tile } from "../../models/tile.model";

const mockStore = configureStore([]);

// test("renders memory board", () => {
//   render(<MemoryBoard />);

//   // const tileElements = screen.getAllByRole("button");
//   // console.log(tileElements);
//   // expect(tileElements).toHaveLength(18);

//   const memoryBoard = screen.getByRole("memory-board");
//   expect(memoryBoard).toBeInTheDocument();

//   //const mockChangeScore = jest.fn();

//   fireEvent.click(screen.getByTestId("memory-tile"));
//   //expect(mockChangeScore).toHaveBeenCalledWith(1, "INCREMENT", expect.anything());
// });

describe("Memory board domain test", () => {
  let store: any;
  let initialState;

  beforeEach(() => {
    initialState = {
      tileReducer: {
        tilesArray: [
          { id: 1, tileId: 1, isActive: false, isMatched: false },
          { id: 2, tileId: 1, isActive: false, isMatched: false },
        ],
      },
      scoreReducer: {
        tries: 0,
        score: 0,
      },
    };
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  it("should be sure that image print twice", () => {
    const itemID = 1;
    const numberOfEles = 2;
    render(
      <Provider store={store}>
        <MemoryBoard />
      </Provider>,
    );
    const eles = screen.getAllByTestId(itemID);
    expect(eles.length).toEqual(numberOfEles);
  });

  it("should be sure that all images are existed and printed twice", () => {
    const maxNumberOfTiles = 18 / 2;
    const twoTilesAllowed = 2;
    render(
      <Provider store={store}>
        <MemoryBoard />
      </Provider>,
    );
    for (let itemID = 1; itemID <= maxNumberOfTiles; itemID++) {
      const eles = screen.getAllByTestId(itemID);
      expect(eles.length).toEqual(twoTilesAllowed);
    }
  });

  it("the order of the images inside of the tiles should be random", () => {
    const allTitlesCount = 18;

    render(
      <Provider store={store}>
        <MemoryBoard />
      </Provider>,
    );
    const eles = screen.getAllByRole("listitem");
    const elesLength = eles.length;
    expect(elesLength).toStrictEqual(allTitlesCount);

    let countOfNotRandomImages = 0;

    for (let i = 0; i < eles.length; i += 2) {
      let nextEleIndex = i + 1;
      let idFirstEle = eles[i].getAttribute("data-testid");
      let idSecondEle = eles[nextEleIndex].getAttribute("data-testid");
      if (idFirstEle === idSecondEle) {
        countOfNotRandomImages++;
      }
    }

    expect(countOfNotRandomImages).toBeLessThanOrEqual(2);

    // TODO: make sure that there's no two tiles after each other with the same id
    // ? : [1,1,2,2,3,3,4,4] X, [1,4,6,2,4,2] (correct)

    // TODO: create a loop that check for that n and n+1 doesn't equal
  });

  // it("should dispatch setTilesArray and incrementTries when a tile is clicked", () => {
  //   const { result } = renderHook(() => useCheckTile(), {
  //     wrapper: (children: any) => <Provider store={store}>{children}</Provider>,
  //   });

  //   act(() => {
  //     result.current.checkMatch(1, 1);
  //     result.current.checkMatch(2, 2);
  //   });

  //   // Pobranie aktualnego stanu po akcjach
  //   const currentState = store.getState().tileReducer.tilesArray;

  //   // Sprawdzenie, czy tylko dwa kafelki mają isActive: true
  //   const activeTiles = currentState.filter((tile: Tile) => tile.isActive);
  //   expect(activeTiles.length).toBe(2);

  //   expect(store.dispatch).toHaveBeenCalledTimes(2);
  //   expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function));
  //   expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function));
  // });
});
