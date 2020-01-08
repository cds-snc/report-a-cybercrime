import React from 'react'
import { Container } from '../container'

export const Layout = props => (
  <Container width={{ sm: '100%', lg: '66.666%' }} px={2} {...props} />
)
