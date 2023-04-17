import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ABOUT, BRAMA, CONTACTS, HOME, KLEVIYE, PRODUCT_PAGE, RIBPROM } from 'constants/links';
import Category from 'components/category';
import Home from '../home';
import './index.scss'
import { products } from 'constants/data';
import ProductPage from 'components/product';
import Klevie from 'img/background/klevie.jpg'
import Ribprom from 'img/background/ribprom.jpg'
import Brama from 'img/background/brama.jpg'
import About from 'components/about';
import Contacts from 'components/contacts';

const MainContent = () => {

  const klevie = products.filter(x => x.company === 'klevie');
  const ribprom = products.filter(x => x.company === 'ribprom');
  const brama = products.filter(x => x.company === 'brama');

  return <div className='main-content-block'>
    <Routes>
      <Route
        path={PRODUCT_PAGE}
        element={<ProductPage />}
      />
      <Route
        path={KLEVIYE}
        element={<Category data={klevie} bg={Klevie} />}
      />
      <Route
        path={RIBPROM}
        element={<Category data={ribprom} bg={Ribprom} />}
      />
      <Route
        path={BRAMA}
        element={<Category data={brama} bg={Brama} />}
      />
      <Route
        path={ABOUT}
        element={<About />}
      />
      <Route
        path={CONTACTS}
        element={<Contacts />}
      />
      <Route
        path={HOME}
        element={<Home />}
      />
    </Routes>
  </div>;
};

export default MainContent;