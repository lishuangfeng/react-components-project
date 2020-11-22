import React from "react";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import store from "../../redux/reducer";
import {SET_LANGUAGE} from "@/consts";


const TopPage = () => {
  let { t, i18n } = useTranslation();
  let lan = store.getState().language;

  const handleLanguage = () => {
    i18n.changeLanguage(lan === 'en' ? 'zh' : 'en');
    store.dispatch({ type: SET_LANGUAGE, payload: lan === 'en' ? 'zh' : 'en' })
  }

  return (
    <div>
      {t('home-page')}
      <br />
      <NavLink to="/tablepage">{t("table-page")}</NavLink><br />
      <NavLink to="/upload">{t("upload-page")}</NavLink>
      <button onClick={handleLanguage}>{t('language')}</button>
    </div>
  );
};

export default TopPage;

