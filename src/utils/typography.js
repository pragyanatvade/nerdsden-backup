import Typography from 'typography'
import gray from 'gray-percentage'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import verticalRhythm from 'compass-vertical-rhythm'
import CodePlugin from 'typography-plugin-code'
import { name } from '../../package.json'

const theme = {
  title: name,
  baseFontSize: '19em',
  baseLineHeight: 1.5,
  headerFontSize: '5%',
  scaleRatio: 2,
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
  headerColor: '#1C2833',
  bodyColor: '#212F3D',
  headerWeight: 700,
  bodyWeight: 'normal',
  boldWeight: 'bold',
  blockMarginBottom: 0.8,
  includeNormalize: true,

  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options, styles) => {
    const linkColor = '#2980B9'
    const quoteColor = '#D6EAF8'
    const vr = verticalRhythm({
      baseFontSize: '19em',
      baseLineHeight: 1,
    })

    return {
      a: {
        color: linkColor,
      },
      'a:hover,a:active': {
        textShadow: 'none', // eslint-disable-line
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
      },
      'h1,h2,h3,h4,h5,h6': {
        marginTop: rhythm(2),
        marginBottom: rhythm(1),
      },
      // children ol, ul
      header: {
        ...scale(0),
        height: '1px',
        fontSize: '19px',
        padding: 1.5,
      },

      table: {
        ...scale(1 / 19),
        fontWeight: options.bodyWeight,
        fontSize: '90%',
      },
      // Blockquote styles.

      blockquote: {
        ...scale(1 / 6),
        borderLeft: `${rhythm(2 / 8)} solid ${quoteColor}`,
        color: '#17202A',
        paddingLeft: rhythm(10 / 16),
        fontStyle: 'italic',
        marginLeft: 0,
        marginRight: 0,
      },
      'blockquote > :last-child': {
        marginBottom: 1,
      },
      'blockquote cite': {
        ...adjustFontSizeTo(options.baseFontSize),
        color: '#2C3E50',

        fontWeight: options.boldWeight,
      },
      'blockquote cite:before': {
        content: '"— "',
      },
      [MOBILE_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
        table: {
          ...scale(1 / 25),
          fontWeight: options.bodyWeight,
          fontSize: '90%',
          paddingLeft: rhythm(18 / 36),
          marginLeft: 0,
        },
        blockquote: {
          borderLeft: `${rhythm(3 / 16)} solid ${quoteColor}`,
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
