import styles from './ClothPage.module.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import ClothLinkBack from '../../components/ClothLinkBack/ClothLinkBack';
import React from 'react';

const ClothPage = ({ setErrorApi }) => {
    const { id } = useParams()

    const [catalogue, setCatalogue] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchCatalogue = async () => {
            setIsLoading(true)

            const url = new URL(
                `https://64c63c060a25021fde916f9e.mockapi.io/catalogue/${id}`
            );

            try {
                const res = await fetch(url)
                if (!res.ok) {
                    throw new Error("fail")
                }
                const data = await res.json()
                setCatalogue(data)
            } catch (error) {
                setErrorApi(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchCatalogue()
    }, [])

    const saveItemToLocalStorage = (item) => {
        localStorage.setItem(id, JSON.stringify(item));
    };
    const deleteItemToLocalStorage = (item) => {
        localStorage.removeItem(id, JSON.stringify(item));
    };


    return (
        <div className={styles.wrapper}>
            {isLoading && <div className={styles.spinner}></div>}
            <ClothLinkBack />
            <div className={styles.item__container}>
                <img src={catalogue.img} alt={catalogue.name} />
                <div className={styles.text__container}>
                    <p>{catalogue.name}</p>
                    <p>Size: {catalogue.size}</p>
                    <p>Price: {catalogue.price} ₴</p>
                    <button className={styles.addBut} onClick={() => saveItemToLocalStorage(catalogue)}>Add to cart</button>

                </div>
            </div>
        </div>

    )
}

export default withErrorApi(ClothPage)