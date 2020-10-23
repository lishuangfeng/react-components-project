import React from "react";
import {NavLink} from 'react-router-dom';
import { useTranslation} from 'react-i18next'


const TopPage = () => {
  let { t ,i18n} = useTranslation();

  return (
    <div>
       {t('home')}
       <br/>
       <NavLink to="/tablepage">{t("table-page")}</NavLink><br/>
       <NavLink to="/upload">{t("upload-page")}</NavLink>
       <button onClick={()=>i18n.changeLanguage(i18n.language==='en'?'zh':'en')}>{i18n.language==='en'?'zh':'en'}</button>
    </div>
    
  );
};

export default TopPage;

