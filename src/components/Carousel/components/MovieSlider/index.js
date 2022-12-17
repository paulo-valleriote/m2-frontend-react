import Slider from "react-slick";

import scoreStarIcon from '../../../../assets/estrela.svg'

import { Card, ContentWrapper } from "./styles";
import { SampleArrow } from "../SampleArrow";
import { ThemeContext } from "../../../../contexts/ThemeContext";

export const MovieSlider = ({ movies, openModal }) => {

  return (
    <ContentWrapper>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Slider {
            ...{
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 6,
              slidesToScroll: 5,
              nextArrow: <SampleArrow direction={theme.nextArrow} />,
              prevArrow: <SampleArrow direction={theme.prevArrow} />,
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
        )}
      </ThemeContext.Consumer>
    </ContentWrapper >
  )
} 