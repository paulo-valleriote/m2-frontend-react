import { Header } from "../components/Header"
import { MovieHighlight } from "../components/MovieHighlight"
import { Carousel } from "../components/MovieSlider"
import { ContentWrapper } from "./styles"

export const Home = () => {
  return (
    <ContentWrapper>
      <Header />
      <Carousel />
      <MovieHighlight />
    </ContentWrapper>
  )
}