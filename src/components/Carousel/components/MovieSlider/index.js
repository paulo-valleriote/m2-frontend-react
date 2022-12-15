import Slider from "react-slick";

import scoreStarIcon from '../../../../assets/estrela.svg'
import prevArrow from '../../../../assets/arrow-left-dark.svg'
import nextArrow from '../../../../assets/arrow-right-dark.svg'

import { Card, ContentWrapper } from "./styles";
import { SampleArrow } from "./SampleArrow";

export const MovieSlider = ({ movies }) => {

  return (
    <ContentWrapper>
      <Slider {
        ...{
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 5,
          nextArrow: <SampleArrow direction={nextArrow} />,
          prevArrow: <SampleArrow direction={prevArrow} />,
        }}
      >
        {movies.map(movie => {
          return (
            <Card bgImg={movie.moviePoster} key={movie.movieId}>
              <div>
                <span>{movie.movieTitle}</span>
                <span><img src={scoreStarIcon} alt="score" />{movie.movieScore}</span>
              </div>
            </Card>
          )
        })}
      </Slider>
    </ContentWrapper >
  )
} 