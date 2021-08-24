import React from "react"

import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import theme from "../assets/themes/theme"

import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

import { renderRichText } from "gatsby-source-contentful/rich-text"

import { ReadMore } from "./ReadMore"

import styled from "styled-components"

const datePassed = internalTime => {
  const d = new Date()
  const year = d.getFullYear()
  const day = d.getDate()
  const month = d.getMonth() + 1 // zero indexing for months for some reason
  const splitInternalDate = internalTime.split("-")

  if (parseInt(splitInternalDate[0]) < year) {
    return false
  }
  if (
    parseInt(splitInternalDate[0]) === year &&
    parseInt(splitInternalDate[1]) < month
  ) {
    return false
  }
  if (
    parseInt(splitInternalDate[0]) === year &&
    parseInt(splitInternalDate[1]) === month &&
    parseInt(splitInternalDate[2]) < day
  ) {
    return false
  }
  return true
}

/*
Creates a customized material ui timeline element
input:
  - week (week of event)
  - event (event name)
  - time (time of the event - viewable by public)
  - content (desciption of the event)
  - internalTime (used for comparisons - not viewable by public)
*/

export const TimelineOne = props => {
  return (
    <ResponsiveTimeline>
      <Timeline align="alternate" className="timeline-large">
        {props.timelineFor.map(item => {
          const { event, content, week, time, link, internalTime } = item
          const output = renderRichText(content)
          return (
            <TimelineItem>
              <TimelineOppositeContent>
                <SecondaryText>{week}</SecondaryText>
                <SecondaryText>Time: {time}</SecondaryText>
                <SecondaryText>
                  Link: <Link to={link}>{link}</Link>
                </SecondaryText>
              </TimelineOppositeContent>
              <TimelineSeparator>
                {datePassed(internalTime) ? (
                  <TimelineDot variant="outlined" color="primary"></TimelineDot>
                ) : (
                  <TimelineDot color="primary"></TimelineDot>
                )}
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Event className="card">
                  <h3>{event}</h3>
                  {output}
                </Event>
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
      <Timeline align="left" className="timeline-small">
        {props.timelineFor.map(item => {
          const { event, content, week, time, link, internalTime } = item
          const output = renderRichText(content)
          // console.log(output)
          return (
            <TimelineItem>
              <TimelineOppositeContent
                style={{ flex: 0, padding: "0" }}
              ></TimelineOppositeContent>
              <TimelineSeparator>
                {datePassed(internalTime) ? (
                  <TimelineDot variant="outlined" color="primary"></TimelineDot>
                ) : (
                  <TimelineDot color="primary"></TimelineDot>
                )}
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Event className="card">
                  <h3>{event}</h3>
                  <div style={{ marginBottom: ".5rem" }}>
                    <SecondaryText>{week}</SecondaryText>
                    <SecondaryText>Time: {time}</SecondaryText>
                    <SecondaryText>
                      Link: <Link to={link}>{link}</Link>
                    </SecondaryText>
                  </div>

                  <ReadMore>{output}</ReadMore>
                </Event>
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </ResponsiveTimeline>
  )
}

/*
Creates a customized material ui timeline element
input:
  - event (event name)
  - week (week of event)
  - date (date of the event)
  - time (time of the event - viewable by public)
  - content (desciption of the event)
  - internalTime (used for comparisons - not viewable by public)
*/

export const TimelineTwo = props => {
  return (
    <ResponsiveTimeline>
      <Timeline align="alternate" className="timeline-large">
        {props.timelineFor.map(item => {
          const { event, content, date, time, week, internalTime } = item
          const output = renderRichText(content)
          return (
            <TimelineItem>
              <TimelineOppositeContent>
                {week === null && <SecondaryText>Week: {week}</SecondaryText>}
                <SecondaryText>Date: {date}</SecondaryText>
                <SecondaryText>Time: {time}</SecondaryText>
              </TimelineOppositeContent>
              <TimelineSeparator>
                {datePassed(internalTime) ? (
                  <TimelineDot variant="outlined" color="primary"></TimelineDot>
                ) : (
                  <TimelineDot color="primary"></TimelineDot>
                )}
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Event className="card">
                  <h3>{event}</h3>
                  {output}
                </Event>
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
      <Timeline align="left" className="timeline-small">
        {props.timelineFor.map(item => {
          const { event, content, date, time, week, internalTime } = item
          const output = renderRichText(content)
          // console.log(output)
          return (
            <TimelineItem>
              <TimelineOppositeContent
                style={{ flex: 0, padding: "0" }}
              ></TimelineOppositeContent>
              <TimelineSeparator>
                {datePassed(internalTime) ? (
                  <TimelineDot variant="outlined" color="primary"></TimelineDot>
                ) : (
                  <TimelineDot color="primary"></TimelineDot>
                )}
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Event className="card">
                  <h3>{event}</h3>
                  <div style={{ marginBottom: ".5rem" }}>
                    {week === null && (
                      <SecondaryText>Week: {week}</SecondaryText>
                    )}
                    <SecondaryText>Date: {date}</SecondaryText>
                    <SecondaryText>Time: {time}</SecondaryText>
                  </div>

                  <ReadMore>{output}</ReadMore>
                </Event>
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </ResponsiveTimeline>
  )
}

const Event = styled.div`
  padding: 1.25rem;
  box-shadow: ${theme.shadows.darkShadow};

  p {
    margin: 0;
  }

  h3 {
    color: ${theme.colors.grey900};
  }
`

const ResponsiveTimeline = styled.div`
  .timeline-large {
    display: block;
  }

  .timeline-small {
    display: none;
  }
  @media screen and (max-width: 850px) {
    .timeline-large {
      display: none;
    }

    .timeline-small {
      display: block;
    }
  }
`

const SecondaryText = styled.p`
  color: ${theme.colors.blue500};

  font-size: 90%;
  margin: 0;
`
