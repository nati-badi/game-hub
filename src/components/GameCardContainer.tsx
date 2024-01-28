import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'


interface Props {
    children: ReactNode;
}

function GameCardStyles({ children }: Props) {
  return (
    <Box width='260px' borderRadius={10} overflow="hidden">{children}</Box>
  )
}

export default GameCardStyles