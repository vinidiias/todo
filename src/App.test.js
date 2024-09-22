import { render, screen } from '@testing-library/react'; // Certifique-se de importar render e screen

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /learn react/i });
  expect(linkElement).toBeInTheDocument();
});
