import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Row, { RowFixed } from '../Row'

const HeaderFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 2;
`
const HeaderRow = styled(RowFixed)`
  width: 100%;

`
const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 12px;
  justify-self: center;
  :hover {
    cursor: pointer;
  }
`
const HeaderLinks = styled(Row)`
  justify-content: center;
`
const StyledNavLink = styled(NavLink)`
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  width: fit-content;
  margin: 0 12px;
  font-weight: 500;
`

export default function Header() {
  const history = useHistory()
  const { t } = useTranslation()
  
  return (
    <HeaderFrame>
      <HeaderRow>
        <Title href=".">
        </Title>
        <HeaderLinks>
          <StyledNavLink id={`swap-nav-link`} to={'/'}>
          {t('Home')}
          </StyledNavLink>
          <StyledNavLink id={`swap-nav-link`} to={'/gallery'}>
          {t('Gallery')}
          </StyledNavLink>
          <StyledNavLink id={`swap-nav-link`} to={'/docs'}>
          {t('Docs')}
          </StyledNavLink>
        </HeaderLinks>
      </HeaderRow>
      <HeaderControls>
        <HeaderElement>
        </HeaderElement>
      </HeaderControls>
    </HeaderFrame>
  )
}