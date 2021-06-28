import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from '../App';

test('renders header with correct text', () => {
  const component = render(<App />);
  const header = component.getByTestId('header');

  expect(header.textContent).toBe("YNABB");
});
