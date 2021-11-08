import React from 'react'
import styled from 'styled-components'
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  library
} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab )



const FooterDiv = styled.div`
   display: flex;
   justify-content: center;
   margin-bottom: 12px;
`

const twitterLookup: IconLookup = { prefix: 'fab', iconName: 'twitter' }
const twitterIconDefinition: IconDefinition = findIconDefinition(twitterLookup)
const githubLookup: IconLookup = { prefix: 'fab', iconName: 'github' }
const githubIconDefinition: IconDefinition = findIconDefinition(githubLookup)

export default function Footer() {
   return (
      <FooterDiv>
         <a href="https://twitter.com/scribe_society"><FontAwesomeIcon icon={twitterIconDefinition} size="1x" /></a>
         <a href="https://github.com/smartpassnft/scribe"><FontAwesomeIcon icon={githubIconDefinition} size="1x" /></a>
      </FooterDiv>
   )
}
