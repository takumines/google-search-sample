import React, { FC, memo } from 'react'
import { Center, Flex } from '@chakra-ui/react'
import SearchInput from '~/components/molecules/SearchInput'
import SearchButton from '~/components/molecules/SearchButton'
import { useSearchForm } from '~/hooks/useSearchForm'

const SearchResultForm: FC = () => {
  const { data, onChangeWord, onSubmit, processing } = useSearchForm()

  return (
    <form onSubmit={onSubmit}>
      <Flex gap={3}>
        <Center>
          <SearchInput value={data.word} onChange={onChangeWord} />
        </Center>
        <Center>
          <SearchButton title={'検索'} disabled={processing} />
        </Center>
      </Flex>
    </form>
  )
}

export default memo(SearchResultForm)
