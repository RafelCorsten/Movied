export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: any;
  budget?: number;
  genres?: any;
  homepage?: string;
  genre_ids?: number[];
  imdb_id?: string;
  id: number;
  overview: string;
  popularity: number;
  original_language: string;
  original_title: string;
  production_companies?: any;
  production_countries?: any;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  revenue?: number;
  runtime?: number;
  spoken_languages?: any;
  status?: string;
  tagline?: string;
  vote_average: number;
  vote_count: number;
}