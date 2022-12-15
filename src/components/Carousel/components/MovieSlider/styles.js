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

  div {
    display: flex;

    position: absolute;
    bottom: 0;
    
    width: 100%;

    color: white;
    background-color: rgba(0,0,0,0.7);
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
    left: -80px;
  }

  .slick-next {
    right: -80px;
  }
`;