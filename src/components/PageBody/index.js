import React from 'react'
import styled from 'styled-components'
require('prismjs/themes/prism.css')

const Body = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};

  table {
    width: 100%;
  }
  th,
  td {
    padding: 10px;
    text-align: left;
  }

  tr:nth-child(even) {
    background-color: #def3fd;
  }
  tr:hover {
    background-color: #eeeeee;
  }

  th {
    width: 10px;
    padding-top: 20;
    height: 50px;
    text-align: center;
    font-size: 120%;
    background-color: #00bcd4;
    color: white;
  }

  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    text-transform: capitalize;
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  }

  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }

  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${props => props.theme.colors.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${props => props.theme.colors.secondary} !important;
    span {
      background: inherit !important;
    }
  }
`

const PageBody = ({ html }) => {
  return <Body dangerouslySetInnerHTML={{ __html: html }} />
}

export default PageBody
