import { Header } from "../components/Header"
import { MovieHighlight } from "../components/MovieHighlight"
import { Carousel } from "../components/Carousel"
import { MovieModal } from "../components/MovieModal"

import { ThemeContext } from '../contexts/ThemeContext'

import { ContentWrapper } from "./styles"
import { useModal } from "../hooks/useModal"

export const Home = () => {
  const { modalIsOpen,
    closeModal,
    modalMovieInfos,
    modalGenres,
    getGenresName,
    openModal } = useModal()

  return (
    <ContentWrapper>

      <ThemeContext.Consumer>
        {({ theme, changeTheme }) => (
          <>

            <Header
              theme={theme}
              changeTheme={changeTheme}

            />

            <Carousel openModal={openModal} />

            <MovieHighlight getGenresName={getGenresName} />

            <MovieModal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              movieInfos={modalMovieInfos}
              genresNames={modalGenres}
            />

          </>
        )}
      </ThemeContext.Consumer>

    </ContentWrapper>
  )
}

