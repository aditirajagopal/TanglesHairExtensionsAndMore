import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import kellieLogo from '../images/kellie_logo.svg'
import './index.css'

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'Tangles Hair Extensions and More', content: 'Tangles Hair Extensions and More. Where genuinely caring about your hair is a wonderful experience' },
        { name: 'keywords', content: 'hair, hair extensions, coloring, ombre, balayage, brazilian blowouts, keratin treatments' },
      ]}
    >
    <meta property="og:title" content="Tangles Hair Extensions and More" />
    <meta property="og:description" content="Tangles Hair Extensions and More. Where genuinely caring about your hair is a wonderful experience" />
    <meta property="og:image" content={kellieLogo} />
    <meta property="og:url" content="https://kellie-does-ur-hair.netlify.com/" />
    <meta name="twitter:card" content="summary_large_image" />

    <meta property="og:site_name" content="Tangles Hair Extensions and More" />
    <meta name="twitter:image:alt" content="Tangles Hair Extensions and More" />

    <meta property="fb:app_id" content="Tangles Hair Extensions and More" />
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
