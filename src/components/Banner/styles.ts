import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 340px;
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 450px;
`
export const Precos = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
