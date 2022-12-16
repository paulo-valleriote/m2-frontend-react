import styled from 'styled-components'

export const ContentWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10rem;

  padding: 2rem 0;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  img {
    width: 2.6rem;
    height: 2.6rem;
  }

  h1 {
    font-size: 1.875rem;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 4rem;

  input {
    width: 18.75rem;
    height: 3rem;

    padding: 1rem;

    font-size: 1rem;

    background-color: var(--secondary-bg-color);
    border: none;
  }

  img {
    width: 2rem;
    height: 2rem;

    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;