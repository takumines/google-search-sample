import { Paginate } from '~/types/paginate'
import { getWordParam } from '~/utils/queryParam'
import { useCallback } from 'react'
import { useForm } from '@inertiajs/inertia-react'

type UsePaginateArgs = Pick<Paginate, 'currentPage' | 'lastPage'>

const INIT_PAGE = 1

export const usePaginate = ({ currentPage, lastPage }: UsePaginateArgs) => {
  const { get, processing } = useForm()

  const searchPath = (page: string) => {
    const params = new URLSearchParams();
    params.set('word', getWordParam());
    params.set('page', page);

    return `${params.toString()}`;
  }

  const isDisabledPrevButton = currentPage === INIT_PAGE

  const isDisabledNextButton = currentPage === lastPage

  const onClickPrev = useCallback((): void => {
    if (currentPage !== INIT_PAGE) {
      const page = currentPage - INIT_PAGE
      get('/search?' + searchPath(page.toString()))
    }
  }, [currentPage])

  const onClickNext = useCallback((): void => {
    if (currentPage !== lastPage) {
      const page = currentPage + INIT_PAGE
      get('/search?' + searchPath(page.toString()))
    }
  }, [currentPage])

  return {
    isDisabledPrevButton,
    isDisabledNextButton,
    onClickPrev,
    onClickNext,
    processing
  } as const
}
