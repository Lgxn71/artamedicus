import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import style from "./Service.module.css";
const Service = (props) => {
  const { service, onClickHandler } = props;
  return (
    <div className={style["item-container"]}>
      <div
        className={style["title-handler"]}
        onClick={() => onClickHandler(service.id)}
      >

        <h4 className={style.title}>{service.title}</h4>
        <FontAwesomeIcon
          className={`${style["faq-icon"]} 
      ${service.isOpen ? style["faq-icon-active"] : ""}`}
          icon={faPlus}
          rotation={180}
        />
      </div>
      <p
        className={`text-gray 
      ${service.isOpen ? style["display-block"] : style["display-none"]}
      ${style.paragraph}`}
      >
        {service.paragraph}
      </p>
    </div>
  );
};
export default Service;
