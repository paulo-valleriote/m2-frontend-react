import { useState, useRef } from 'react'
import { API_URL } from '../../services/API_URL';
import { ContentWrapper, DropDownList, SearchInput, Suggestions } from './style';
import { useModal } from '../../hooks/useModal/index'
import { MovieModal } from '../MovieModal';

export const SearchMovieInput = () => {
  const [movieSuggestions, setMovieSuggestions] = useState([]);
  const [listHasContent, setListHasContent] = useState(false);

  const textInput = useRef('')

  const { modalIsOpen,
    closeModal,
    modalMovieInfos,
    modalGenres,
    openModal } = useModal()

  const searchMovie = async (event) => {
    textInput.current.value ? setListHasContent(true) : setListHasContent(false)

    try {
      const movieList = await API_URL.get('/search/movie', {
        params: {
          query: event.target.value
        }
      })

      const movieResults = movieList.data.results

      const suggestions = []

      for (const movie of movieResults) {
        suggestions.push({
          movieId: movie.id,
          moviePoster: movie.poster_path,
          movieBackdrop: movie.backdrop_path,
          movieTitle: movie.title,
          movieScore: movie.vote_average,
          movieGenres: movie.genre_ids,
          movieAbout: movie.overview
        });
      }

      setMovieSuggestions(suggestions)
    } catch (error) {
      console.log(error)
    }
  }

  const openSearchedMovieModal = (movieInfos) => {
    openModal(movieInfos)
    setListHasContent(false)
    textInput.current.value = ''
  }

  return (
    <ContentWrapper>
      <SearchInput
        placeholder='Digite o nome do filme'
        autoComplete="off"
        id="searchInput"
        list="dropDownMenu"
        onChange={searchMovie}
        ref={textInput}
      />
      <DropDownList hasContent={listHasContent} >
        {movieSuggestions.map(movieSuggestion => (
          <Suggestions
            value={movieSuggestion.movieTitle}
            key={movieSuggestion.movieId}
            onClick={(event) => openSearchedMovieModal(movieSuggestion, event.target)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movieSuggestion.moviePoster}`}
              alt='poster'
            />
            {movieSuggestion.movieTitle}
          </Suggestions>
        ))}
      </DropDownList>

      <MovieModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        movieInfos={modalMovieInfos}
        genresNames={modalGenres}
      />
    </ContentWrapper>
  )
}