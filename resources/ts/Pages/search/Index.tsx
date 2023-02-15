import React from 'react'
import { SearchInput } from '~/components/SearchInput'
import { SearchHeading } from '~/components/SearchHeading'
import { Center, VStack } from '@chakra-ui/react'
import { SearchButton } from '~/components/SearchButton'

export default function Index() {
  return (
    <>
      <VStack marginTop={180} spacing={10}>
        <Center>
          <SearchHeading size={'large'} title={'Goggle'} />
        </Center>
        <Center>
          <SearchInput />
        </Center>
        <Center>
          <SearchButton title={'検索'} />
        </Center>
      </VStack>
    </>
  )
}
