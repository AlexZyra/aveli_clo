import { useState, useEffect } from "react";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import CatalogueList from "../../components/CatalogueList/CatalogueList/CatalogueList";
import styles from './CataloguePage.module.css'

const CataloguePage = ({ setErrorApi }) => {
    const [catalogue, setCatalogue] = useState([]);
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchCatalogue = async () => {
            const url = new URL(
                "https://64c63c060a25021fde916f9e.mockapi.io/catalogue"
            );
            url.searchParams.append('limit', '5');
            url.searchParams.append('page', page);
            
            try {
                const res = await fetch(url)
                if (!res.ok) {
                    throw new Error("fail")
                }
                const data = await res.json()
                setCatalogue(data)
            } catch (error) {
                setErrorApi(error.message)
            }

        }

        fetchCatalogue()
    }, [page])



    return (
        <>
            <CatalogueList catalogue={catalogue} />

            <div className={styles.conteiner}>
                <button disabled={page === 1} onClick={() => setPage(prev => prev - 1)}>⬅️</button>
                <button disabled={page === 4} onClick={() => setPage(prev => prev + 1)}>➡️</button>
            </div>

        </>
    )
}

export default withErrorApi(CataloguePage);