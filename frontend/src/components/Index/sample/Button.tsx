import { SampleCounter } from '../../../hooks/sample/sampleCounter';
import { ButtonProps } from './Button.props';

export const Button = ({ ...props }: ButtonProps) => {
  const { handleCountUp, handleCountDown } = SampleCounter();
  return (
    <>
      <button data-testid='button-count-up' onClick={props.onClick} className='bg-gray-300 px-4'>
        {props.text}
      </button>
    </>
  );
};
