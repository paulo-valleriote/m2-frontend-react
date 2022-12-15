import playIcon from '../../../assets/play.svg'
import { VideoLink } from './styles';

export const HighlightImage = ({ backdrop_path }) => {
  return (
    <a href='/' target="_blank">
      <VideoLink bgImg={backdrop_path}>
        <img src={playIcon} alt='Play' />
      </VideoLink>
    </a>
  );
};