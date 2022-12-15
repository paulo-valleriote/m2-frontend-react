import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 560px;
`;

export const HighlightTitleAndScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.5rem;

  font-size: 24px;
  font-weight: 700;
  line-height: 150%;

  .score {
    color: var(--score-color);
  }
`;

export const HighlightGenresAndLaunchDate = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 2.5rem;

  font-weight: 500;
  font-size: 0.75rem;
  line-height: 150%;

  span {
    text-transform: uppercase;
  }
`;

export const HighlightDescription = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
`;