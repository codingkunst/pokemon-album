import styled from '@emotion/styled'
import React from 'react'
import PokeCard from './PokeCard'

const PokeCardList = () => {
  return (
    <List>
      {
        Array.from({length: 10}).map((_, index) => {
          return (
            <PokeCard key={index} />
          )
        })
      }
    </List>
  )
}

const List = styled.ul`
  margin: 0 0 32px 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`

export default PokeCardList