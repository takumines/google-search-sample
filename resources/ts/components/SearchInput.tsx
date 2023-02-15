import { FC } from 'react'
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export const SearchInput : FC = () => {
  return (
    <InputGroup width={584}>
      <InputLeftElement pointerEvents='none' color='gray.500' h="full" children={<SearchIcon />} />
      <Input type='text' size='lg'/>
    </InputGroup>
  )
}
