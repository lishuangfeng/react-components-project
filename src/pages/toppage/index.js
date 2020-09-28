import React from "react";
import {NavLink} from 'react-router-dom';

const TopPage = () => {
  return (
    <div>
       目录
       <br/>
       <NavLink to="/tablepage">带checkbox的table</NavLink><br/>
       <NavLink to="/upload">带进度条的上传组件</NavLink>
    </div>
  );
};

export default TopPage;

