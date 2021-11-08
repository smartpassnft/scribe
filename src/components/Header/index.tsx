import React from 'react'
import styled from 'styled-components'

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 12px;
  justify-self: center;
  color: #525252;

  :hover {
    cursor: pointer;
  }
`
export default function Header() {
   return (
     <Title href="."><h1>scribe</h1></Title>
   )
}
