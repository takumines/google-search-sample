import React from 'react'
import { SearchHeading } from '~/components/molecules/SearchHeading'
import { Center, VStack } from '@chakra-ui/react'
import SearchForm from '~/components/organisms/SearchForm'

export default function Index() {
  return (
    <>
      <VStack marginTop={180} spacing={10}>
        <Center>
          <SearchHeading size={'large'} title={'Goggle'} />
        </Center>
        <SearchForm />
      </VStack>
    </>
  )
}
