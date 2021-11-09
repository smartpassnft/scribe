import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Sidebar from '../components/Sidebar/'
import Mint from './mint'
import Market from './market'
import Studio from './studio'
import Collection from './collection'


import '../common.css'
import { Button } from '@theme-ui/components'

const AppWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    height: 100vh;
`

const SidebarWrapper = styled.div`
    ${({ theme }) => theme.flexRowNoWrap }
    width: 25%;
    max-width: 400px;
    height: 100vh;
    justify-content: space-between;
`

const BodyWrapper = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: center;
  flex: 1;
  z-index: 10;
  z-index: 1;
`

export default function App() {
    return (
        <Suspense fallback={null}>
            <AppWrapper>
                <SidebarWrapper>
                    <Sidebar />
                </SidebarWrapper>
                <BodyWrapper>
                    <Switch>
                      <Route exact strict path="/" component={Mint} />
                      <Route exact strict path="/market" component={Market} />
                      <Route exact strict path="/studio" component={Studio} />
                      <Route exact strict path="/collection" component={Collection} />
                      <div className="metamask">
                        <Button variant="secondary">
                            <img src="/images/metamask.svg" alt="MetaMask" width="50"/>
                        </Button>
                        <div className="mt-2 mb-2">
                            Connected Account:    
                        </div>
                        <Button variant="danger">
                            Disconnect MetaMask
                        </Button>
                      </div>
                    </Switch>
                </BodyWrapper>
            </AppWrapper>
        </Suspense>
    )
}
