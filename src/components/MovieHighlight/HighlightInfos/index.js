import { intlFormat } from 'date-fns'
import { useEffect, useState } from "react"
import { ContentWrapper, HighlightDescription, HighlightGenresAndLaunchDate, HighlightTitleAndScore } from "./styles"

export const HighlightInfos = ({ genres_ids, title, releaseDate, overview, vote_average, getGenresName }) => {
  const [genreName, setGenreName] = useState([])

  useEffect(() => {
    const genres = async () => {
      try {
        const res = await getGenresName(genres_ids)

        return setGenreName(res.join(', '))
      } catch (error) {
        return console.log(error)
      }
    }
    genres();
  }, [getGenresName, genres_ids])

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
          <span>
            {genreName}
          </span>
          /
          <span>

          </span>
        </div>
      </HighlightGenresAndLaunchDate>

      <HighlightDescription>
        {overview}
      </HighlightDescription>

    </ContentWrapper>
  )
}