import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './HodNavbar.css';
import { Button } from '../Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='hod-navbar'>
       <div className='navbar-container'>
       <Link to='/hodhome' className='navbar-logo' onClick={closeMobileMenu}>
            HOME
            <i class='fas fa-home fa-sm' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/hodhome' className='nav-links' onClick={closeMobileMenu}>
                Internal Marks
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/hodhome' className='nav-links' onClick={closeMobileMenu}>
                Attendance
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/hodhome' className='nav-links' onClick={closeMobileMenu}>
                Performance
              </Link>
            </li>
          </ul>
        </div>
        <div className='nav-out'><li>
              <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                Log Out
              </Link>
            </li>
          {button && <Button buttonStyle='btn--outline'>LOG OUT</Button>}</div>
      </nav>
</>
  );
}

export default Navbar;