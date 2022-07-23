import { forwardRef } from 'react'
import * as S from './styles'

type ButtonTypes =
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
  | React.ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: React.ReactNode
  as?: React.ElementType
  icon?: JSX.Element
  size?: 'small' | 'normal' | 'big'
  variant?: 'transparent' | 'contained' | 'outlined'
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  { children, size = 'normal', variant = 'contained', icon, ...props },
  ref
) => {
  return (
    <S.Wrapper size={size} variant={variant} ref={ref} {...props}>
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

export default forwardRef(Button)
