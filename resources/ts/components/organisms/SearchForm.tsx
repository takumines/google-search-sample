import React, { FC, memo } from 'react'
import { Center } from '@chakra-ui/react'
import SearchInput from '~/components/molecules/SearchInput'
import SearchButton from '~/components/molecules/SearchButton'
import { useSearchForm } from '~/hooks/useSearchForm'

const SearchForm: FC = () => {
  const { data, onChangeWord, onSubmit, processing } = useSearchForm()

  return (
    <form onSubmit={onSubmit}>
      <Center marginBottom={10}>
        <SearchInput value={data.word} onChange={onChangeWord} />
      </Center>
      <Center>
        <SearchButton title={'検索'} disabled={processing} />
      </Center>
    </form>
  )
}

export default memo(SearchForm)
