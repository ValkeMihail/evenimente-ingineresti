import React from 'react'
import styles from './header.module.css'
import eventPlaceholder from "@/assets/eventPlaceholder.jpeg"
import Image from 'next/image'
import calendar from "@/assets/calendar.svg"
import location from "@/assets/location.svg"
import user1 from "@/assets/user1.png"
import { useState, useEffect } from 'react'
import { formatDateAndTime } from '@/helpers'


type HeaderProps = {
  upcomingEvent : any
}

const Header = (
  {upcomingEvent} : HeaderProps
) => {

  const [timeLeft, setTimeLeft] = useState('');
  const [startDate , setStartDate] = useState('')
  const [endDate , setEndDate] = useState('')


  useEffect(() => {
    setStartDate(formatDateAndTime(upcomingEvent.fields.startDateAndTime))
    setEndDate(formatDateAndTime(upcomingEvent.fields.endDateAndTime))
    const updateCounter : any = () => {
      const currentDate = new Date();
      const startDate = new Date(upcomingEvent.fields.startDateAndTime)
      const timeDifference = startDate.getTime() - currentDate.getTime();
      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        const counterText = `${days}d   ${hours}h   ${minutes}m   ${seconds}s`;
        setTimeLeft(counterText);
      } else {
        setTimeLeft('Event has already occurred!');
      }
    };
    updateCounter(); 
    const counterInterval = setInterval(updateCounter, 1000);
    return () => {
      clearInterval(counterInterval); 
    };
  }, []);

  return (
    <section className={styles.header}>
      <div className={styles.headerLeft}>
        <Image
          className={styles.nextEventImage}
          style={{
            height: "100%",
            width: "100%"
          }}
          width={490}
          height={300}          
          alt="Next Event"
          src={upcomingEvent.fields.eventPhoto.fields.file.url ? "https:"+upcomingEvent.fields.eventPhoto.fields.file.url : eventPlaceholder}
        />
      </div>
      <div className={styles.headerRight}>
        <div className={styles.eventDetails}>
          <h2>
            {upcomingEvent.fields.title}
          </h2>
          <p>
            {upcomingEvent.fields.description}
          </p>
          <div className={styles.details}>
            <div className={styles.detailsWrap}>
              <div className={styles.iconWrap}>
                <Image
                  width={20}
                  height={20}
                  alt="calendar icon"
                  src={calendar}
                />
                <h3>
                  {startDate ? startDate : upcomingEvent.fields.startDateAndTime} - {endDate ? endDate : upcomingEvent.fields.endDateAndTime}
                </h3>
              </div>
              <div className={styles.iconWrap}>
                <Image
                  width={20}
                  height={20}
                  alt="location icon"
                  src={location}
                />
                <h3>
                  {upcomingEvent.fields.city}, {upcomingEvent.fields.country}
                </h3>
              </div>
            </div>
            <div className={`${styles.detailsWrap} ${styles.speakersContainer}`}>
              <h3>Invitați : </h3>
              <div className={styles.speakers}>                
                  {
                    upcomingEvent.fields.participantsPhotos.map((speaker: any) => {
                      return (
                        <div key={speaker.fields.file.url} className={styles.speakerWrap}>
                          <Image
                            src={speaker.fields.file.url ? "https:"+speaker.fields.file.url : user1}
                            width={20} 
                            height={20}
                            alt="speaker"
                          />
                        </div>
                      )
                    })
                  }
              </div>
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          <button className="button">
            Participă
          </button>          
          <div className={styles.counter}>
            {timeLeft}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
