import { render, screen } from '@testing-library/react';
import { Button, ButtonProps, baseId } from './';
import { propObj } from './Button.props';

let props: ButtonProps;

describe('default', () => {
  beforeEach(() => {
    props = propObj.default;
  });

  it('default の props に対するテストケースを書くこと', () => {
    render(<Button {...props} />);
    expect(screen.getByTestId(baseId)).toBeInTheDocument();
  });
});
