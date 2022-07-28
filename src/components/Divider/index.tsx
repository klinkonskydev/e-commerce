import * as S from './styles'

export type DividerProps = {
  color?: 'primary' | 'blue' | 'black'
  h?: number | string
}

const Divider = ({ color = 'black', h = 1 }: DividerProps) => {
  return <S.Divider color={color} h={h} />
}

export default Divider
