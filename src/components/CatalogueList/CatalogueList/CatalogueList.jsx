import styles from './CatalogueList.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CatalogueList = (props) => {
    const { catalogue } = props
    return (
        <>
            <ul className={styles.list__container}>
                {catalogue.map(({ name, img, price, id }) =>
                    <li className={styles.list__item} key={name}>
                        <Link to={`/catalogue/${id}`}>
                            <img className={styles.cloth__photo} src={img} alt={name} />
                            <p>{name}</p>
                            <p>{price} ₴</p>
                        </Link>

                    </li>
                )}
            </ul>

        </>

    )
}

CatalogueList.propTypes = {
    catalogue: PropTypes.array
}

export default CatalogueList