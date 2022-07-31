import styled, { css } from 'styled-components'
import { CardProps } from '.'

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 8px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export const Heading = styled.h3`
  ${({ theme }) => css`
    width: 33ch;
    color: ${theme.colors.gray};
    font: normal 400 1.4rem Roboto;
    text-transform: uppercase;
  `}
`

export const Price = styled.p`
  font: normal 400 2rem Roboto;
`

const wrapperModifier = {
  minimal: () => css`
    ${Heading} {
      margin-bottom: 17px;
    }
    ${Price} {
      text-align: center;
    }
    ${ImageWrapper} {
      height: 121px;
    }
  `,
  normal: () => css`
    ${ImageWrapper} {
      height: 142px;
    }
    ${Heading} {
      margin-bottom: 12px;
    }
  `,
  big: () => css`
    ${Heading} {
      margin-bottom: 6px;
    }
    ${ImageWrapper} {
      height: 190px;
      margin-bottom: 18px;
      img {
        border-radius: 8px;
      }
    }
  `
}

type WrapperProps = Pick<CardProps, 'variant'>
export const Wrapper = styled.div<WrapperProps>`
  width: fit-content;
  ${({ variant }) => css`
    ${!!variant && wrapperModifier[variant]}
  `}
`
