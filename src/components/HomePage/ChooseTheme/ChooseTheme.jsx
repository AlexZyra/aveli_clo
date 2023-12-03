import PropTypes from 'prop-types'
import styles from './ChooseTheme.module.css'
import { useTheme, THEME_DARK, THEME_LIGHT } from '../../../context/ThemeProvider'
import imgSun from './img/white_theme.png';
import imgMoon from './img/black_theme.png'

const ChooseThemeItem = ({ theme, text, img }) => {
  const isTheme = useTheme()
  return (
    <div className={styles.item} onClick={() => isTheme.change(theme)}>
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  )
}

ChooseThemeItem.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string
}

const ChooseTheme = () => {

  return (
    <div className={styles.container}>
      <ChooseThemeItem
        theme={THEME_LIGHT}
        text="Ligth Theme"
        img={imgSun}
      />
      <ChooseThemeItem
        theme={THEME_DARK}
        text="Dark Theme"
        img={imgMoon}
      />
    </div>
  )
}



export default ChooseTheme