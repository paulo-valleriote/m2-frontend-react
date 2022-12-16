import Slider from "react-slick";

import scoreStarIcon from '../../../../assets/estrela.svg'
import prevArrow from '../../../../assets/arrow-left-dark.svg'
import nextArrow from '../../../../assets/arrow-right-dark.svg'

import { Card, ContentWrapper } from "./styles";
import { SampleArrow } from "./SampleArrow";

export const MovieSlider = ({ movies, openModal }) => {

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
            <Card
              bgImg={movie.moviePoster}
              onClick={() => openModal(movie)}
              key={movie.movieId}
            >
              <div>
                <span
                  title={movie.movieTitle}
                  className="movieTitle"
                >
                  {movie.movieTitle}
                </span>

                <span className="movieScore">
                  {movie.movieScore}
                  <img src={scoreStarIcon} alt="score" />
                </span>
              </div>
            </Card>
          )
        })}
      </Slider>
    </ContentWrapper >
  )
} 