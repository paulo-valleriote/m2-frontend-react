import { ContentWrapper, InputsWrapper, Logo } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import { SearchMovieInput } from '../SearchMovieInput';

export const Header = ({ theme, changeTheme, suggestions }) => {
  return (
    <ContentWrapper>
      <Logo>
        <img src={theme.logo} alt="Logo" />
        <h1>CUBOS FLIX</h1>
      </Logo>
      <InputsWrapper>
        <SearchMovieInput />
        <ThemeContext.Consumer>
          {() => (
            <img
              src={theme.themeSwitch}
              alt="Mudar para tema escuro"
              onClick={changeTheme}
            />
          )}
        </ThemeContext.Consumer>
      </InputsWrapper>
    </ContentWrapper>
  );
};