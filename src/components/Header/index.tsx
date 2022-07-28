import Button from 'components/Button'
import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <S.Logo>SKYCOMMERCE</S.Logo>
      {/*
        <S.Nav>
          <Dropdown title={<a href="#">Comprar</a>}>
            <ul>
              <li>
                <a href="#">Categoria</a>
                <Divider />
              </li>
              <li>
                <a href="#">Ajuda</a>
              </li>
            </ul>
          </Dropdown>
          <Dropdown title={<a href="#">Sobre</a>}>
            <ul>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
              <li>
                <a href="#">Github</a>
              </li>
            </ul>
          </Dropdown>
        </S.Nav>
      */}
      <Button>Sign-in</Button>
    </S.Header>
  )
}

export default Header
