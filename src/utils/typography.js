import Typography from 'typography'
import gray from 'gray-percentage'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import verticalRhythm from 'compass-vertical-rhythm'

import { name } from '../../package.json'

const theme = {
  title: name,

  baseFontSize: '19em',
  baseLineHeight: 1,
  googleFonts: [
    {
      name: 'Roboto Slab',
      styles: ['700'],
    },
    {
      name: 'Roboto',
      styles: ['400', '400i', '700'],
    },
  ],
  headerFontFamily: ['Roboto Slab', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'serif'],
  headerColor: 'hsla(0,0%,0%,0.9)',
  bodyColor: '#000000',
  headerWeight: 700,
  bodyWeight: 300,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const linkColor = '#2F4F4F'
    const quoteColor = '#E6E6FA'
    const vr = verticalRhythm({
      baseFontSize: '19em',
      baseLineHeight: 1,

    })

    return {
      a:{
        color: linkColor,
       baseLineHeight: '1.7em',
      },
      'a:hover,a:active': {
        textShadow: 'none', // eslint-disable-line
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
      },
      'h1,h2,h3,h4,h5,h6': {
        marginTop: rhythm(2),
        marginBottom: rhythm(2),
      },
      // children ol, ul
     header:{...scale(1/3),
       height: '0.8em',
     fontSize: '1.3em',
       padding: 1.5,

     },
     table:{...scale(1/19),
       fontWeight: options.bodyWeight,
       fontSize: '90%',
     },
     // Blockquote styles.

      blockquote: {
        ...scale(1 / 6),
        borderLeft: `${rhythm(3 / 8)} solid ${quoteColor}`,

        color: options.bodyColor,
        paddingLeft: rhythm(10 / 16),
        fontStyle: 'italic',
        marginLeft: 0,
        marginRight: 0,

      },
      'blockquote > :last-child': {
        marginBottom:1,
      },
      'blockquote cite': {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontStyle: 'normal',
        fontWeight: options.bodyWeight,
      },
      'blockquote cite:before': {
        content: '"— "',
      },
      [MOBILE_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
        blockquote: {
          borderLeft: `${rhythm(3 / 16)} solid ${linkColor}`,
          color: gray(30),
          paddingLeft: rhythm(9 / 16),
          fontStyle: 'italic',
          marginRight: 0,
        },
      },
    }
  },
}

const typography = new Typography(theme)

export default typography
