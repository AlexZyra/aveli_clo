import styles from './App.module.css';

import { Route, Routes } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import CataloguePage from '../CataloguePage/CataloguePage';
import Header from '../../components/Header/Header';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import ClothPage from '../ClothPage/ClothPage';
import ShoppingCart from '../Shopping/ShoppingCart';
import Footer from '../../components/Footer/Footer';
import Regis from '../Regis/Regis';


const App = () => {
  return (
    <>
      <div className={styles.wrapeer}>
        <Header />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalogue' element={<CataloguePage />} />
          <Route path='/catalogue/:id' element={<ClothPage />} />
          <Route path='/error-message' element={<ErrorMessage />} />
          <Route path='/not-found' element={<NotFoundPage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/shoppingcart' element={<ShoppingCart />} />
          <Route path='/registration' element={<Regis />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
