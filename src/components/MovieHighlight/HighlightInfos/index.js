import { useEffect, useState } from "react"
import { API_URL } from "../../../services/API_URL"
import { ContentWrapper, HighlightDescription, HighlightGenresAndLaunchDate, HighlightTitleAndScore } from "./styles"

export const HighlightInfos = ({ genres_ids, title, releaseDate, overview, vote_average }) => {
  const [genreName, setGenreName] = useState([])

  useEffect(() => {
    const getGenresName = async () => {
      const genres = []
      try {
        const res = await API_URL.get('/genre/movie/list')
        const genresList = res.data.genres

        for (const id of genres_ids) {
          const searchedGenre = await genresList.find(genre => genre.id === id);
          genres.push(searchedGenre.name)
        }
        return genres
      } catch (error) {
        return console.log(error)
      }
    }

    const genres = async () => {
      await getGenresName()
        .then(res => setGenreName(res))
    }
    genres();
  }, [genres_ids])

  return (
    <ContentWrapper>

      <HighlightTitleAndScore>
        <h3>
          {title}
        </h3>
        <span className="score">
          {vote_average}
        </span>
      </HighlightTitleAndScore>

      <HighlightGenresAndLaunchDate>
        <div>
          <span>{genreName}</span> / <span> {releaseDate}</span>
        </div>
      </HighlightGenresAndLaunchDate>

      <HighlightDescription>
        {overview}
      </HighlightDescription>

    </ContentWrapper>
  )
}