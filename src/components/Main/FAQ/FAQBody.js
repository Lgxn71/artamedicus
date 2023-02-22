import { useState } from "react";
import styles from "./FAQBody.module.css";
import FAQItem from "./FAQItem";
import FAQDataItemOne from "@/dataForComponents/main/FAQ/FAQDataItemOne.json";
import FAQDataItemTwo from "@/dataForComponents/main/FAQ/FAQDataItemTwo.json";
const FAQBody = (props) => {
  const [selectedSection, setSelectedSection] = useState(1);

  const selectSection = (index) => {
    setSelectedSection(index);
  };

  return (
    <div className={styles["-container"]}>
      <div className={styles["faq-content"]}>
        <ul>
          <li
            className={`text-gray 
            ${styles["faq-link"]} 
            ${selectedSection === 1 ? styles["active"] : ""}
            `}
            onClick={() => selectSection(1)}
          >
            Клиника
          </li>
          <li
            className={`text-gray           
            ${styles["faq-link"]} 
            ${selectedSection === 2 ? styles["active"] : ""}
            `}
            onClick={() => selectSection(2)}
          >
            Пластическая хирургия
          </li>
          <li
            className={`text-gray             
            ${styles["faq-link"]} 
            ${selectedSection === 3 ? styles["active"] : ""}
            `}
            onClick={() => selectSection(3)}
          >
            Гинекология
          </li>
          <li
            className={`text-gray             
            ${styles["faq-link"]} 
            ${selectedSection === 4 ? styles["active"] : ""}
            `}
            onClick={() => selectSection(4)}
          >
            Эндрокринолог
          </li>
        </ul>
        <div>
          <div
            className={`
            ${selectedSection === 1 ? "faq-box-block" : styles["faq-box"]}
            `}
            onClick={() => selectSection(1)}
          >
            {FAQDataItemOne.map((element) => {
              return (
                <FAQItem
                  key={element.id}
                  title={element.title}
                  text={element.text}
                />
              );
            })}
          </div>
          <div
            className={`
            ${selectedSection === 2 ? "faq-box-block" : styles["faq-box"]}
            `}
            onClick={() => selectSection(2)}
          >
            {FAQDataItemTwo.map((element) => {
              return (
                <FAQItem
                  key={element.id}
                  title={element.title}
                  text={element.text}
                />
              );
            })}
          </div>
          <div
            className={`
            ${selectedSection === 3 ? "faq-box-block" : styles["faq-box"]}
            `}
            onClick={() => selectSection(3)}
          >
            {FAQDataItemOne.map((element) => {
              return (
                <FAQItem
                  key={element.id}
                  title={element.title}
                  text={element.text}
                />
              );
            })}
          </div>
          <div
            className={`
            ${selectedSection === 4 ? "faq-box-block" : styles["faq-box"]}
            `}
            onClick={() => selectSection(4)}
          >
            {FAQDataItemTwo.map((element) => {
              return (
                <FAQItem
                  key={element.id}
                  title={element.title}
                  text={element.text}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQBody;
