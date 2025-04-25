import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../images/logo_1.jpeg';
import arabic from '../../images/saudi_arabia.png';
import english from '../../images/united_kingdom.png';
import './navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => {
      document.documentElement.lang = lng;
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    });
  };

  return (
    <nav dir={i18n.dir()} className={`navbar navbar-expand-lg position-fixed start-0 end-0 top-0 z-3 ${isScrolled ? 'bg-secondary' : ''}`}
      style={{ transition: 'background-color 0.3s ease' }}>
      <div className="container align-items-baseline">
        <Link className="navbar-brand" to="/home">
          <h3 className='text-white'>
            <img src={logo} className='rounded ms-2' width={'50px'} alt="" />
            {t('navbar.title')}
          </h3>
        </Link>
        
        {/* Changed ms-auto to me-auto and added dropdown-menu-end */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle text-white d-flex align-items-center" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown"
              >
                <span className="me-2">{t('navbar.language')}</span>
                <img 
                  src={i18n.language === 'ar' ? arabic : english} 
                  width={'20px'} 
                  className='me-1' 
                  alt="language" 
                />
                <i className="fa-solid fa-chevron-down"></i>
              </Link>
              {/* Added dropdown-menu-end for RTL/LTR support */}
              <ul className={`dropdown-menu ${i18n.language === 'ar' ? '' : 'dropdown-menu-end'}`}>
                <li>
                  <button 
                    className="dropdown-item d-flex align-items-center"
                    onClick={() => changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
                  >
                    <img 
                      src={i18n.language === 'ar' ? english : arabic} 
                      width={'20px'} 
                      className='me-2' 
                      alt="language" 
                    />
                    {i18n.language === 'ar' ? 'English' : 'العربية'}
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}