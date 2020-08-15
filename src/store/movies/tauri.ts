import { promisified } from 'tauri/api/tauri';
import { EnrichedImdbName, ImdbNameWithMoviesAndActresses } from './types';

export function searchMoviesByName(needle: string): Promise<EnrichedImdbName[]> {
  return promisified<EnrichedImdbName[]>({
    cmd: 'searchMovies',
    needle,
  });
}

export function searchMoviesWhereActressIsTaller(
  needle: string
): Promise<ImdbNameWithMoviesAndActresses[]> {
  return promisified<ImdbNameWithMoviesAndActresses[]>({
    cmd: 'searchTaller',
    needle,
  });
}
