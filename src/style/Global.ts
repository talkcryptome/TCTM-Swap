import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};

    @font-face {
      font-family: 'taco';
      src: url(/fonts/tacos.ttf);
    }

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
