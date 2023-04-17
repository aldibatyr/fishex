import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ABOUT, BRAMA, CONTACTS, HOME, KLEVIYE, RIBPROM } from 'constants/links';
import './index.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from 'img/logo.png'

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showMenu, setShowMenu] = useState(false);

  const changeUrl = url => {
    navigate(url)
    if (showMenu) setShowMenu(false);
  };

  return <React.Fragment>
    <div className={`sidebar-block ${showMenu ? 'show' : ''}`}>
      <div className='item logo home' onClick={() => changeUrl(HOME)}>
        <img src={Logo} alt='logo' />
      </div>
      <div className={`item link frozen ${location.pathname === RIBPROM ? 'active' : ''}`} onClick={() => changeUrl(RIBPROM)}>
        <div className='text'>Свежемороженая рыба</div>
      </div>
      <div className={`item link fish-snacks ${location.pathname === KLEVIYE ? 'active' : ''}`} onClick={() => changeUrl(KLEVIYE)}>
        <div className='text'>Рыбные снеки</div>
      </div>
      <div className={`item link half-made ${location.pathname === BRAMA ? 'active' : ''}`} onClick={() => changeUrl(BRAMA)}>
        <div className='text'>Полуфабрикаты</div>
      </div>
      <div className={`item link about ${location.pathname === ABOUT ? 'active' : ''}`} onClick={() => changeUrl(ABOUT)}>
        <div className='text'>О нас</div>
      </div>
      <div className={`item link contacts ${location.pathname === CONTACTS ? 'active' : ''}`} onClick={() => changeUrl(CONTACTS)}>
        <div className='text'>Контакты</div>
      </div>
    </div>

    <div className={`menu ${showMenu ? 'show' : ''}`}>
      {showMenu ?
        <CloseIcon
          fontSize='large'
          onClick={() => setShowMenu(!showMenu)}
        />
        :
        <MenuIcon
          fontSize='large'
          onClick={() => setShowMenu(!showMenu)}
        />
      }
    </div>
  </React.Fragment>;
};

export default SideBar;