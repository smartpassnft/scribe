import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../components/Header'
import Viewer from './viewer'
import Home from './home/'
import GalleryView from './gallery'

import '../common.css'

const AppWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    overflow-x: hidden;
`

const HeaderWrapper = styled.div`
    ${({ theme }) => theme.flexRowNoWrap }
    width: 100%;
    justify-content: space-between;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;
  z-index: 1;
`

export default function App() {
    return (
        <Suspense fallback={null}>
            <AppWrapper>
                <HeaderWrapper>
                    <Header />
                </HeaderWrapper>
            </AppWrapper>
            <BodyWrapper>
                <Switch>
                    <Route exact strict path="/" component={Home} />
                    <Route exact strict path="/viewer" component={Viewer} />
                    <Route exact strict path="/gallery" component={GalleryView} />
                </Switch>
            </BodyWrapper>
        </Suspense>

    )
}
