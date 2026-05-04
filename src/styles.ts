import { createGlobalStyle } from 'styled-components'

const Cores = {
  Branca: '#EEEEEE',
  preta: '#111111',
  cinza: '#333333',
  verde: '#10AC84'
}
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }
  body {
    background-color: ${Cores.preta};
    color: ${Cores.Branca};
    font-family: "Roboto", sans-serif;
  }

`

export { GlobalStyle, Cores }
