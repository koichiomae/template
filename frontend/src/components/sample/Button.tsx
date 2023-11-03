import { SampleCounter } from '../../hooks/sample/sampleCounter';

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ ...props }: ButtonProps) => {
  const { handleCountUp, handleCountDown } = SampleCounter();
  return (
    <>
      <button data-testid='button-count-up' onClick={props.onClick}>
        {props.text}
      </button>
    </>
  );
};
