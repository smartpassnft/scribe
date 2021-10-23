// import React, { useReducer, useEffect } from 'react';
import React from 'react'
import { render } from 'react-dom'
import Gallery from 'react-grid-gallery'
import styled from 'styled-components'

import { AutoColumn } from '../../components/Column'
// import { RowBetween } from '../../components/Row'

const PageWrapper = styled(AutoColumn)`
  max-width: 640px;
  width: 100%;
`

/*
  TODO: Create scroll object that dynamically populates image elements
  - Leverage this libary for the view
  https://github.com/benhowell/react-grid-gallery
  - May need to pull scrolls from chain storage
*/
const scrolls = [{

}]

export default function GalleryView() {
    return( 
        <PageWrapper>
          render(
            <Gallery images={scrolls} />
          )
        </PageWrapper>
    )
}