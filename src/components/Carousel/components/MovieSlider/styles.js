import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  position: relative;
  
  width: 11rem;
  height: 16.5rem;

  background-image: url(https://image.tmdb.org/t/p/w500${props => props.bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  cursor: pointer;

  div {
    display: flex;
    justify-content: space-between;

    position: absolute;
    bottom: 0;
    
    padding: 0.5rem;

    width: 100%;

    color: white;
    background-color: rgba(0,0,0,0.7);
  }

  span {
    display: inline-block;
    align-items: center;

    gap: 0.25rem;

    font-size: 0.75rem;
    font-weight: 700;

    &.movieTitle {
      max-width: 7rem;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    &.movieScore {
      display: flex;
    }

    img {
      width: 0.625rem;
      height: 0.625rem;
    }
  }
`;

export const ContentWrapper = styled.div`
  .slick-next::before,
  .slick-prev::before{
    display: none;
  }
  
  .slick-next,
  .slick-prev{
    width: 3rem;
    height: 3rem;
    margin: 0;
    
    top: 50%;
    bottom: 0;
    
    z-index: 100;
  }

  .slick-prev {
    left: -5rem;
  }

  .slick-next {
    right: -5rem;
  }
`;