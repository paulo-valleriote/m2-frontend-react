import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 1rem;

  height: 296px;

  margin-bottom: 24px;

  background-color: var(--secondary-bg-color);

  div> div{
    margin-right: 8px;
  }
`;