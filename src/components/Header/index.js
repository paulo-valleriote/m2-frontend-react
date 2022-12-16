import { ContentWrapper, InputsWrapper, Logo } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';

export const Header = ({ theme, changeTheme }) => {
  return (
    <ContentWrapper>
      <Logo>
        <img src={theme.logo} alt="Logo" />
        <h1>CUBOS FLIX</h1>
      </Logo>
      <InputsWrapper>
        <input placeholder='Digite o nome do filme' />
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