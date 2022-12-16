import Modal from 'react-modal'
import { ModalContentWrapper, ModalMovieAbout, ModalMovieGenre, ModalGenres, ModalTitle } from './styles'

export const MovieModal = ({ isOpen, onRequestClose, movieInfos, genresNames }) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <ModalContentWrapper>
        <ModalTitle>
          {movieInfos.movieTitle}
        </ModalTitle>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieInfos.movieBackdrop}`}
          alt="Poster do Filme"
        />
        <ModalMovieAbout>
          {movieInfos.movieAbout || "(Este filme não possui descrição)"}
          <div className='movieGenresAndScore'>
            <ModalMovieGenre>
              {genresNames.map(genre =>
                <span className='movieGenres' key={genre}>
                  {genre}
                </span>
              )}
            </ModalMovieGenre>
            <span className='movieScore'>
              {movieInfos.movieScore}
            </span>
          </div>
        </ModalMovieAbout>
      </ModalContentWrapper>
    </Modal>
  )
}