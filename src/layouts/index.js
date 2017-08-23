import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
// import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import kellieLogo from '../images/kellie_logo.svg'
import './index.css'

// const Header = () =>
    // <Grid>
    //     <Col xs={4} md={4} className="headerContents hcLeft">
    //       <h4>
    //         Located in Studio 1 in Sola Salon Studios Downtown
    //       </h4>
    //       <h4>
    //         1201 S Broadway Suite #24, Rochester, MN 55904
    //       </h4>

    //     </Col>
    //     <Col xs={4} md={4}>
    //       <img className="logo" src={kellieLogo} />
    //     </Col>
    //     <Col xs={4} md={4} className="headerContents hcRight">
    //       <h4>
    //         Sunday, Monday: Closed
    //       </h4>
    //       <h4>
    //         Tuesday-Friday: 10:00 AM to 7:00 PM
    //       </h4>
    //       <h4>
    //         Saturday: 11:00 AM to 6:00 PM
    //       </h4>
    //     </Col>
    // </Grid>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.8.0/css/tachyons.min.css"/>
    </Helmet>
    <div
      // style={{
      //   margin: '0 auto',
      //   maxWidth: 960,
      //   padding: '0px 1.0875rem 1.45rem',
      //   paddingTop: 0,
      // }}
    >
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
