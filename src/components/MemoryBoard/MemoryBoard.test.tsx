import { render, screen, fireEvent } from "@testing-library/react";
import MemoryBoard from "./MemoryBoard";

test("renders memory board", () => {
  render(<MemoryBoard />);

  // const tileElements = screen.getAllByRole("button");
  // console.log(tileElements);
  // expect(tileElements).toHaveLength(18);

  const memoryBoard = screen.getByRole("memory-board");
  expect(memoryBoard).toBeInTheDocument();

  //const mockChangeScore = jest.fn();
  
  fireEvent.click(screen.getByTestId("memory-tile"));
  //expect(mockChangeScore).toHaveBeenCalledWith(1, "INCREMENT", expect.anything());
});
