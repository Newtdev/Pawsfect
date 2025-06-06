import {TIMEOUT_DEFAULT_DELAY} from '@shared/utils/constant';
import {useCallback, useEffect, useRef} from 'react';

type CallbackFn<Args extends unknown[] = []> = (...args: Args) => void;

interface TimeoutManager {
  timeoutRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
  setTimeout: (fn: CallbackFn, delay: number) => void;
  clearTimeout: () => void;
  resetTimeout: (fn: CallbackFn, delay: number) => void;
}

export function useTimeoutManager(): TimeoutManager {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimeoutFn = useCallback((): void => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const setTimeoutFn = useCallback(
    (fn: CallbackFn, delay: number = TIMEOUT_DEFAULT_DELAY): void => {
      clearTimeoutFn();
      timeoutRef.current = setTimeout(fn, delay);
    },
    [clearTimeoutFn],
  );

  useEffect(() => {
    return () => clearTimeoutFn();
  }, [clearTimeoutFn]);

  return {
    timeoutRef,
    setTimeout: setTimeoutFn,
    clearTimeout: clearTimeoutFn,
    resetTimeout: setTimeoutFn,
  };
}
