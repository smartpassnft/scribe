import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Sidebar from '../components/Sidebar'
import Viewer from './viewer'
import Home from './home/'
import GalleryView from './gallery'

import '../common.css'

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
                      <Route exact strict path="/" component={Home} />
                      <Route exact strict path="/viewer" component={Viewer} />
                      <Route exact strict path="/gallery" component={GalleryView} />
                    </Switch>
                </BodyWrapper>
            </AppWrapper>
        </Suspense>
    )
}
