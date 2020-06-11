import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { fontSize } from 'styles/theme'

import Section from 'components/section'

const FooterText = styled.div`
  text-align: center;
  font-size: ${fontSize.f2};
  ${media.lg`
    font-size: ${fontSize.f1};
  `}
  ${media.sm`
    text-align: left;
    font-size: ${fontSize.f1};
  `}
`

const Footer = () => {
  return (
    <Section>
      <FooterText>
        Get in touch: <a href="mailto:contact@auxp.com.au">contact@auxp.com.au</a><br />
        This page is open sourced. Check it out on&nbsp;
        <a target="_blank" href="https://github.com/XP-Australia/website">Github</a>
        <br />© 2020 XP Australia
      </FooterText>
    </Section>
  )
}

export default Footer
