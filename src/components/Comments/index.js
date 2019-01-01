import React from 'react'
import styled from 'styled-components'

import { FacebookProvider, Comments as FBComments } from 'react-facebook'
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`
const Comments = ({ facebook, slug, siteUrl, ...props }) => {
  return (
    <Wrapper>
      <FacebookProvider appId={facebook.appId}>
        <FBComments
          href={`${siteUrl}/${slug}`}
          width="100%"
          colorscheme="light"
        />
      </FacebookProvider>
    </Wrapper>
  )
}

export default Comments
