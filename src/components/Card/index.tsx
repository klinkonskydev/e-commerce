import Image from 'next/image'
import * as S from './styles'

export type CardProps = {
  imgUrl: string
  price: string | number
  title?: string
  variant?: 'minimal' | 'normal' | 'big'
}

const Card = ({ imgUrl, title, price, variant = 'normal' }: CardProps) => {
  return (
    <S.Wrapper variant={variant}>
      <S.ImageWrapper>
        <Image src={imgUrl} alt={title} layout="fill" />
      </S.ImageWrapper>

      {!!title && <S.Heading>{title}</S.Heading>}

      <S.Price>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(Number(price))}
      </S.Price>
    </S.Wrapper>
  )
}

export default Card
