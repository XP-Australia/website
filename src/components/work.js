import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

import BikableLogo from 'img/bikable.png'

const BikableLink = <a href="https://bikable.com.au" target="_blank">Check out</a>

const Work = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Work</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            img={BikableLogo}
            title="Bikable"
            abstract="Your best e-bike choice in just a few seconds"
            link={BikableLink}
          />
        </Fragment>
      }
    />
  )
}

export default Work
