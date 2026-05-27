import { createGlobalStyle } from 'styled-components'

const Colors = {
  white: '#EEEEEE',
  black: '#111111',
  gray: '#333333',
  green: '#10AC84',
  lightGray: '#A3A3A3'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '425px'
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
    background-color: ${Colors.black};
    color: ${Colors.white};
    font-family: "Roboto", sans-serif;
    padding-top: 40px;
  }

  .container{
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;

    @media (max-width: ${breakpoints.tablet}) {
      max-width:80%;
    }
  }

`

export { GlobalStyle, Colors }
