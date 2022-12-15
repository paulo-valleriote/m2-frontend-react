import styled from 'styled-components'

export const ContentWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  font-size: 2rem;

  gap: 0.5rem;

  img {
    width: 2.6rem;
    height: 2.6rem;
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

    font: 1rem;
  }

  img {
    width: 2rem;
    height: 2rem;
  }
`;