import { VideoPlayer } from "../VideoPlayer/index";
import { HighlightInfos } from "./HighlightInfos";
import { ContentWrapper } from "./styles";
import { API_URL } from "../../services/API_URL";
import { useEffect, useState } from "react";

export const MovieHighlight = ({ getGenresName }) => {
  const [movieInfos, setMovieInfos] = useState([]);

  const getTodaysHighlight = async () => {
    try {
      const highlightInfo = await API_URL.get('/movie/popular');
      const todaysHighlight = highlightInfo.data.results[0];

      const {
        id,
        backdrop_path,
        genre_ids,
        title,
        release_date,
        overview,
        vote_average
      } = await todaysHighlight;

      const highlightMovieInfo = await API_URL.get(`/movie/${id}/videos`)

      const { name, key } = highlightMovieInfo.data.results
        .filter(movie => movie.name.includes('Trailer') && movie.official)[0]

      return { id, backdrop_path, genre_ids, title, release_date, overview, vote_average, name, key }
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
      <VideoPlayer
        videoName={movieInfos.name}
        link={movieInfos.key}
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