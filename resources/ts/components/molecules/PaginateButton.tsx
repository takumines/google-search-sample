import { FC, memo } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  title: string
  disabled: boolean
  onClick: () => void
}

const PaginateButton: FC<Props> = ({ title, onClick,  disabled = false }) => {
  return (
    <Button type='button' colorScheme='gray' size='md' isDisabled={disabled} onClick={onClick}>
      { title }
    </Button>
  )
}

export default memo(PaginateButton)
