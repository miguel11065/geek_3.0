import { createGlobalStyle } from 'styled-components'

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  .container {
    max-width: 1264px;
    width: 100%;
    margin: 0 auto;
  }
`
