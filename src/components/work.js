import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

import BikableLogo from 'img/bikable.png'

const BikableLink = <Link to="https://bikable.com.au" target="_blank">Check out</Link>

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
            abstract="The next platform to connect bike riders and bike shops"
            link={BikableLink}
          />
        </Fragment>
      }
    />
  )
}

export default Work
