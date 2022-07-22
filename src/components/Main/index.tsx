import * as S from './styles'

type MainProps = {
  title?: string
  description?: string
}

const Main = ({ title = 'Hello World!', description = 'Foo' }: MainProps) => {
  return (
    <div>
      <S.Heading>{title}</S.Heading>
      <S.Heading>{description}</S.Heading>
    </div>
  )
}

export default Main
