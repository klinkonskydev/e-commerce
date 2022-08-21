import * as S from './styles'

type TableProps = {
  categories: string[]
  descriptions: string[]
}

const Table = ({ categories, descriptions }: TableProps) => {
  return (
    <S.Wrapper role="table">
      <S.CategoriesWrapper>
        {categories?.map((category, i) => (
          <S.Category key={String(i)}>{category}</S.Category>
        ))}
      </S.CategoriesWrapper>
      <S.CategoriesWrapper>
        {descriptions?.map((desc, i) => (
          <S.Category key={String(i)}>{desc}</S.Category>
        ))}
      </S.CategoriesWrapper>
    </S.Wrapper>
  )
}

export default Table
