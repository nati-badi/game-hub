import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Genres {
    id: number;
    name: string;
}

interface fetchGenresResponse {
    count: number;
    results: Genres[];
}

function useGenres() {
    const [genres, setGenres] = useState<Genres[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true)
      apiClient
        .get<fetchGenresResponse>("/games", {signal: controller.signal})
        .then((res) => {
          setGenres(res.data.results)
          setLoading(false)
        })
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message)
        });

      return () => controller.abort();
    }, []);

  return {genres, error, isLoading}
}

export default useGenres