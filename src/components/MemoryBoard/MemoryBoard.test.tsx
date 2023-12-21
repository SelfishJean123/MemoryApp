import { render, screen, fireEvent } from "@testing-library/react";
import MemoryBoard from "./MemoryBoard";
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
  it("should be sure that image print twice", () => {
    const itemID = 1;
    const numberOfEles = 2;
    render(<MemoryBoard />);
    const eles = screen.getAllByTestId(itemID);
    expect(eles.length).toEqual(numberOfEles);
  });

  it("should be sure that all images are existed and printed twice", () => {
    const maxNumberOfTiles = 18 / 2;
    const twoTilesAllowed = 2;
    render(<MemoryBoard />);
    for(let itemID = 1; itemID <= maxNumberOfTiles; itemID++){
      const eles = screen.getAllByTestId(itemID);
      expect(eles.length).toEqual(twoTilesAllowed);     
    }
  });
  it("the order of the images inside of the tiles should be random", () => {
    const allTitlesCount = 18;
    
    render(<MemoryBoard />);
    const eles = screen.getAllByRole("listitem");
    const elesLength = eles.length; 
    expect(elesLength).toStrictEqual(allTitlesCount);
    
    let countOfNotRandomImages = 0;

    for(let i = 0;i < eles.length; i+=2) {
      let nextEleIndex = i + 1;
      let idFirstEle = eles[i].getAttribute("data-testid");
      let idSecondEle = eles[nextEleIndex].getAttribute("data-testid");
      if(idFirstEle === idSecondEle) {
        countOfNotRandomImages++;
      }
    }

    expect(countOfNotRandomImages).toBeLessThanOrEqual(2);
    
    // TODO: make sure that there's no two tiles after each other with the same id
    // ? : [1,1,2,2,3,3,4,4] X, [1,4,6,2,4,2] (correct)

    // TODO: create a loop that check for that n and n+1 doesn't equal
  })
 })
