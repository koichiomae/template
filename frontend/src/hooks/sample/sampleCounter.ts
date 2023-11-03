import { useState } from 'react';
export const SampleCounter = () => {
  const [count, setCount] = useState(0);

  const handleCountUp = () => {
    setCount((prev) => prev + 1);
  };

  const handleCountDown = () => {
    setCount((prev) => prev - 1);
  };
  return {
    count,
    handleCountUp,
    handleCountDown,
  };
};
