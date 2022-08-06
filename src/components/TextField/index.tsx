import { useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  label?: string
  endIcon?: React.ReactNode
  startIcon?: React.ReactNode
  onInputChange?: (value: string) => void
} & React.InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  name,
  label,
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
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!startIcon && <S.Icon>{startIcon}</S.Icon>}
        <S.Input
          {...props}
          value={value}
          onChange={(e) => handleChange(e)}
          {...(label ? { id: name } : {})}
        />
        {!!endIcon && <S.Icon>{endIcon}</S.Icon>}
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
