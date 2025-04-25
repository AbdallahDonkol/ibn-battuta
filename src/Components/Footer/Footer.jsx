import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => {
      document.documentElement.lang = lng;
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    });
  };

  return (
    <>
      <footer className='bg-secondary py-2'>
        <div className="container text-center text-white fw-bold">
          {t('footer.footer_text')}
        </div>
      </footer>
    </>
  );
};

export default Footer;
