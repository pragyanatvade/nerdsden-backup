import React from 'react'
import styled from 'styled-components'
require('prismjs/themes/prism.css')
const Body = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};


  th,
  td {
    padding: 0.3em;
    text-align: left;
  }

  tr:nth-child(even) {
    background-color: #def3fd;
  }
  tr:hover {
    background-color: #eeeeee;
  }

  th {
    width: 1em;
    padding-top: 20;
    height: 1em;
    text-align: center;
    font-size: 1.2em;
    background-color: #00bcd4;
    color: white;
  }
    h1,
    h2,
    h3 {
      line-height: 1.25;
      margin: 0 0 1rem 0;
      text-transform: capitalize;
    }
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.3em;
  }
  p {
    line-height: 1.4;
    margin: 0 0 2em 0;
  }

  a {
    transition: 0.2s;
    line-height: 1.6;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      font-style: italic;
      font-weight: bold;
      list-style: disc;
      list-style-position: outside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      font-weight:bold;
      font-style: italic;
      list-style: decimal;
      list-style-position: outside;
      line-height: 1.1;
      &:last-child {
        margin: 0;
      }
    }
  }
`

const PageBody = ({ html }) => {
  return <Body dangerouslySetInnerHTML={{ __html: html }} />
}

export default PageBody
