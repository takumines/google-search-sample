import { FC, memo } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  title: string
  disabled: boolean
}

const SearchButton: FC<Props> = ({ title, disabled = false }) => {
  return (
    <Button type='submit' colorScheme='teal' size='md' disabled={disabled}>
      { title }
    </Button>
  )
}

export default memo(SearchButton)
