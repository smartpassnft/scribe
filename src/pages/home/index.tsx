import React from 'react';
import styled from 'styled-components'

import { AutoColumn } from '../../components/Column'

import placeholder from '../../assets/placeholder.gif'
import chainlink from '../../assets/chainlink-black.png'
import avax from '../../assets/avax-black.svg'


const PageWrapper = styled(AutoColumn)`
  height: 100%;
  width: 100%;
  max-width: 1024px;
  justify-content: space-around;
  flex-direction: column;
  display:flex;
`

const AnimationWrapper = styled.div`
   display: grid;
`

const Animations = styled.div`
   display: grid;
   height: 260px;
   justify-self: center;
   grid-template-columns: 264px 264px 264px;
`

const Explaination = styled.p`
   font-style: italic;
   text-align: right;
   height: 30px;
`

const PoweredBy = styled.div`
   display: flex;
   justify-content: center;
   position: relative;
   bottom: 0px;
   height: 50px;
`

export default function Home() {
    return( 
        <PageWrapper>
          <AnimationWrapper>
            <Animations>
                <img width="256px" height="256px" src={placeholder}/>
                <img width="256px" height="256px" src={placeholder}/>
                <img width="256px" height="256px" src={placeholder}/>
             </Animations>
             <Explaination>a collabortive nft writing experiment</Explaination>
          </AnimationWrapper>
          <PoweredBy>
             <img width="176px" height="46px" src={chainlink}/>
             <img width="176px" height="46px" src={avax}/>
          </PoweredBy>
        </PageWrapper>
    )
}
