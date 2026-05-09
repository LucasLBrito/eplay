import { createGlobalStyle } from 'styled-components'

const Cores = {
  Branca: '#EEEEEE',
  preta: '#111111',
  cinza: '#333333',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3'
}
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    text-decoration: none;
    list-style: none;
  }
  body {
    background-color: ${Cores.preta};
    color: ${Cores.Branca};
    font-family: "Roboto", sans-serif;
    padding-top: 40px;
  }

  .container{
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
  }

`

export { GlobalStyle, Cores }
