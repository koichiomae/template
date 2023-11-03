import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './';
import { propObj } from './Button.props';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['Test/part/Button'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button {...propObj.default} />,
};
