import { useState } from 'react'
import {
  IosArrowLeft,
  IosArrowRight
} from 'styled-icons/fluentui-system-filled'
import * as S from './styles'

type PaginationProps = {
  total: number
  perPage: number
  page: number
}

const MAX_ITEMS = 3
const MAX_LEFT = (MAX_ITEMS - 1) / 2

const Pagination = ({ total, perPage, page }: PaginationProps) => {
  const [currencyPage, setCurrencyPage] = useState(page)

  const first = Math.max(currencyPage - MAX_LEFT, 1)
  const totalPages = Math.ceil(total / perPage)

  const handlePrevPage = () => setCurrencyPage((s) => s - 1)
  const handleNextPage = () => setCurrencyPage((s) => s + 1)
  const onClick = (page: number) => setCurrencyPage(page)

  return (
    <S.Wrapper>
      <S.ArrowButton
        disabled={!currencyPage}
        aria-label="Previous page"
        onClick={handlePrevPage}
      >
        <IosArrowLeft size={20} />
      </S.ArrowButton>

      {Array.from({ length: MAX_ITEMS })
        .map((_, index) => index + first)
        .map((page) => (
          <S.Button
            key={page}
            disabled={currencyPage + 1 === page}
            onClick={() => onClick(page - 1)}
          >
            {page}
          </S.Button>
        ))}

      <S.ArrowButton
        disabled={currencyPage === totalPages - 1}
        aria-label="Next page"
        onClick={handleNextPage}
      >
        <IosArrowRight size={20} />
      </S.ArrowButton>
    </S.Wrapper>
  )
}

export default Pagination
