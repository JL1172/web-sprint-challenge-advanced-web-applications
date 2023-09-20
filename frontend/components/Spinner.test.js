// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import { render, screen } from "@testing-library/react"
import Spinner from "./Spinner";
import React from "react";

test("That the spinner component does not renders on props false",()=> {
  const value = false;
  render(<Spinner spinnerOn={value}/>)
  const h3 = screen.queryAllByText(/Please wait.../i)
  expect(h3).toHaveLength(0);
})
test("That the spinner component renders on props",()=> {
  const value = true;
  render(<Spinner spinnerOn={value}/>)
  const h3 = screen.queryAllByText(/Please wait.../i)
  expect(h3).not.toBeNull();
})
