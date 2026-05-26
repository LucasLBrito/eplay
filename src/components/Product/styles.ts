import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  position: relative;
  color: ${Cores.Branca};
  padding: 8px;
  border-radius: 8px;
  text-decoration: none;
  display: block;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  }

  &:focus-visible {
    outline: 2px solid ${Cores.verde};
    outline-offset: 4px;
  }

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.25s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  display: block;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
