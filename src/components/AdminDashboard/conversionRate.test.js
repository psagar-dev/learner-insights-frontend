import { render, screen } from '@testing-library/react';
import ConversionRate from './conversionRate';

describe('ConversionRate component', () => {
  test('renders conversionRate text', () => {
    render(<ConversionRate />);
    expect(screen.getByText('conversionRate')).toBeInTheDocument();
  });
});
