import styles from './events.module.css'
import React from 'react'
import Event from './Event'
import { EventType } from '../../../types'

type EventsProps = {
  events: EventType[]
}

const Events = ({events} : EventsProps) => {


  return (
    <section id='evenimente' className={styles.eventsSection}> 
    <h1>
      Evenimente Viitoare
    </h1>
    <div className={styles.eventsSlider}>
      { events.map((event: EventType) => {
          return (
            <Event
              event={event}
              key={event.fields.title}
            />
          )
        })
      }
    </div> 
    </section>
  )
}

export default Events
