import styles from "./HomePage.module.css";
import ChooseTheme from "../../components/HomePage/ChooseTheme/ChooseTheme";

const HomePage = () => {
  return (
    <>
      <h1 className={styles.text}>Welcome to Aveli Clo</h1>
      <ChooseTheme />

    </>
  )
}

export default HomePage