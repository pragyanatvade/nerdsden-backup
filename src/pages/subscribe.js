import React from 'react'

import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SubscribeForm from '../components/SubscribeForm'
import Layout from '../components/Layout'

const Subscribe = ({ data }) => {
  return (
    <Layout>
      <Container>
        <PageTitle>Subscribe Us</PageTitle>
        <SubscribeForm />
      </Container>
    </Layout>
  )
}

export default Subscribe
