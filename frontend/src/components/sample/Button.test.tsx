import React from 'react';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Button />);
    expect(screen.getByTestId('button1').textContent).toBe('Click');
  });
});
