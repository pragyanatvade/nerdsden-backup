(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return c});n(26),n(76);var r=n(0),a=n.n(r),o=n(169),i=n(177),l=n(171),c="313395827";t.default=function(e){var t=e.data.data.edges,n={};return t.forEach(function(e){var t=e.node,r=t.id,a=t.excerpt,o=t.fields,i=t.frontmatter,l=Object.assign({id:r},o,i,{excerpt:a}),c={id:r,title:l.title,slug:l.slug};l.tags.forEach(function(e){var t=e.title;n[r]?n[t].push(c):n[t]=[c]})}),a.a.createElement(l.a,null,a.a.createElement(o.a,null,a.a.createElement(i.a,null,"Tags")))}},169:function(e,t,n){"use strict";var r=n(167),a=n.n(r),o=n(0),i=n.n(o);function l(){var e=a()(["\n  margin: 0 auto auto;\n  width: 100%;\n  max-width: ",";\n  padding: 3em 1.5em 2em;\n  flex-grow: 1;\n"]);return l=function(){return e},e}var c=n(166).c.section(l(),function(e){return e.theme.sizes.maxWidth});t.a=function(e){var t=e.children;return i.a.createElement(c,null," ",t," ")}},171:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(166),i=(n(76),n(56),n(182),n(183)),l=n.n(i),c=n(175),s=n.n(c),m=n(174),u=m.facebook.appId,f=function(e){var t=e.post,n=void 0===t?{}:t,r=e.page,o=void 0===r?{}:r,i=m.siteTitle,c=m.siteDescription,f=m.siteImage,d=m.siteUrl,p="",h=[{"@context":"https://schema.org","@type":"WebSite",url:m.siteUrl,name:m.shortSiteTitle,alternateName:m.siteTitle}];if(Object.keys(n).length>0){var A=n.metaTitle||n.title;console.log("prefix",A,A.length),(i=A+" | "+m.shortSiteTitle).length>60&&(i=""+A),c=n.metaDescription||n.summary||n.excerpt,d=m.siteUrl+"/"+n.slug,n.tags&&n.tags.forEach(function(e){return p+=e.title+","}),h.push({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":m.siteUrl,name:m.siteTitle}},{"@type":"ListItem",position:2,item:{"@id":d,name:i}}]},{"@context":"https://schema.org","@type":"BlogPosting",url:d,name:i,alternateName:m.siteTitle||"",headline:i,image:f,author:m.author,publisher:m.publisher,datePublished:n.date,dateModified:n.modified||n.date,mainEntityOfPage:d})}Object.keys(o).length>0&&(i=(o.metaTitle||o.title)+" | "+m.shortSiteTitle,c=o.metaDescription||o.summary||o.excerpt,d=m.siteUrl+"/"+o.slug,h.push({"@context":"https://schema.org","@type":"WebPage",url:d,name:i}));return a.a.createElement(l.a,{htmlAttributes:{lang:m.siteLanguage,prefix:"og: https://ogp.me/ns#"}},a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("link",{rel:"icon",href:s.a}),a.a.createElement("link",{rel:"canonical",href:d}),a.a.createElement("title",null,i),a.a.createElement("meta",{name:"image",content:f.src}),a.a.createElement("meta",{name:"description",content:c}),a.a.createElement("meta",{name:"keywords",content:""+p.trim(",")}),a.a.createElement("link",{rel:"preconnect",href:"https://m.facebook.com"}),a.a.createElement("link",{rel:"preconnect",href:"https://staticxx.facebook.com"}),a.a.createElement("link",{rel:"preconnect",href:"https://connect.facebook.net"}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),a.a.createElement("meta",{property:"og:title",content:i}),a.a.createElement("meta",{property:"og:type",content:"article"}),a.a.createElement("meta",{property:"og:url",content:d}),a.a.createElement("meta",{property:"og:image",itemProp:"image",content:f.url}),a.a.createElement("meta",{property:"og:image:width",content:f.width}),a.a.createElement("meta",{property:"og:image:height",content:f.height}),a.a.createElement("meta",{property:"og:description",content:c}),a.a.createElement("meta",{property:"fb:app_id",content:u}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:m.authorTwitterHandle||""}),a.a.createElement("meta",{name:"twitter:title",content:i}),a.a.createElement("meta",{name:"twitter:image",content:f.url}),a.a.createElement("meta",{name:"twitter:description",content:c}))},d=n(167),p=n.n(d),h=n(36);function A(){var e=p()(["\n  width: 100%;\n  max-width: ",";\n  margin: 0 auto;\n  padding: 0 1.5em;\n\n  ul {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  li {\n    display: inline-block;\n    margin-left: 1em;\n    &:first-child {\n      position: relative;\n      margin: 0;\n      flex-basis: 100%;\n    }\n  }\n\n  a {\n    text-decoration: none;\n    color: DarkGray;\n    font-weight: 600;\n    transition: all 0.2s;\n    border-bottom: 2px solid ",";\n    &:hover {\n      color: white;\n    }\n  }\n"]);return A=function(){return e},e}function g(){var e=p()(["\n  background: ",";\n  width: 100%;\n  padding: 1.5em 0;\n"]);return g=function(){return e},e}var v=o.c.header(g(),function(e){return e.theme.colors.base}),b=o.c.nav(A(),function(e){return e.theme.sizes.maxWidth},function(e){return e.theme.colors.base}),y={color:"white"},w=function(){return a.a.createElement(v,null,a.a.createElement(b,null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(h.Link,{to:"/",activeStyle:y},"Home")),a.a.createElement("li",null,a.a.createElement(h.Link,{to:"/tags/",activeStyle:y},"Tags")),a.a.createElement("li",null,a.a.createElement(h.Link,{to:"/about/",activeStyle:y},"About")),a.a.createElement("li",null,a.a.createElement(h.Link,{to:"/contact/",activeStyle:y},"Contact")))))};n(168);function E(){var e=p()(["\n  display: inline-block;\n  padding: 0.25em 0;\n  width: 100%;\n  @media screen and (min-width: ",") {\n    width: auto;\n  }\n  a {\n    font-weight: 600;\n    transition: all 0.2s;\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n    &:visited {\n      color: ",";\n    }\n  }\n"]);return E=function(){return e},e}function x(){var e=p()(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n  border-top: 1px solid ",";\n  padding: 1em 0 2em;\n  margin: 0 1.5em;\n"]);return x=function(){return e},e}function P(){var e=p()(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin: 0 auto;\n  max-width: ",";\n"]);return P=function(){return e},e}var k=o.c.footer(P(),function(e){return e.theme.sizes.maxWidth}),T=o.c.ul(x(),function(e){return e.theme.colors.secondary}),j=o.c.li(E(),function(e){return e.theme.responsive.small},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight},function(e){return e.theme.colors.base}),z=function(){return a.a.createElement(k,null,a.a.createElement(T,null,a.a.createElement(j,null,"Copyright © 2019 -"," ",a.a.createElement("a",{href:"https://vadelabs.com/",rel:"nofollow noopener noreferrer",target:"_blank"},"Vadelabs"),". All Rights Reserved"),a.a.createElement(j,null,a.a.createElement("a",{href:"/privacy/",target:"_blank",rel:"noopener noreferrer"},"Privacy")," ",a.a.createElement("a",{href:"/terms-of-use/",target:"_blank",rel:"noopener noreferrer"},"Terms Of Use")," ",a.a.createElement("a",{href:"/contact/",target:"_blank",rel:"noopener noreferrer"},"Contact"))))},S={colors:{base:"#121212",secondary:"#e9e9e9",tertiary:"#f3f3f3",highlight:"#5b8bf7"},sizes:{maxWidth:"1050px",maxWidthCentered:"650px"},responsive:{small:"35em",medium:"50em",large:"70em"}};function D(){var e=p()(['\n  /* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n  */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* Added to Fix Footer to bottom of viewport */\n  html, body {\n    height: 100%;\n  }\n  .siteRoot {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n  .siteContent {\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n  }\n  footer {\n    width: 100%;\n  }\n\n  /* End Fix to Place Footer on Bottom of Viewport */\n\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  @media screen and (min-width: 35em) {\n    html {\n      margin-right: calc(-100vw + 100%);\n      overflow-x: hidden;\n    }\n  }\n\n  ol, ul, li {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote::before, blockquote::after,\n  q::before, q::after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: white;\n    line-height: 1;\n    font-size: 100%;\n    font-variant-ligatures: none;\n    text-rendering: optimizeLegibility;\n    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;\n    font-weight: 400;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n\n  img {\n    display: block;\n    width: 100%;\n    height: auto;\n  }\n\n  button,\n  input {\n    font-family: inherit;\n    font-size: inherit;\n    background: none;\n    border: none;\n    outline: none;\n    appearance: none;\n    border-radius: 0;\n    resize: none;\n    &:focus {\n      outline: none;\n    }\n    &:invalid {\n      box-shadow: none;\n    }\n  }\n']);return D=function(){return e},e}var L=Object(o.b)(D());t.a=function(e){var t=e.children,n=e.post,r=e.page;e.index;return a.a.createElement("div",{className:"siteRoot"},a.a.createElement(f,{post:n,page:r,index:!0}),a.a.createElement(o.a,{theme:S},a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"siteContent"},a.a.createElement(w,null),t),a.a.createElement(z,null))),a.a.createElement(L,null))}},174:function(e,t){e.exports={siteTitle:"Nerd's Den | Memoirs Of A Skeptic Nerd",shortSiteTitle:"Nerd's Den",siteDescription:"Software engineering blog for vadelabs. It discusses about software design, software architecture, web development, and software developer practices. Check out our free articles, tutorials, courses, and toolkits for more ways to learn about software development.",siteUrl:"https://nerds-den.com",pathPrefix:"/",siteImage:{"@type":"ImageObject",url:"https://nerds-den.com/logos/nerds-den.png",width:820,height:312},siteLanguage:"en",headerTitle:"Nerd's Den",headerSubTitle:"Memoirs Of A Skeptic Nerd",publisher:{"@type":"Organization",name:"Vadelabs, Inc.",url:"https://vadelabs.com",logo:{"@type":"ImageObject",url:"https://nerds-den.com/logos/nerds-den.png"}},author:{"@type":"Person",name:"Pragyan Tripathi",url:"https://nerds-den.com/about/"},authorTwitterHandle:"pntripathi9417",authorSocialLinks:[{name:"github",url:"https://github.com/pntripathi9417"},{name:"twitter",url:"https://twitter.com/pntripathi9417"},{name:"facebook",url:"https://facebook.com/pntripathi9417"}],manifestName:"Nerd's Den - Memoirs Of A Skeptic Nerd",manifestShortName:"Nerd's Den",manifestStarUrl:"/",manifestBackgroundColor:"white",manifestThemeColor:"#666",manifestDisplay:"standalone",google:{trackingId:{}.GOOGLE_ANALYTICS_ID||"UA-55436366-2"},facebook:{appId:{}.FB_APP_ID||"2232544823425455"},postsPerHomePage:10,postsPerPage:10}},175:function(e,t){e.exports="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAADr2/T/69v0/+vb9P/q2vT/7t72//jo+f/46Pn/9+j5//fo+f/56/r/9uf5/+/f9v/r2vT/69v0/+vb9P/r2/T/7d32/+3d9v/t3PX/8OD3/+LS8f+wnN3/e2TJ/4x30P+3pN//jHHN/4tzzf/fz+//79/3/+3c9v/t3fb/7d32/+/h+P/v4fj/7d73//vs/P+Cacz/JAep/y8Trf8vE63/PSu0/2d70P9TW8T/bVfD//bn+v/u4Pf/7+H4/+/h+P/z5Pn/8uP4//nn+v/U0/D/X2fI/zoasP88H7H/RC61/1dQwv+w8/f/qubz/22A0P/S0e//+ej7//Lj+P/z5Pn/8ub4//Hl+P/36fn/3dnx/1BKv/8xEa3/PyWz/15gxf9QRb3/XV/G/3KF0/9YVML/087u//jq+v/x5fj/8ub4//Xo+v/16Pr/+Or7/+vf9f+FitT/cHjO/05Mv/9MP7v/Pym0/0Avtv8/Mbb/Ry+2/+zd9f/46/v/9ef6//Xo+v/06/v/9Ov7//Tq+//16/v/+/f+/+nh9v9+bsv/bXzQ/2Bfxf+ipN3/0tfw/83P7f/z6Pr/9ev7//Tq+//06/v/9+77//fu+//37vv/9+37//bt+//97/v/29/z/3KM1f+pr+D//vH7//70/v/98/3/+O/7//fu+//37vv/9+77//fy+//38vv/9/H7//fy+//47/r/wNrw/53i8v+t8vn/qvf7/7DT7f/16vj/+fT8//bx+v/38vv/9/L7//fy+//59Pv/+fT7//j0+//8+P3/7ej2/5jL6/+l5/X/nNTu/4245f+i7Pf/t9Tt/+/q9v/79vz/+PT7//n0+//59Pv/+vj+//r4/v/49v3//////8vL7P+JteH/jbjj/4Om3v+Wyur/jbbk/5DH5//W1u////7///n2/f/6+P7/+vj+//z6/f/8+v3/+/r9///+///j5/X/k8Lm/5PD6P+f2vD/hKfc/6Pm9P+Cntz/4NPu///////7+f3//Pr9//z6/f/+/f7//v3+//38/v//////6u74/5/e8f+o7Pb/r/r9/6jt9/+2////a3zP/9fS7f///////Pv9//79/v/+/f7////////////+/v///////+fg8/+hxuf/qPj8/6b0+v+g5fX/mdju/4+r3P/18vn///////7+////////////////////////////////////////9/T4/77K6f+31Oz/oK3e/87U7P+0sOD///79//////////////////////////////////////////////7//////////v///vz+//38/v///////Pz9//39/v//////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="},177:function(e,t,n){"use strict";n(168);var r=n(167),a=n.n(r),o=n(0),i=n.n(o);function l(){var e=a()(["\n  font-size: ",";\n  text-transform: capitalize;\n  font-weight: 600;\n  text-align: center;\n  margin: 0 0 3rem 0;\n  margin: ",";\n  line-height: 1.2;\n  span {\n    margin: 0 0 0 0.25em;\n  }\n  a {\n    transition: all 0.2s;\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return l=function(){return e},e}var c=n(166).c.h1(l(),function(e){return e.small?"2em":"3em"},function(e){return e.small?"1rem 0 4rem 0":"0 0 3rem 0"},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight});t.a=function(e){return i.a.createElement(c,{small:e.small},e.children)}}}]);
//# sourceMappingURL=component---src-pages-tags-js-0c4b3f88c0dbb107fe93.js.map