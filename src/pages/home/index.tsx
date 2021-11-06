import React from 'react';
import styled from 'styled-components'

import { AutoColumn } from '../../components/Column'

const PageWrapper = styled(AutoColumn)`
  max-width: 640px;
  width: 100%;
`

export default function Home() {
    return( 
        <PageWrapper>
          <AutoColumn> 
            
          </AutoColumn>
        </PageWrapper>
    )
}