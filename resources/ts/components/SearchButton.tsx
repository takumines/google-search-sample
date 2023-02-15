import { FC, memo } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  title: string
}

export const SearchButton: FC<Props> = ({ title }) => {
  return (
    <Button colorScheme='teal' size='md'>
      { title }
    </Button>
  )
}

export default memo(SearchButton)
