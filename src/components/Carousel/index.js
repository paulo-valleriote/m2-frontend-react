import { useEffect, useState } from "react";
import { API_URL } from "../../services/API_URL";
import { MovieSlider } from "./components/MovieSlider";
import { ContentWrapper } from "./styles";

export const Carousel = ({ openModal }) => {
  const [movieList, setMovieList] = useState([]);

  const getMovies = async () => {
    try {
      const res = await API_URL.get('/movie/popular')
      const movieList = res.data.results

      const movies = []

      for (const movie of movieList) {
        movies.push({
          movieId: movie.id,
          moviePoster: movie.poster_path,
          movieBackdrop: movie.backdrop_path,
          movieTitle: movie.title,
          movieScore: movie.vote_average,
          movieGenres: movie.genre_ids,
          movieAbout: movie.overview
        });
      }

      return movies
    } catch (error) {
      return console.log(error)
    }
  }

  useEffect(() => {
    getMovies().then(res => setMovieList(res))
  }, [])

  return (
    <ContentWrapper>
      <div>
        <MovieSlider movies={movieList} openModal={openModal} />
      </div>
    </ContentWrapper>
  );
};