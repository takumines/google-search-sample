import { ChangeEvent, FormEvent, useCallback } from 'react'
import { useForm } from '@inertiajs/inertia-react'
import { getWordParam } from '~/utils/queryParam'

export const useSearchForm = () => {
  const { data, setData, get, processing } = useForm({
    word: getWordParam()
  })

  const onChangeWord = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setData('word', e.target.value)
  }, [data])

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (data.word?.length !== 0) {
      get('/search')
    }
  }, [data])

  return {
    data,
    onChangeWord,
    onSubmit,
    processing
  } as const
}
