import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import style from "./FAQItem.module.css";

const FAQItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className={style["item-container"]}>
      <div className={style["title-handler"]} onClick={clickHandler}>
        <h4 className={style.title}>{props.title}</h4>
        <FontAwesomeIcon
          className={`${style["faq-icon"]} 
          ${!isOpen ? style["faq-icon-active"] : ""}`}
          icon={faPlus}
          rotation={180}
        />
      </div>
      <div
        className={`${isOpen ? style["display-block"] : style["display-none"]}`}
      >
        <p className={`text-gray ${style.paragraph}`}>{props.text}</p>
      </div>
    </div>
  );
};
export default FAQItem;
