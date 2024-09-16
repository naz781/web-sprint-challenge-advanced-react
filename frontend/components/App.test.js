// Write your tests here
import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import AppFunctional from './AppFunctional';

test('sanity', () => {
  expect(true).toBe(true)
})

test('rendering all coordinates and steps', () => {
  render(<AppFunctional />);
  console.log('AppFunctional')
  expect(screen.getByText("You moved 0 times")).toBeInTheDocument();
});

test("resets all the state", () => {
  render(<AppFunctional />);
  fireEvent.click(screen.getByText("LEFT"));
  fireEvent.click(screen.getByText("reset"));
  expect(screen.getByText(/You moved 0 times/)).toBeInTheDocument(); 
});

