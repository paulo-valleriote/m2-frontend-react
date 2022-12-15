import logo from '../../assets/logo-dark.png'
import themeIcon from '../../assets/light-mode.svg'
import { ContentWrapper, InputsWrapper, Logo } from './styles';

export const Header = () => {
  return (
    <ContentWrapper>
      <Logo>
        <img src={logo} alt="Logo" />
        <h2>CUBOS FLIX</h2>
      </Logo>
      <InputsWrapper>
        <input placeholder='Digite o nome do filme' />
        <img src={themeIcon} alt="Mudar para tema escuro" />
      </InputsWrapper>
    </ContentWrapper>
  );
};