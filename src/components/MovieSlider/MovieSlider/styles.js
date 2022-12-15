import styled from 'styled-components';

export const Card = styled.div`
  display: flex;

  width: 11rem;
  height: 16.5rem;

  background-image: url(https://image.tmdb.org/t/p/w500${props => props.bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;