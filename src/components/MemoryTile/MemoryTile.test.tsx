import { render, screen, fireEvent } from "@testing-library/react";
import MemoryTile from "./MemoryTile";

// test("renders memory tile", () => {
//   const mockOnTileClicked = jest.fn();
//   render(<MemoryTile tileId={4} path={4} onTileClicked={mockOnTileClicked} />);

//   expect(screen.getByTestId("memory-tile")).toBeInTheDocument();
//   expect(screen.getByRole("img", { name: "tile" })).toBeInTheDocument();
// });

// test("handles click event", () => {
//   const mockOnTileClicked = jest.fn();
//   const tileId = 1;
//   const path = 100;
//   render(<MemoryTile tileId={tileId} path={path} onTileClicked={mockOnTileClicked} />);

//   fireEvent.click(screen.getByTestId("memory-tile"));
//   expect(mockOnTileClicked).toHaveBeenCalledWith(tileId, expect.anything());
// });
