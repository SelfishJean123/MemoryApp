import { render, screen, fireEvent } from "@testing-library/react";
import MemoryTile from "./MemoryTile";

test("renders memory tile", () => {
  const mockOnTileClicked = jest.fn();
   render(<MemoryTile key={0} id={0} tileId={0} path={0} isActive={false} isMatched={false} onTileClicked={mockOnTileClicked} />);
  expect(screen.getByTestId("memory-tile")).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "tile" })).toBeInTheDocument();

  
 

  fireEvent.click(screen.getByTestId("memory-tile"));
  expect(mockOnTileClicked).toHaveBeenCalledWith(0, expect.anything());
});
