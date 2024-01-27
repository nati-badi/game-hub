import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
    metacritic: number;
  }
  
  interface fetchGamesResponse {
    count: number;
    results: Game[];
  }
  
const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true)
      apiClient
        .get<fetchGamesResponse>("/games", {signal: controller.signal})
        .then((res) => {
          setGames(res.data.results)
          setLoading(false)
        })
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message)
        });

      return () => controller.abort();
    }, []);

  return {games, error, isLoading};
}

export default useGames;