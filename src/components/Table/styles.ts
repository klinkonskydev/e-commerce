import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  overflow-x: auto;
`

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 40rem;
`

export const Category = styled.p`
  font: normal 400 14px Roboto;
  padding: 9px 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:nth-child(odd) {
    background: #f6f6f6;
  }
`
