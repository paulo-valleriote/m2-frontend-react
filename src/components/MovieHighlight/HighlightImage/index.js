import { VideoLink } from './styles';

export const HighlightImage = ({ name, link }) => {
  return (
    <VideoLink
      src={`https://www.youtube.com/embed/${link}`}
      title={name}
    />
  );
};