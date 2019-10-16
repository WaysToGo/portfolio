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
            <p>Over the last 2+ years, I have been working with small- and medium-size companies..
              I focus primarily on building and implementing user interfaces that are usable and scalable for any web-based platform.{' '}
              <a href="https://github.com/WaysToGo" target="_blank" rel="noopener noreferrer">I enjoy experimenting</a>,building and trying out new tools.</p>
            <p>Sometimes <a href="https://twitter.com/reddy_js_dev" target="_blank" rel="noopener noreferrer">I tweet</a>.</p>
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
