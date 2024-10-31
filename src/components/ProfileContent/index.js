import React from 'react'
import ProfileIntroSection from '../ProfileIntroSection'
import ProfileListItem from '../ProfileListItem'
import EventListItem from '../EventListItem'
import Head from '../Head'
import ProfileList from '../ProfileList'
import { META } from '../../utils/constants'
import { ContentWrapper } from '../../style/shared'
import { ListsSection, ClientsList } from './style'

export default ({ data }) => {
  const { clients, events} = data

  return (
      <ContentWrapper>
        <Head
          {...META.profile}
          image={META.common.image}
        />
        <ProfileIntroSection
          content={() =>
            <>
            <p>
              For over 8 years, I've partnered with companies of all sizes - from small startups 
              to large enterprises - to build and implement scalable, user-friendly interfaces 
              for web platforms. 
              <a 
                href="https://github.com/WaysToGo" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                I love experimenting
              </a> 
              with new tools and technologies.
            </p>
            <p>
              Find me on <a 
                href="https://twitter.com/shiv4io" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Twitter
              </a> where I share my thoughts occasionally.
            </p>
           </>
          }
        />
        <ListsSection>
          {events.edges.length > 0 &&
            <ProfileList
              title='Timeline'
              list={() => events.edges.map(({ event }, i) => (
                <EventListItem
                  key={i}
                  {...event}
                />
              ))}
            />}
          {clients.edges.length > 0 &&
            <ClientsList
              title='Companies I have worked in'
              list={() => clients.edges.map(({ client }, i) => (
                <ProfileListItem
                  key={i}
                  {...client}
                />
              ))}
            />}
        </ListsSection>
      </ContentWrapper>
  )
}
