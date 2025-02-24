import { useState, useEffect, useCallback, useRef } from 'react';

export const useThrottle = (callback, limit = 1000) => {
  const [isThrottled, setIsThrottled] = useState(false);
  const timeoutRef = useRef(null);
  const lastRun = useRef(Date.now());

  const throttledFunction = useCallback(
    (...args) => {
      const now = Date.now();

      if (!isThrottled) {
        callback(...args);
        lastRun.current = now;
        setIsThrottled(true);

        timeoutRef.current = setTimeout(() => {
          setIsThrottled(false);
        }, limit);
      }
    },
    [callback, limit, isThrottled]
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return [throttledFunction, isThrottled];
};

export const useRequestThrottle = (requestCallback, options = {}) => {
  const {
    limit = 1000,
    maxRetries = 3,
    backoffMultiplier = 2,
    onError,
  } = options;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const retryCount = useRef(0);

  const executeRequest = useCallback(
    async (...args) => {
      if (isLoading) return;

      try {
        setIsLoading(true);
        setError(null);
        const result = await requestCallback(...args);
        retryCount.current = 0;
        return result;
      } catch (err) {
        setError(err);
        
        if (retryCount.current < maxRetries) {
          retryCount.current += 1;
          const backoffTime = limit * Math.pow(backoffMultiplier, retryCount.current);
          
          await new Promise(resolve => setTimeout(resolve, backoffTime));
          return executeRequest(...args);
        }

        if (onError) {
          onError(err);
        }
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [requestCallback, limit, maxRetries, backoffMultiplier, onError, isLoading]
  );

  const [throttledExecute] = useThrottle(executeRequest, limit);

  return {
    execute: throttledExecute,
    isLoading,
    error,
    retryCount: retryCount.current,
  };
};