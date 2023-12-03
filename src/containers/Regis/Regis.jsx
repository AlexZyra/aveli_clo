import React from 'react'
import styles from './Regis.module.css'

const Regis = () => {

  return (
    <div className={styles.blank}>
      <form>
        <input type="text" required autoComplete="off" className={styles.input} placeholder="Username" />
        <input type="email" required autoComplete="off" className={styles.input} placeholder="Email" />
        <input type="password" required autoComplete="off" className={styles.input} id="password" placeholder="Password" />
        <input type="checkbox" required className={styles.check} />
        <p>I've read the accounts policy</p>
        <input type="reset" required value="Reset" className={styles.reset}/>
        <input type="submit" required value="Submit" className={styles.submit}/>
      </form>
    </div>
  )
}

export default Regis