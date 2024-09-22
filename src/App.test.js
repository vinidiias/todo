import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NavBar, ToDo, and Footer components', () => {
  render(<App />);

  // Verifica se algo específico do NavBar é renderizado
  const navBarElement = screen.getByText(/navbar/i); // Altere o texto de acordo com o que é renderizado no NavBar
  expect(navBarElement).toBeInTheDocument();

  // Verifica se algo específico do ToDo é renderizado
  const todoElement = screen.getByText(/todo/i); // Altere o texto de acordo com o que é renderizado no ToDo
  expect(todoElement).toBeInTheDocument();

  // Verifica se algo específico do Footer é renderizado
  const footerElement = screen.getByText(/footer/i); // Altere o texto de acordo com o que é renderizado no Footer
  expect(footerElement).toBeInTheDocument();
});
