import { Header } from "../components/Header"
import { MovieHighlight } from "../components/MovieHighlight"
import { Carousel } from "../components/Carousel"
import { ContentWrapper } from "./styles"
import { useState } from "react"
import { API_URL } from "../services/API_URL"
import { MovieModal } from "../components/MovieModal"

export const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMovieInfos, setModalMovieInfos] = useState({})
  const [modalGenres, setModalGenres] = useState([])

  const openModal = (modalInfos) => {
    setModalIsOpen(true)
    setModalMovieInfos(modalInfos)
    setGenresNames(modalInfos.movieGenres)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const getGenresName = async (genresIDs) => {
    const genres = []
    try {
      const genresToFind = genresIDs
      const res = await API_URL.get('/genre/movie/list')
      const genresList = res.data.genres

      await genresToFind.forEach(genreId => {
        const searchedGenre = genresList.find(genre => genre.id === genreId);
        genres.push(searchedGenre.name)
      })

      return genres
    } catch (error) {
      return console.log(error)
    }
  }

  const setGenresNames = async (genres) => {
    setModalGenres(await getGenresName(genres));
  }

  return (
    <ContentWrapper>
      <Header />
      <Carousel openModal={openModal} />
      <MovieHighlight getGenresName={getGenresName} />
      <MovieModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        movieInfos={modalMovieInfos}
        genresNames={modalGenres}
      />
    </ContentWrapper>
  )
}

