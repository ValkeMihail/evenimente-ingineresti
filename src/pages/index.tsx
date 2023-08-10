import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navigation from '@/components/nav/Navigation'
import Header from '@/components/header/Header'
import Events from '@/components/events/Events'
import Footer from '@/components/footer/Footer'
import { client } from '@/client-api'
import { GetStaticProps } from 'next'



export const getStaticProps : GetStaticProps = async () => {
  
  try {
    const response = await client.getEntries({
      content_type: 'event' 
    })
    return {
      props: {
        events: response.items
      },
      revalidate: 64000   
    }
  } catch (error) {
    console.error('Error fetching events:', error)
    return {
      props: {
        events: []
      }
    }  
  }
}

type HomeProps = {
  events: any
}


export default function Home(
  {events} : HomeProps
  ) {
    const sortedEventsByDate = events.sort((a : any, b : any) => {
      return new Date(a.fields.startDateAndTime as string).getTime() - new Date(b.fields.startDateAndTime as string).getTime()
    })
    const upcomingEvent = sortedEventsByDate[0]
    const restOfEvents = sortedEventsByDate.slice(1)
  return (
    <>
      <Head>
        <title>Evenimente Inginerești - Descoperă evenimente inginerești din Romania</title>
        <meta name="description" content="
          Descoperiți evenimente diverse, de la conferințe interactive și workshop-uri practice, până la prezentări de ultimă oră și discuții animate despre tendințele tehnologice emergente. Fiecare eveniment are scopul să vă ofere oportunități de învățare, networking și explorare a celor mai noi inovații. Alăturați-vă nouă pentru a vă conecta cu mentori, a împărtăși cunoștințe și a explora împreună viitorul fascinant al ingineriei.
        " />
        <meta name="keywords" content="evenimente, inginerie, romania, conferinte, workshop-uri, prezentari, discutii, tendinte, tehnologie, inovatii, networking, mentori, cunostinte, viitor, fascinant, inginerie" />
        <meta name="author" content="Evenimente Ingineresti" />
        <meta name='title' content='Evenimente Inginerești - Descoperă evenimente inginerești din Romania' />
        <meta name='image' content='https://drive.google.com/uc?export=download&id=1H-Lg0snxfRRp0J9V4CzdaC_1ZeCpH-oW' />
        <meta property='og:image' content='https://drive.google.com/uc?export=download&id=1H-Lg0snxfRRp0J9V4CzdaC_1ZeCpH-oW' />
        <meta property='og:title' content='Evenimente Inginerești - Descoperă evenimente inginerești din Romania' />
        <meta property='og:description' content='Descoperiți evenimente diverse, de la conferințe interactive și workshop-uri practice, până la prezentări de ultimă oră și discuții animate despre tendințele tehnologice emergente. Fiecare eveniment are scopul să vă ofere oportunități de învățare, networking și explorare a celor mai noi inovații. Alăturați-vă nouă pentru a vă conecta cu mentori, a împărtăși cunoștințe și a explora împreună viitorul fascinant al ingineriei.' />
        <meta property='og:url' content='https://evenimente-inginerești.vercel.app' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Evenimente Inginerești' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navigation/>
        <Header upcomingEvent = {upcomingEvent}/>
        <Events events={restOfEvents}/>
        <Footer/>
      </main>
    </>
  )
}
