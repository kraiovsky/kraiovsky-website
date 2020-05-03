import { createGlobalStyle } from 'styled-components'

export const GlobalCssVars = createGlobalStyle`
  :root {
    --brand-text-color-primary: ${({ theme }) => theme.textColorPrimary};
    --brand-text-color-highlight: ${({ theme }) => theme.textColorHighlight};
    --brand-text-color-lowlight: ${({ theme }) => theme.textColorLowlight};
    --brand-background-color: ${({ theme }) => theme.backgroundColor};
  }
`
