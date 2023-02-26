import { FC, memo } from 'react'
import { Heading } from '@chakra-ui/react'

type Props = {
  size: 'large' | 'small'
  title: string
}

const SearchHeading: FC<Props> = ({ size, title }) => {
  let baseOptionProps = { as: 'h2', size: '3xl' }
  // asはany型のためanyを使用
  let optionProps: { as: any, size: string}

  switch (size) {
    case 'small':
      optionProps = {...baseOptionProps, as: 'h3', size: 'lg'}
      break
    case 'large':
      optionProps = {...baseOptionProps}
      break
  }
  return (
    <Heading as={optionProps.as} size={optionProps.size}>
      { title }
    </Heading>
  )
}

export default memo(SearchHeading)
