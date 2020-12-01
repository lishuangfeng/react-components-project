import React from "react";
import style from "./index.module.scss";

const Select = () => {

    return (
        <div>
            <select>
                <option className={`test ${style.a}`}>1</option>
                <option className="ll">2</option>
                <option>3</option>
                <option>4</option>
            </select>
            <i className="iconfont">&#xe60c;</i>
        </div>
    );
};

export default Select;
