import { ChangeEvent, FormEvent, useCallback } from 'react'
import { useForm } from '@inertiajs/inertia-react'

export const useSearchForm = () => {
  const { data, setData, get, processing } = useForm({
    word: ''
  })

  const onChangeWord = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setData('word', e.target.value)
    console.log(data)
  }, [data])

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    get('/search')
  }, [data])

  return {
    data,
    onChangeWord,
    onSubmit,
    processing
  } as const
}
