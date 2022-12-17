import Modal from 'react-modal'
import { ModalContentWrapper, ModalMovieAbout, ModalMovieGenre, ModalTitle } from './styles'

export const MovieModal = ({ isOpen, onRequestClose, movieInfos, genresNames }) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <ModalContentWrapper moldalIsOpen={isOpen}>
        <ModalTitle>
          {movieInfos.movieTitle}
        </ModalTitle>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieInfos.movieBackdrop}`}
          alt="Poster do Filme"
        />
        <ModalMovieAbout>
          <div className='description'>
            {movieInfos.movieAbout || "(Este filme não possui descrição)"}
          </div>
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