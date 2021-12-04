import {useCallback, useEffect, useState} from 'react';

export enum STATUS {
  IDLE = 'idle',
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error',
}

const useAsync = <T extends any>(asyncFunction: any, immediate = true) => {
  const [status, setStatus] = useState<STATUS>(STATUS.IDLE);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null as unknown as T);
  const [error, setError] = useState(null as unknown as Error);

  const execute = useCallback(() => {
    setLoading(true);
    setStatus(STATUS.PENDING);
    setValue(null as unknown as T);
    setError(null as unknown as Error);
    return asyncFunction()
      .then((response: any) => {
        setValue(response);
        setLoading(false);
        setStatus(STATUS.SUCCESS);
      })
      .catch((err: Error) => {
        setLoading(false);
        setError(err);
        setStatus(STATUS.ERROR);
        setTimeout(() => {
          setStatus(STATUS.IDLE);
        }, 3000);
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute().catch();
    }
  }, [immediate]);
  return {execute, loading, status, value, error};
};

export default useAsync;
