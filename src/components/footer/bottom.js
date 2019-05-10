import React from 'react'
import styled from 'styled-components'
import I18N from '../../I18N'
// import { breakPoint } from '../../constants/variable'
// import * as colors from '../../constants/color'

export default class extends React.Component {
  render () {
    return (
      <Container>
        <Link href={I18N.get('footer.privacyPolicy.link')} rel="noopener noreferrer">{I18N.get('footer.privacyPolicy.title')}</Link>
      </Container>
    )
  }
}

const Container = styled.div`
  margin-top: 30px;
  border-top: 1px solid white;
  color: white;
  padding-top: 20px;
`

const Link = styled.a`
  color: white;
`
