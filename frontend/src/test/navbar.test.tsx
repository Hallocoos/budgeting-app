import { render } from '@testing-library/react';
import Navbar from '../components/navbar';

test('all elements present', () => {
  const navbar = render(<Navbar />);
  const title = navbar.getByTestId('title');
  const homeButton = navbar.getByTestId('homeButton');

  expect(title.textContent).toBe('YNABB');
  expect(homeButton).toBeInTheDocument();
});