import Slider from "react-slick";
import scoreStarIcon from '../../../assets/estrela.svg'
import { Card } from "./styles";

export const MovieSlider = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };
  return (
    <div>
      <Slider {...settings}>
        {movies.map(movie => {
          return (
            <Card bgImg={movie.moviePoster} key={movie.movieId}>
              <span>{movie.movieTitle}</span>
              <span><img src={scoreStarIcon} alt="score" />{movie.movieScore}</span>
            </Card>
          )
        })}
      </Slider>
    </div>
  )
} 