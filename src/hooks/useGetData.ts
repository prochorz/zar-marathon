import { useLayoutEffect, useState } from 'react';
import req from '../utils/request';

function useGetData<T>(endpoint: string, query?: object, deps: any[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  async function getData(): Promise<void> {
    setIsLoading(true);

    try {
      const result = await req<T>(endpoint, query);
      setData(result);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useLayoutEffect(() => {
    getData();
  }, deps);

  return {
    data,
    isError,
    isLoading,
  };
}

export default useGetData;
