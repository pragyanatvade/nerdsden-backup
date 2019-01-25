import Typography from 'typography'
import gray from 'gray-percentage'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import verticalRhythm from 'compass-vertical-rhythm'

import { name } from '../../package.json'

const theme = {
  title: name,
  baseFontSize: '19px',
  baseLineHeight: 1.58,
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
  bodyColor: 'hsla(0,0%,0%,0.73)',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const linkColor = '#950451'
    const vr = verticalRhythm({
      baseFontSize: '17px',
      baseLineHeight: '28px',
    })
    return {
      a: {
        color: linkColor,
        textDecoration: 'none',
        textShadow: 'none', // eslint-disable-line
        backgroundImage: `none`, // eslint-disable-line
      },
      'a:hover,a:active': {
        textShadow: 'none', // eslint-disable-line
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
      },
      // 'h1,h2,h3,h4,h5,h6': {
      //   marginTop: rhythm(1),
      // },
      // children ol, ul
      'li>ol,li>ul': {
        marginLeft: '20px',
        marginBottom: 0,
      },
      // Blockquote styles.
      blockquote: {
        ...scale(1 / 5),
        borderLeft: `${rhythm(6 / 16)} solid ${linkColor}`,
        color: gray(35),
        paddingLeft: rhythm(10 / 16),
        fontStyle: 'italic',
        marginLeft: 0,
        marginRight: 0,
      },
      'blockquote > :last-child': {
        marginBottom: 0,
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
          color: gray(41),
          paddingLeft: rhythm(9 / 16),
          fontStyle: 'italic',
          marginLeft: rhythm(-3 / 4),
          marginRight: 0,
        },
      },
    }
  },
}

const typography = new Typography(theme)

export default typography
