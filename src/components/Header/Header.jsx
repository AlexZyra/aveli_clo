import styles from './Header.module.css'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import HomePage from '../../containers/HomePage/HomePage'
import CataloguePage from '../../containers/CataloguePage/CataloguePage'
import NotFoundPage from '../../containers/NotFoundPage/NotFoundPage'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ShoppingCart from '../../containers/Shopping/ShoppingCart'

import imgBlack from './img/black_shirt.png'
import imgWhite from './img/white_shirt.png'
import { useTheme, THEME_LIGHT, THEME_DARK } from '../../context/ThemeProvider'
import Regis from '../../containers/Regis/Regis'


const Header = () => {
    const [icon, setIcon] = useState(imgWhite)
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon(imgWhite);
                break;
            case THEME_DARK: setIcon(imgBlack);
                break;
            default: setIcon(imgWhite)
        }
    }, [isTheme]);

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt='cloth' />
            <ul className={styles.list__container}>
                <li><NavLink to='/' element={<HomePage />}>Home</NavLink></li>
                <li><NavLink to='/catalogue' element={<CataloguePage />}>Catalogue</NavLink></li>
                <li><NavLink to='/not-found' element={<NotFoundPage />}>Not Found</NavLink></li>
                <li><NavLink to='/error-message' element={<ErrorMessage />}>Error message</NavLink></li>
                <li><NavLink to='/shoppingcart' element={<ShoppingCart />} className={styles.shop_cart}>Shopping cart🛒</NavLink></li>
                <li><NavLink to='/registration' element={<Regis />} className={styles.sing_in}>Sing in</NavLink></li>
            </ul>
        </div>
    )
}

export default Header