import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import kellieLogo from '../images/kellie_logo.svg'
import kellieSocials from '../images/kellie_socials.png'
import './index.css'

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Tangles Hair Extensions and More"
      meta={[
        { name: 'Tangles Hair Extensions and More', content: 'Tangles Hair Extensions and More. Where genuinely caring about your hair is a wonderful experience' },
        { name: 'keywords', content: 'hair, hair extensions, coloring, ombre, balayage, brazilian blowouts, keratin treatments' },
        { name: 'description', content: 'Tangles Hair Extensions and More. Where genuinely caring about your hair is a wonderful experience' },
        { name: 'image', content: kellieLogo },
        { itemprop: 'name', content: 'Tangles Hair Extensions and More' },
        { itemprop: 'description', content: 'Tangles Hair Extensions and More. Where genuinely caring about your hair is a wonderful experience' },
        { itemprop: 'image', content: kellieLogo },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Tangles Hair Extensions and More' },
        { name: 'twitter:description', content: 'Tangles Hair Extensions and More. Where genuinely caring about your hair is a wonderful experience' },
        { name: 'twitter:image', content: kellieSocials },
        { name: 'og:title', content: 'Tangles Hair Extensions and More' },
        { name: 'og:image', content: kellieSocials },
        { name: 'og:description', content: 'Tangles Hair Extensions and More. Where genuinely caring about your hair is a wonderful experience' },
        { name: 'og:site_name', content: 'Tangles Hair Extensions and More' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content:'https://tangleshairextensionsandmore.com' },
        { name: 'fb:admins', content: '238806386155182' },
        { name: 'twitter:image:src', content: kellieSocials },
      ]}
    >
      <link rel="shortcut icon" type="image/svg" href={kellieLogo} />
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.8.0/css/tachyons.min.css"/>
    </Helmet>
    <div>
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
