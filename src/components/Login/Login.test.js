import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DataContext from '../../context/DataContext';
jest.mock('axios');
import Login from './Login';

function renderWithProviders(ui, { providerProps } = {}) {
  return render(
    <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
>
      <DataContext.Provider {...providerProps}>{ui}</DataContext.Provider>
    </MemoryRouter>
  );
}

describe('Login component', () => {
  test('renders form inputs and button', () => {
    const providerProps = { value: { manage: { userdetails: { username: '' } } } };
    renderWithProviders(<Login />, { providerProps });

    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/password/i, { selector: 'input' })
    ).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /user type/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });
});
