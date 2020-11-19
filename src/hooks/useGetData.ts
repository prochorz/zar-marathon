import { useLayoutEffect, useState } from 'react';
import req from '../utils/request';

function useGetData(endpoint: string, query?: object, deps: any[] = []) {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  async function getData() {
    setIsLoading(true);

    try {
      const result = await req(endpoint, query);
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
