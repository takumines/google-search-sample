import {ChangeEvent, FC, memo} from 'react'
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

type Props = {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const SearchInput: FC<Props> = ({ value, onChange }) => {
  return (
    <InputGroup width={584}>
      <InputLeftElement pointerEvents='none' color='gray.500' h="full" children={<SearchIcon />} />
      <Input type='text' value={value} size='lg' onChange={onChange}/>
    </InputGroup>
  )
}

export default memo(SearchInput)
