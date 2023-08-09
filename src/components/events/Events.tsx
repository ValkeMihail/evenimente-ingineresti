import Image from 'next/image'
import styles from './events.module.css'
import eventPlaceholder from '@/assets/eventPlaceholder.jpeg'
import React from 'react'
import arrowDiagonal from '@/assets/arrowDiagonal.svg'
import { formatDateAndTime } from '@/helpers'

type EventsProps = {
  events: any
}




const Events = ({events} : EventsProps) => {

  return (
    <section id='evenimente' className={styles.eventsSection}> 
    <h1>
      Evenimente Viitoare
    </h1>
    <div className={styles.eventsSlider}>
      { events.map((event: any) => {
          return (
            <div key={event.fields.title} className={styles.eventCard}>
              <Image
                width={490}
                height={300}
                className={styles.eventImage}
                alt='Next Event'
                src={event.fields.eventPhoto?.fields.file.url ? ("https:" + event.fields.eventPhoto.fields.file.url) : eventPlaceholder}
              />
              <div className={styles.cardDetails}>
                <h2 className={styles.cardTitle}>{event.fields.title as string}</h2>
                <p className={styles.cardDescription}>
                  {event.fields.description as string}
                </p>
              </div>
              <div className={styles.arrowContainer}>
                <h4>
                  {formatDateAndTime(event.fields.startDateAndTime as string)} - {formatDateAndTime(event.fields.endDateAndTime as string)}
                </h4>
                <h4>
                  {event.fields.city as string} , {event.fields.country as string}
                </h4>
                <Image
                  width={4}
                  height={4}
                  className={styles.arrow}
                  alt='learn more'
                  src={arrowDiagonal}
                />
              </div>
            </div>
          )
        })
      }
    </div> 
    </section>
  )
}

export default Events
