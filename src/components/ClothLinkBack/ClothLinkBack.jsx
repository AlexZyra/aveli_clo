import styles from './ClothLinkBack.module.css';
import { useNavigate } from 'react-router';
import iconBack from './img/back.png'

const ClothLinkBack = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <a
            href='#'
            onClick={handleGoBack}
            className={styles.link}
        >
            <img className={styles.link__img} src={iconBack} />
            <span>Go back</span>
        </a>
    )
}

export default ClothLinkBack