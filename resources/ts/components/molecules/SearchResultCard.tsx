import { FC, memo } from 'react'
import { SearchResult } from '~/types/searchResult'
import {Box, Card, CardBody, CardHeader, Heading, Link} from '@chakra-ui/react'

type Props = {
  result: SearchResult
}

const SearchResultCard: FC<Props> = ({ result }) => {
  const { title, snippet, link } = result
  return (
    <Card backgroundColor='blue.50' padding={6}>
      <CardHeader padding={0}>
        <Heading size='md' color='blue.700'>
          <Link href={ link }>
            { title }
          </Link>
        </Heading>
      </CardHeader>
      <CardBody pt={4} pb={0} pl={0} pr={0}>
        <Box>
          <Heading size='sm' color='gray.600'>
            { snippet }
          </Heading>
        </Box>
      </CardBody>
    </Card>
  )
}

export default memo(SearchResultCard)
