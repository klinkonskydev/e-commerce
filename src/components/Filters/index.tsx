import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Radio from 'components/Radio'
import StarList from 'components/StarList'
import * as S from './styles'

// type FiltersProps = {}

const Filters = () => {
  return (
    <div>
      <S.Heading>Preço por m²</S.Heading>
      <S.ButtonsWrapper>
        <Radio label="Todos os preços" name="prices" labelFor="price1" />
        <Radio label="Até R$100" name="prices" labelFor="price2" />
        <Radio label="R$100 a R$200" name="prices" labelFor="price3" />
        <Radio label="R$200 a R$300" name="prices" labelFor="price4" />
      </S.ButtonsWrapper>
      <S.Heading>Cor</S.Heading>
      <S.ButtonsWrapper>
        <Checkbox label="Cinza" labelFor="gray" />
        <Checkbox label="Branco" labelFor="white" />
        <Checkbox label="Bege" labelFor="bege" />
        <Checkbox label="Preto" labelFor="black" />
      </S.ButtonsWrapper>
      <S.Heading>Avaliação dos clientes</S.Heading>
      <S.ButtonsWrapper>
        <Radio
          label={<StarList rate={1} disableClick />}
          labelFor="star1"
          name="bla"
        />
        <Radio
          label={<StarList rate={2} disableClick />}
          labelFor="star2"
          name="bla"
        />
        <Radio
          label={<StarList rate={3} disableClick />}
          labelFor="star3"
          name="bla"
        />
        <Radio
          label={<StarList rate={4} disableClick />}
          labelFor="star4"
          name="bla"
        />
        <Radio
          label={<StarList rate={5} disableClick />}
          labelFor="star5"
          name="bla"
        />
      </S.ButtonsWrapper>
      <S.Heading>Fixação/Suporte</S.Heading>
      <Button variant="contained">Filtrar</Button>
    </div>
  )
}

export default Filters
