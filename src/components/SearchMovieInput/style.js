import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const SearchInput = styled.input`
    position: relative;

    width: 18.75rem;
    height: 3rem;

    padding: 1rem;

    font-size: 1rem;

    color: var(--text-color);

    background-color: var(--secondary-bg-color);
    border: none;

    z-index: 2;
`

export const DropDownList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: absolute;
  top: 6.25rem;

  max-width: 18.75rem;
  max-height: 20rem;
  overflow-y: scroll;
  scroll-behavior: smooth;

  padding: 1rem;

  background-color: var(--bg-color);

  z-index: 1;

  ${props => props.hasContent ? 'display: flex' : 'display: none'}
`

export const Suggestions = styled.div`
  display: flex;

  align-items: center;
  padding-bottom: 1rem;
  
  gap: 1rem;
  
  border-bottom: var(--text-color) 1px solid;

  transition: transform 0.2s;

  &:hover { 
    transform: scale(1.05);
  }

  img {
    width: 3rem;
    height: 4rem;
  }
`