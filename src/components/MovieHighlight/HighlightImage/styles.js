import styled from 'styled-components'

export const VideoLink = styled.div`
  width: 35rem;
  height: 19.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(https://image.tmdb.org/t/p/w500${props => props.bgImg});
  background-position: center;
  background-size: cover;
  background-color: black;
`;