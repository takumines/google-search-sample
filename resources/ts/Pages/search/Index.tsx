import React, { FC, memo } from 'react'
import SearchHeading from '~/components/molecules/SearchHeading'
import { Center, VStack } from '@chakra-ui/react'
import SearchForm from '~/components/organisms/SearchForm'

const Index: FC = () =>  {
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

export default memo(Index)
