import { useEffect, useRef, useState } from 'react'

import * as S from './styles'

type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ children, title }: DropdownProps) => {
  const titleRef = useRef<HTMLDivElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenDropdown = () => setIsOpen(true)
  const handleCloseDropdown = () => setIsOpen(false)

  useEffect(() => {
    const title = titleRef.current

    if (title) {
      title.addEventListener('focusin', handleOpenDropdown)
      title.addEventListener('focusout', handleCloseDropdown)

      return () => {
        title.removeEventListener('focusin', handleOpenDropdown)
        title.removeEventListener('focusout', handleCloseDropdown)
      }
    }
  }, [])

  return (
    <S.Wrapper
      isOpen={isOpen}
      ref={titleRef}
      onMouseLeave={handleCloseDropdown}
    >
      <S.Title onMouseEnter={handleOpenDropdown}>{title}</S.Title>
      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
    </S.Wrapper>
  )
}

export default Dropdown
