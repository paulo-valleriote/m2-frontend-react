import styled from 'styled-components'

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 150%;

  img {
    width: 100%;

    margin-bottom: 1.5rem;
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 2.5rem;

  font-size: 2.25rem;
`;

export const ModalMovieAbout = styled.div`
  font-size: 1.25rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .description {
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      overflow-y: scroll;
    }
  }

  .movieGenresAndScore {
    margin-top: 1.25rem;
  }

  .movieGenres,
  .movieScore {
    padding: 0.5rem;

    color: white;

    border-radius: 0.5rem;
  }

  .movieGenres {
    background: var(--modal-genres-bg-color);
  }

  .movieScore {
    background: var(--score-color);
  }
`;

export const ModalMovieGenre = styled.div`
  display: flex;
  
  gap: 0.75rem;
  
`;
