import React, { FC, memo } from 'react'
import { Center, HStack, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import { SearchResult } from '~/types/searchResult'
import { Paginate } from '~/types/paginate'
import SearchResultCard from '~/components/molecules/SearchResultCard'
import SearchResultForm from '~/components/organisms/SearchResultForm'
import SearchHeading from '~/components/molecules/SearchHeading'
import SearchResultPaginate from '~/components/molecules/SearchResultPaginate'

type Props = {
  results: SearchResult[]
  meta: Paginate
}

const Result: FC<Props> = ({results, meta}) => {
  return (
    <>
      <Stack mx={{base: '16px', sm:'16px', md:'16px', lg: '56px'}} mb={8}>
        <HStack
          mt={4}
          mb={4}
          display={{ md: 'flex' }}
          alignItems='center'>
          <Center mb={{ base: '16px', sm:'16px', md:'0px', lg: '0px' }}>
            <SearchHeading size={'small'} title={'Goggle'} />
          </Center>
          <SearchResultForm/>
        </HStack>
        <VStack spacing={4}>
          <Stack width='100%'>
            <Text fontSize='md'>約 { meta.total } 件</Text>
          </Stack>
          <SimpleGrid spacing={4}>
            { results.map(({ ...result }, index) => (
              <SearchResultCard result={result} key={index}/>
            ))}
          </SimpleGrid>
        </VStack>
        <SearchResultPaginate paginate={meta}/>
      </Stack>
    </>
  )
}

export default memo(Result)
