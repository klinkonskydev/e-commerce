import { useState } from 'react'

import Star from 'components/Star'
import * as S from './styles'

type StarListProps = {
  rate?: number
}

const StarList = ({ rate = 0 }: StarListProps) => {
  const [rating, setRating] = useState(rate)

  const handleChangeRating = (i: number) => {
    const newRatingValue = i + 1
    setRating(newRatingValue)
  }

  return (
    <S.Wrapper>
      {Array.from(new Array(rating)).map((_, i) => (
        <S.StarButton onClick={() => handleChangeRating(i)} key={i}>
          <Star checked />
        </S.StarButton>
      ))}
      {Array.from(new Array(Math.abs(rating - 5))).map((_, i) => (
        <S.StarButton
          onClick={() => handleChangeRating(rating + i)}
          key={String(rating + i)}
        >
          <Star />
        </S.StarButton>
      ))}
    </S.Wrapper>
  )
}

export default StarList
