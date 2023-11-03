import { Button } from './Button';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe('Smaple', () => {
  it('サンプル用1', async () => {
    const mock = jest.fn();
    render(<Button text='test' onClick={mock} />);

    const button = screen.getByTestId('button-count-up');
    expect(button.textContent).toBe('test');

    expect(mock).toHaveBeenCalledTimes(0);

    await userEvent.click(button);

    expect(mock).toHaveBeenCalledTimes(1);
  });
});
