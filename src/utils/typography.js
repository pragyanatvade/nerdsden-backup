import Typography from 'typography'
import gray from 'gray-percentage'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import verticalRhythm from 'compass-vertical-rhythm'
<<<<<<< HEAD
import CodePlugin from 'typography-plugin-code'
import { name } from '../../package.json'


const theme = {
  title: name,
  baseFontSize: "19em",
  baseLineHeight: 1.5,
  headerFontSize: "5%",
  scaleRatio:2,
=======

import { name } from '../../package.json'

const theme = {
  title: name,

  baseFontSize: '19em',
  baseLineHeight: 1,
>>>>>>> master
  googleFonts: [
    {
      name: 'Roboto Slab',
      styles: ['700'],
    },
    {
      name: 'Roboto',
<<<<<<< HEAD
      styles: ['400','400i', '700',],
=======
      styles: ['400', '400i', '700'],
>>>>>>> master
    },
  ],
  headerFontFamily: ['Roboto Slab', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'serif'],
<<<<<<< HEAD
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
      baseFontSize: "19em",
      baseLineHeight: 1,

=======
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
>>>>>>> master
    })

    return {
      a:{
        color: linkColor,
<<<<<<< HEAD

=======
       baseLineHeight: '1.7em',
>>>>>>> master
      },
      'a:hover,a:active': {
        textShadow: 'none', // eslint-disable-line
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
      },
<<<<<<< HEAD
      'h1,h2,h3,h4,h5,h6': {
        marginTop: rhythm(2),
        marginBottom: rhythm(1),
      },
      // children ol, ul
     header:{
       ...scale(0),
       height: '1px',
     fontSize: '19px',
       padding: 1.5,

     },

     table:{...scale(1/19),
       fontWeight: options.bodyWeight,
       fontSize: '90%',
     },
     // Blockquote styles.

      blockquote: {
        ...scale(1 / 6),
        borderLeft: `${rhythm(2 / 8)} solid ${quoteColor}`,
        color: '#17202A',
=======

      // 'h1,h2,h3,h4,h5,h6': {
      //   marginTop: rhythm(1),
      // },
      // children ol, ul
      header: {
        ...scale(1 / 3),
        height: '0.8em',
        fontSize: '1.3em',
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
        borderLeft: `${rhythm(3 / 8)} solid ${quoteColor}`,

        color: options.bodyColor,
>>>>>>> master
        paddingLeft: rhythm(10 / 16),
        fontStyle: 'italic',
        marginLeft: 0,
        marginRight: 0,
<<<<<<< HEAD

      },
      'blockquote > :last-child': {
        marginBottom:1,
      },
      'blockquote cite': {
        ...adjustFontSizeTo(options.baseFontSize),
        color: '#2C3E50',

        fontWeight: options.boldWeight,
=======
      },
      'blockquote > :last-child': {
        marginBottom: 1,
      },
      'blockquote cite': {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontStyle: 'normal',
        fontWeight: options.bodyWeight,
>>>>>>> master
      },
      'blockquote cite:before': {
        content: '"— "',
      },
      [MOBILE_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
<<<<<<< HEAD
        table:{...scale(1/25),
          fontWeight: options.bodyWeight,
          fontSize: '90%',
          paddingLeft: rhythm(18/ 36),
          marginLeft: 0,
        },
        blockquote: {
          borderLeft: `${rhythm(3 / 16)} solid ${quoteColor}`,
=======
        blockquote: {
          borderLeft: `${rhythm(3 / 16)} solid ${linkColor}`,
          color: gray(30),
>>>>>>> master
          paddingLeft: rhythm(9 / 16),
          fontStyle: 'italic',
          marginRight: 0,
        },
      },
    }
  },
}

<<<<<<< HEAD
const typography =new Typography(theme);
=======
const typography = new Typography(theme)
>>>>>>> master

export default typography
