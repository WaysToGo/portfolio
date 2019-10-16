import React from 'react'
import Intro from '../Intro'
import { Wrapper, InfoWrapper, Content, StyledImage } from './style'
import { Loader } from '../../style/shared'

const ProfileIntroSection = ({ content }) =>
  <Wrapper>
    <InfoWrapper>
      <Intro fixed={false} />
      <Content>{content()}</Content>
    </InfoWrapper>

    <StyledImage
      src="/images/profile/Shiva_Reddy.jpeg"
      alt="Shiva Reddy - Interdisciplinary Developer"
      loader={({ isLoaded }) => <Loader isLoaded={isLoaded} />}
      sources={[{
        media: 'max-width: 40rem',
        srcset: [
          '/images/profile/Shiva_Reddy.jpeg'

        ]
      },{
        srcset: [
          '/images/profile/Shiva_Reddy.jpeg'
        ]
      }]}
    />
  </Wrapper>

export default ProfileIntroSection
