import React from "react";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { setLanguage } from "@/redux/actions";
import { connect } from "react-redux";
import { Select } from "@/component";

const mapStateToProps = (state: any) => {
  return {
    language: state.topPageReducer.language
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setLanguage: (language: string) => dispatch(setLanguage(language))
  }
};

const TopPage = (props: any) => {
  let { t, i18n } = useTranslation();
  const {language, setLanguage} = props;
  const handleLanguage = () => {
    i18n.changeLanguage(language === 'en' ? 'zh' : 'en');
    setLanguage(language === 'en' ? 'zh' : 'en');
  }

  return (
    <div>
      {t('home-page')}
      <br />
      <NavLink to="/tablepage">{t("table-page")}</NavLink><br />
      <NavLink to="/upload">{t("upload-page")}</NavLink>
      <button onClick={handleLanguage}>{t('language')}</button>
      <Select/>
    </div>

  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TopPage)

