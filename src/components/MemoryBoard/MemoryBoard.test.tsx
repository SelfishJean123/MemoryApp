import { render, screen } from "@testing-library/react";
import MemoryBoard from "./MemoryBoard";

test("renders memory board", () => {
  render(<MemoryBoard />);
  const memoryBoard = screen.getByTestId("memory-board");
  expect(memoryBoard).toBeInTheDocument();

  const tileElements = screen.getAllByRole("button");
  expect(tileElements).toHaveLength(32);
});
