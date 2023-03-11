// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import { colors, global } from './customization'

export const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Andada Pro', serif`,
    body: `'Andada Pro', serif`,
  },
  styles: {
    global,
  },
})
