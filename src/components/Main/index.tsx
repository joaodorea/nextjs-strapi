import * as S from './styles'

const Main = ({
  title = 'React avançado',
  description = 'Typescript, ReactJs, NextJs e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="img/logo.svg"
      alt="Imagem de um átomo e React Avançado escroto ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um dev com a tela com códigos"
    />
  </S.Wrapper>
)

export default Main
