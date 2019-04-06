import React from 'react'


import styled from 'styled-components'
import Hero from '../components/hero'
import Intro from '../components/intro'

export default () => (
  <Container>
    <Hero />
    <Intro />
  </Container>
)

const Container = styled.div`
  text-align: center;
`
