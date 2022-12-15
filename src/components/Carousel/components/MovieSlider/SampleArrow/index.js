
export const SampleArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: `url(${props.direction})`, backgroundRepeat: 'no-repeat' }}
      onClick={onClick}
    />
  );
} 