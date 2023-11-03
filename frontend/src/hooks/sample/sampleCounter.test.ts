import { renderHook, act } from '@testing-library/react';
import { SampleCounter } from './sampleCounter';

test('useCounter increments count', () => {
  const { result } = renderHook(() => SampleCounter());

  // テストフックの初期状態を確認
  expect(result.current.count).toBe(0);

  // increment関数を呼び出してカウントを増加
  act(() => {
    result.current.handleCountUp();
  });
  expect(result.current.count).toEqual(1);

  act(() => {
    result.current.handleCountDown();
  });
  expect(result.current.count).toEqual(0);
});
