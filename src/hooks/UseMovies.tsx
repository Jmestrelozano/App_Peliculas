import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';

interface UseMoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}

export const UseMovies = () => {
  const [isLoading, setIsloading] = useState(true);
  const [movieState, setMovieState] = useState<UseMoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [],
  });

  const getMovies = async () => {
    const resp = movieDB.get<MovieDBNowPlaying>('/now_playing');
    const respPop = movieDB.get<MovieDBNowPlaying>('/popular');
    const respTop = movieDB.get<MovieDBNowPlaying>('/top_rated');
    const respUp = movieDB.get<MovieDBNowPlaying>('/upcoming');

    const response = await Promise.all([resp, respPop, respTop, respUp]);

    setMovieState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upComing: response[3].data.results,
    });
    setIsloading(!isLoading);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...movieState,
    isLoading,
  };
};
