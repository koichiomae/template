export interface ButtonProps {
  text: 'text';
  onClick: () => void;
}

export const baseId = 'test-part-button';

export const Button: React.FC<ButtonProps> = ({ ...props }) => (
  <>
    <button onClick={props.onClick}>{props.text}</button>
  </>
);
