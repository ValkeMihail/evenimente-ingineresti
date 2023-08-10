import React from 'react'
import styles from "./events.module.css"
import Image from 'next/image'
import { formatDateAndTime } from '@/helpers'
import arrowDiagonal from '@/assets/arrowDiagonal.svg'
import eventPlaceholder from '@/assets/eventPlaceholder.jpeg'


const Event = ({event} : {event : any}) => {

  const [startDate , setStartDate] = React.useState('')
  const [endDate , setEndDate] = React.useState('')

  React.useEffect(() => {
    setStartDate(formatDateAndTime(event.fields.startDateAndTime as string))
    setEndDate(formatDateAndTime(event.fields.endDateAndTime as string))
  }, [])



  return (
    <div className={styles.eventCard}>
      <Image
        width={490}
        height={300}
        style={{
          width: "100%",
          height: "100%",
        }}
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
          {startDate ? startDate : event.fields.startDateAndTime} - {endDate ? endDate : event.fields.endDateAndTime}
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
}

export default Event
