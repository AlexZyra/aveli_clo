import styles from './ErrorMessage.module.css'

const ErrorMessage = () => {
  return (
    <div>
      <p className={styles.text}>
        Sorry, we cannot display data. :( <br />
        Come back when we fix everything. <br />
        
      </p>
    </div>
  )
}

export default ErrorMessage