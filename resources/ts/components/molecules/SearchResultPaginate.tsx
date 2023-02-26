import { FC, memo } from 'react'
import { Paginate } from '~/types/paginate'
import { HStack } from '@chakra-ui/react'
import PaginateButton from '~/components/molecules/PaginateButton'
import { usePaginate } from '~/hooks/usePaginate'

type Props = {
  paginate: Paginate
}

const SearchResultPaginate: FC<Props> = ({ paginate } ) => {
  const { lastPage, currentPage } = paginate
  const {
    isDisabledNextButton,
    isDisabledPrevButton,
    onClickNext,
    onClickPrev,
    processing
  } = usePaginate({currentPage, lastPage})

  return (
    <HStack justifyContent='center' mt={4}>
      <PaginateButton title={'prev'} disabled={isDisabledPrevButton || processing} onClick={onClickPrev}/>
      <PaginateButton title={'next'} disabled={isDisabledNextButton || processing} onClick={onClickNext}/>
    </HStack>
  );
}

export default memo(SearchResultPaginate)
