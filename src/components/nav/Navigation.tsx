import React from 'react'
import { useRouter } from 'next/router'
import styles from './nav.module.css'
const Navigation = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li
          onClick={() => router.push('/#evenimente')}
          className={`${styles.li} hoverable`}
        >
          Evenimente
        </li>
        <li
          onClick={() => router.push('/#despre')}
          className={`${styles.li} hoverable`}
        >
          Despre
        </li>
        <li
          onClick={() => router.push('/#contact')}
          className={`${styles.li} hoverable`}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
