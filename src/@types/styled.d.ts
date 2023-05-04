import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultThme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}