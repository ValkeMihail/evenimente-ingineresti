import Image from 'next/image'
import styles from './footer.module.css'
import aboutImage from '@/assets/aboutImage.jpeg'
import facebook from '@/assets/facebook.svg'
import instagram from '@/assets/instagram.svg'
import linkedin from '@/assets/linkedin.svg'
import twitter from '@/assets/twitter.svg'

const Footer = () => {
  return (
    <>
    <h1 id='despre' className={styles.aboutHeading}>Despre</h1>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutDescription}>
          <p>
            Bine ați venit pe platforma noastră dedicată evenimentelor inginerești! Suntem aici pentru a vă aduce cele mai captivante și inspiraționale experiențe în lumea ingineriei. Indiferent dacă sunteți un profesionist cu experiență, un student dornic să învețe sau pur și simplu un pasionat de tehnologie, veți găsi evenimente pe măsura intereselor și curiozității dumneavoastră.
            <br /><br />
            Descoperiți evenimente diverse, de la conferințe interactive și workshop-uri practice, până la prezentări de ultimă oră și discuții animate despre tendințele tehnologice emergente. Fiecare eveniment are scopul să vă ofere oportunități de învățare, networking și explorare a celor mai noi inovații. Alăturați-vă nouă pentru a vă conecta cu mentori, a împărtăși cunoștințe și a explora împreună viitorul fascinant al ingineriei.
          </p>
        </div>
        <div className={styles.aboutImage}>
          <Image
            width={900}
            height={600}
            alt="About Image"
            src={aboutImage}
          />
        </div>
      </div>
      <h1 id='contact' className={styles.aboutHeading}>Contact</h1>
      <footer className={styles.footer}>
        <form className={styles.form}>
          <input placeholder='Email' type="email" />
          <textarea placeholder='Message' />
          <button className={`${styles.submitButton} button`} type='submit'>Submit</button>
        </form>
        <div className={styles.socialButtons}>
          <button className={styles.socialButton}>
            <Image
              width={24}
              height={24}
              alt='Facebook'
              src={facebook}
            
            />
          </button>
          <button className={styles.socialButton}>
            <Image
              width={24}
              height={24}
              alt='Instagram'
              src={instagram}
            
            />
          </button>
          <button className={styles.socialButton}>
            <Image
              width={24}
              height={24}
              alt='Linkedin'
              src={linkedin}
            
            />
          </button>
          <button className={styles.socialButton}>
            <Image
              width={24}
              height={24}
              alt='Twitter'
              src={twitter}
            
            />
          </button>
        </div>
      </footer> 
    </>
  )
}

export default Footer
