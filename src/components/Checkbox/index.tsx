import { useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  onCheck?: (status: boolean) => void
  value?: string | ReadonlyArray<string> | number
  isChecked?: boolean
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>

const Checkbox = ({
  value,
  onCheck,
  label,
  labelFor = '',
  isChecked = false,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked

    setChecked(status)
    !!onCheck && onCheck(status)
  }

  return (
    <S.Wrapper>
      <S.Checkbox
        id={labelFor}
        value={value}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
    </S.Wrapper>
  )
}

export default Checkbox
