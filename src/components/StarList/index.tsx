import { useState } from 'react'

import Star from 'components/Star'
import * as S from './styles'

type StarListProps = {
  rate?: number
  disableClick?: boolean
}

const StarList = ({ rate = 0, disableClick = false }: StarListProps) => {
  const [rating, setRating] = useState(rate)

  const handleChangeRating = (i: number) => {
    if (disableClick) return

    const newRatingValue = i + 1
    setRating(newRatingValue)
  }

  return (
    <S.Wrapper>
      {Array.from(new Array(rating)).map((_, i) => (
        <S.StarButton
          onClick={() => handleChangeRating(i)}
          key={i}
          disabled={disableClick}
        >
          <Star checked disableClick={disableClick} />
        </S.StarButton>
      ))}
      {Array.from(new Array(Math.abs(rating - 5))).map((_, i) => (
        <S.StarButton
          onClick={() => handleChangeRating(rating + i)}
          key={String(rating + i)}
          disabled={disableClick}
        >
          <Star disableClick={disableClick} />
        </S.StarButton>
      ))}
    </S.Wrapper>
  )
}

export default StarList
