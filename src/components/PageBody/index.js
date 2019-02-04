import React from 'react'
import styled from 'styled-components'
require('prismjs/themes/prism.css')
const Body = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};

/*
  th,
  td {
    padding: 0.3em;
    text-align: left;
    column-width:3;
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
    color: white; */

    table {
      border-collapse: collapse;
      border-spacing: 0;
      /*table-layout: fixed;*/
  }

  table th {
    text-align: center;
    padding-top: 20;
    height: 120%;
    width: 0.2em;
    font-size: 1.2em;
    background: lightblue;
  }
  table tr:hover{
      background-color: #eeeeee;
  }
  table tr:nth-child(even) {
    background-color: #F1F1F1	;

  }
  table th, table td {
      border: white 0.2em solid;
      padding: .2em 0.8em;
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
    
  }
  ul,
  ol {
    margin: 0 0 2em 0;
  }
  ul {
      list-style-position: inside;
      padding-left: 1em;
    li {
      list-style: disc;

      font-style: italic;
        font-weight: bold;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    padding-left: 1em;
    list-style-position: outside;
    li {
      list-style: decimal;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }
  em {
    font-style: bold;
  }
  title-text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
`

const PageBody = ({ html }) => {
  return <Body dangerouslySetInnerHTML={{ __html: html }} />
}

export default PageBody
/*h1,
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
  font-size: 1.7em;
}
h3 {
  font-size: 1em;
}

p {
  line-height: 1.4;
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
}*/
