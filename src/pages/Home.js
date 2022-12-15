import { Header } from "../components/Header"
import { MovieHighlight } from "../components/MovieHighlight"
import { Carousel } from "../components/Carousel"
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