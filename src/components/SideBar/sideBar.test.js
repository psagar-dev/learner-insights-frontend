import { render, screen } from '@testing-library/react';
import SideBar from './sideBar';
import DataContext from '../../context/DataContext';
import { MemoryRouter } from 'react-router-dom';

function renderWithProviders(ui, { providerProps, ...renderOptions } = {}) {
  return render(
    <MemoryRouter future={{ 
      v7_startTransition: true, 
      v7_relativeSplatPath: true 
      }} >
      <DataContext.Provider {...providerProps}>{ui}</DataContext.Provider>
    </MemoryRouter>,
    renderOptions
  );
}

describe('SideBar component', () => {
  test('renders username and menu items', () => {
    const providerProps = {
      value: {
        manage: { userdetails: { username: 'John Doe' } },
      },
    };
    renderWithProviders(<SideBar />, { providerProps });

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Students')).toBeInTheDocument();
  });
});
