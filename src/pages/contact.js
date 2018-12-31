import React from 'react'

import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'

const Contact = ({ data }) => {
  return (
    <Layout>
      <Container>
        <PageTitle>Contact</PageTitle>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default Contact
