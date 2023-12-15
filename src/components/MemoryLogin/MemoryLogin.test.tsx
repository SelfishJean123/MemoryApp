import { render, screen, fireEvent } from "@testing-library/react";
import MemoryLogin from "./MemoryLogin";

test("renders memory login", () => {
  const memoryLogin = screen.getByTestId("memory-login");
  expect(memoryLogin).toBeInTheDocument();
});
