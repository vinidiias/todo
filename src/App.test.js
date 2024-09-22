import { render, screen } from '@testing-library/react';
import { act } from 'react'; // Corrigir: importar act diretamente de react
import App from './App';

test('renders learn react link', () => {
  act(() => { // Usando act corretamente
    render(<App />);
  });
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
