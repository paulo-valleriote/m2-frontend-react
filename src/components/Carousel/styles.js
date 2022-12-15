import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;

  height: 296px;

  margin: 0 auto;
  margin-bottom: 24px;

  background-color: var(--secondary-bg-color);

  .slick-track {
    display: flex;
    gap: 1rem;
  }
`;