import * as S from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void
  label?: string
  labelFor?: string
  value?: RadioValue
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>

const Radio = ({
  value,
  onCheck,
  label,
  labelFor = '',
  ...props
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value)
  }

  return (
    <S.Wrapper>
      <S.Radio id={labelFor} value={value} onChange={onChange} {...props} />
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
    </S.Wrapper>
  )
}

export default Radio
