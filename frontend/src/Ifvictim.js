import React from 'react'

import styled from '@emotion/styled'
import {Trans} from '@lingui/macro'
import {H1} from './components/header'
import { TrackPageViews } from './TrackPageViews'
import { ButtonLink } from '../src/components/link'


const CenterContent= styled('div')`
max-width:750px;
margin:Auto;`


export const Ifvictim=()=>(
    <CenterContent>
        <TrackPageViews/>
        <H1 fontSize={[5,null,6]}>
            <Trans>{'Are you a victim?'}</Trans>
    
        </H1>
        <p>
            <ButtonLink color= "black" mb={[3,null,5]} to ="/urgency">
                <Trans>{'Yes'}</Trans>  
            </ButtonLink>
</p>
<p>
            <ButtonLink color="black" mb={[3,null,5]} to ="/urgency">
                <Trans>No</Trans>
            </ButtonLink>
            </p>
    </CenterContent>
)
    