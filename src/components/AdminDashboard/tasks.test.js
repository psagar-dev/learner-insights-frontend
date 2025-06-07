import { render, screen } from '@testing-library/react';
import Tasks from './tasks';

describe('Tasks component', () => {
  test('renders tasks text', () => {
    render(<Tasks />);
    expect(screen.getByText('tasks')).toBeInTheDocument();
  });
});
