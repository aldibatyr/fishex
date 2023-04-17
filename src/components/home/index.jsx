import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BRAMA, KLEVIYE, RIBPROM } from 'constants/links';
import './index.scss';
import KlevieLesh from 'img/klevie/klevie_lesh.png'
import FileSazana from 'img/ribprom/file_sazana.png'
import BramaNuggets from 'img/brama/brama_nuggets.png'

const Home = () => {

  const navigate = useNavigate();

  const changeUrl = (url) => {
    navigate(url);
  };

  return <div className='home-block'>
    <div className='item item-1' onClick={() => changeUrl(KLEVIYE)}><img className='company-pic' src={KlevieLesh} alt='klevie_lesh_spinka' /></div>
    <div className='item item-2' onClick={() => changeUrl(RIBPROM)}><img className='company-pic' src={FileSazana} alt='farsh_ribniy' /></div>
    <div className='item item-3' onClick={() => changeUrl(BRAMA)}><img className='company-pic' src={BramaNuggets} alt='brama_nuggets' /></div>
  </div>
};

export default Home;