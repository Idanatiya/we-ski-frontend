import * as React from 'react';

const useDebounce = <T>(value: T, time: number, callback: VoidFunction) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, time);
    return () => clearTimeout(timer);
  }, [callback, time, value]);
};

export default useDebounce;
