import { HighlightImage } from "./HighlightImage";
import { HighlightInfos } from "./HighlightInfos";
import { ContentWrapper } from "./styles";
import { API_URL } from "../../services/API_URL";
import { useEffect, useState } from "react";

export const MovieHighlight = ({ getGenresName }) => {
  const [movieInfos, setMovieInfos] = useState([]);

  const getTodaysHighlight = async () => {
    try {
      const res = await API_URL.get('/movie/popular');
      const todaysHighlight = res.data.results[0];

      const {
        backdrop_path,
        genre_ids,
        title,
        release_date,
        overview,
        vote_average
      } = await todaysHighlight;

      return { backdrop_path, genre_ids, title, release_date, overview, vote_average }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getHighlight = async () => {
      try {
        const res = await getTodaysHighlight();

        return setMovieInfos(res)
      } catch (error) {
        console.log(error);
      }
    }

    getHighlight();
  }, [])


  return (
    <ContentWrapper>
      <HighlightImage
        backdrop_path={movieInfos.backdrop_path}
      />
      <HighlightInfos
        title={movieInfos.title}
        genres_ids={movieInfos.genre_ids}
        overview={movieInfos.overview}
        releaseDate={movieInfos.release_date}
        vote_average={movieInfos.vote_average}
        getGenresName={getGenresName}
      />
    </ContentWrapper>
  );
};