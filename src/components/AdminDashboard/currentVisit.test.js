import { render, screen } from '@testing-library/react';
import CurrentVisit from './currentVisit';

describe('CurrentVisit component', () => {
  test('renders statistics titles', () => {
    render(<CurrentVisit />);
    expect(screen.getByText('Current Statistics')).toBeInTheDocument();
    expect(screen.getByText('Course Completion')).toBeInTheDocument();
    expect(screen.getByText('Placement Rate')).toBeInTheDocument();
  });
});
