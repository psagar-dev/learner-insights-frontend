import { render, screen } from '@testing-library/react';
import NavBar from './navBar';
import DataContext from '../../context/DataContext';
import { MemoryRouter } from 'react-router-dom';

function renderWithProviders(ui, { providerProps, route = '/' } = {}) {
  return render(
    <MemoryRouter initialEntries={[route]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
>
      <DataContext.Provider {...providerProps}>{ui}</DataContext.Provider>
    </MemoryRouter>
  );
}

describe('NavBar component', () => {
  test('renders search input and SecureLooper text', () => {
    const providerProps = {
      value: { manage: { userdetails: { username: 'John Doe' } } },
    };

    renderWithProviders(<NavBar />, { providerProps });

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(screen.getByText('SecureLooper')).toBeInTheDocument();
  });
});
