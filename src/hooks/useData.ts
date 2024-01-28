import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface fetchResponse<T> {
    count: number;
    results: T[];
}

function useData<T>(endpoint: string) {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true)
      apiClient
        .get<fetchResponse<T>>(endpoint, {signal: controller.signal})
        .then((res) => {
          setData(res.data.results)
          setLoading(false)
        })
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message)
        });

      return () => controller.abort();
    }, []);

  return {data, error, isLoading}
}

export default useData