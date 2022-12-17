import { VideoLink } from './styles';

export const VideoPlayer = ({ name, link }) => {
  return (
    <VideoLink
      src={`https://www.youtube.com/embed/${link}`}
      title={name}
    />
  );
};