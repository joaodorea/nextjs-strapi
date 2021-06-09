import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="img/logo.svg"
      alt="Imagem de um átomo e React Avançado escroto ao lado."
    />
    <S.Title>React avançado</S.Title>
    <S.Description>
      Typescript, ReactJs, NextJs e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um dev com a tela com códigos"
    />
  </S.Wrapper>
)

export default Main
