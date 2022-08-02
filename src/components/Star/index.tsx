import { useState } from 'react'

import * as S from './styles'

export type StarProps = { checked?: boolean }
const Star = ({ checked = false }: StarProps) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleClick = () => {
    const newValue = !isChecked
    setIsChecked(newValue)
  }

  return (
    <S.Wrapper
      checked={isChecked}
      onClick={handleClick}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <title>star</title>
      <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
    </S.Wrapper>
  )
}

export default Star
