import {renderHook, act} from '@testing-library/react-hooks';
import useDebounceFunction from '../hooks/useDebounceFunction';

// Mock useTimeoutManager
jest.mock('@shared/hooks/useTimeoutManager', () => {
  let timeout: NodeJS.Timeout | null = null;
  return {
    useTimeoutManager: () => ({
      timeoutRef: {current: timeout},
      setTimeout: (fn: () => void, delay: number) => {
        timeout = setTimeout(fn, delay);
        return timeout;
      },
      clearTimeout: () => {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
      },
    }),
  };
});

describe('useDebounceFunction', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.resetAllMocks();
  });

  it('calls the callback after the specified delay', () => {
    const cb = jest.fn();
    const {result} = renderHook(() => useDebounceFunction(cb, {delay: 500}));

    act(() => {
      result.current('test');
    });

    expect(cb).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(499);
    });
    expect(cb).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(cb).toHaveBeenCalledWith('test');
  });

  it('resets the timer if called again before delay', () => {
    const cb = jest.fn();
    const {result} = renderHook(() => useDebounceFunction(cb, {delay: 300}));

    act(() => {
      result.current('first');
      jest.advanceTimersByTime(200);
      result.current('second');
      jest.advanceTimersByTime(200);
    });

    expect(cb).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(cb).toHaveBeenCalledWith('second');
    expect(cb).toHaveBeenCalledTimes(1);
  });

  // it('calls the callback immediately and after delay if runImmediately is true', () => {
  //     const cb = jest.fn();
  //     const { result } = renderHook(() =>
  //         useDebounceFunction(cb, { delay: 400, runImmediately: true })
  //     );

  //     act(() => {
  //         result.current('immediate');
  //     });

  //     expect(cb).toHaveBeenCalledWith('immediate');
  //     expect(cb).toHaveBeenCalledTimes(1);

  //     act(() => {
  //         jest.advanceTimersByTime(400);
  //     });

  //     expect(cb).toHaveBeenCalledTimes(2);
  // });

  // it('calls immediately only on first invocation when runImmediately is true, debounces subsequent calls', () => {
  //     const cb = jest.fn();
  //     const { result } = renderHook(() =>
  //         useDebounceFunction(cb, { delay: 200, runImmediately: true })
  //     );

  //     act(() => {
  //         result.current('first');
  //     });
  //     act(() => {
  //         jest.advanceTimersByTime(0);
  //     });

  //     act(() => {
  //         result.current('second');
  //     });

  //     expect(cb).toHaveBeenCalledTimes(1);

  //     act(() => {
  //         jest.advanceTimersByTime(200);
  //     });

  //     expect(cb).toHaveBeenCalledTimes(2);
  //     expect(cb).toHaveBeenLastCalledWith('second');
  // });

  it('cancels the debounced call if cancel is called', () => {
    const cb = jest.fn();
    const {result} = renderHook(() => useDebounceFunction(cb, {delay: 500}));

    act(() => {
      result.current('cancel');
      result.current.cancel?.();
      jest.advanceTimersByTime(500);
    });

    expect(cb).not.toHaveBeenCalled();
  });
});
