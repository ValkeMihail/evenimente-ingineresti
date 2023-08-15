import Image from 'next/image'
import styles from './footer.module.css'
import aboutImage from '@/assets/aboutImage.jpeg'
import facebook from '@/assets/facebook.svg'
import instagram from '@/assets/instagram.svg'
import linkedin from '@/assets/linkedin.svg'
import twitter from '@/assets/twitter.svg'
import { ValidationError, useForm } from '@formspree/react';
import { About } from './About'
import { color } from 'framer-motion'

const Footer = () => {

  const [state, handleSubmit] = useForm("xnqkpwrb");

  if (state.succeeded) {
    
    return (
      <>
        <About/>
        <h1 style={{color: 'lightgreen', textShadow: "1px 1px 1px black"}}>Thank you for your message!</h1>
        <div style={{marginBottom: "50vh"}} className={styles.socialButtons}>
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
      </>
    )
  }



  return (
    <>
      <About/>
      <h1 id='contact' className={styles.aboutHeading}>Contact</h1>
      <footer className={styles.footer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input placeholder='Email' type="email" id='email' name='email' />
          <ValidationError
            style={{color: 'red'}}
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <textarea id='message' name='message' placeholder='Message' />
          <ValidationError
            style={{color: 'red'}}
            prefix="Message"
            field="message"
            errors={state.errors} 
          />
          <button className={`${styles.submitButton} button`} type='submit' disabled={state.submitting}>Submit</button>
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
