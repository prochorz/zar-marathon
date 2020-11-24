import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay: number): string => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLocalValue(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value]);

  return localValue;
};

export default useDebounce;
