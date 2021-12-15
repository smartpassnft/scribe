import React from 'react'
import { Button } from '@theme-ui/components'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Row, { RowFixed } from '../Row'
import Header from '../Header'
import Footer from '../Footer'

const SidebarFrame = styled.div`
  display: flex;
  grid-template-columns: 1fr 120px;
  align-items: center;
  justify-content: space-between;

  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  top: 0;
  padding: 0;

  position: relative;
  border-right: 2px solid white;
  z-index: 2;
`
const SidebarRow = styled(RowFixed)`
  width: 100%;
`

const SidebarControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;
`

const SidebarElement = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const SidebarNavLinks = styled(Row)`
  justify-content: center;
  display: grid;
`
const StyledNavLink = styled(NavLink)`
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  margin: 0 12px;
  color: #525252;
  text-align: center; 
`


//export LandingSidebarLinks;
//export AppSidebarLinks;

/* Wallet
      <SidebarControls>
        <SidebarElement>
        </SidebarElement>
      </SidebarControls>
*/


// TODO: Dynamically render based on metamask state
export default function Sidebar() {
  const history = useHistory()
  const { t } = useTranslation()
  
  return (
    <SidebarFrame>
    
      <Header />

      <SidebarRow>
        <SidebarNavLinks>
          <StyledNavLink id={`swap-nav-link`} to={'/'}>
          {t('Mint')}
          </StyledNavLink>
          <StyledNavLink id={`swap-nav-link`} to={'/market'}>
          {t('Market')}
          </StyledNavLink>
          <StyledNavLink id={`swap-nav-link`} to={'/studio'}>
          {t('Studio')}
          </StyledNavLink>
          <StyledNavLink id={`swap-nav-link`} to={'/collection'}>
          {t('Collection')}
          </StyledNavLink>

          <br /> <br /> <br />
        
          <StyledNavLink id={"connect"} to={''}>
           {t('Connect')}
          </StyledNavLink>
          <StyledNavLink id="connected-account" to={''}>
           {t('Connected Account')}
          </StyledNavLink>
          <StyledNavLink id="disconnect" to={''}>
           {t('Disconnect')}
          </StyledNavLink>

        </SidebarNavLinks>
      </SidebarRow>

      <Footer />

    </SidebarFrame>
  )
}
