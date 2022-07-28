import { useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  endIcon?: React.ReactNode
  startIcon?: React.ReactNode
  onInputChange?: (value: string) => void
} & React.InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  endIcon,
  startIcon,
  onInputChange,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)
    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper>
      {!!startIcon && <S.Icon>{startIcon}</S.Icon>}
      <S.Input {...props} value={value} onChange={(e) => handleChange(e)} />
      {!!endIcon && <S.Icon>{endIcon}</S.Icon>}
    </S.Wrapper>
  )
}

export default TextField
