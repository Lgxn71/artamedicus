import { useState } from "react";

import OurPrinciplesDataBodyOne from "@/DataForComponents/about-company/culture/OurPrinciplesDataBodyOne.json";
import OurPrinciplesDataBodyTwo from "@/DataForComponents/about-company/culture/OurPrinciplesDataBodyTwo.json";
import styles from "./OurPrinciplesBody.module.css";
import OurPrinciple from "./OurPrinciple";
const OurPrinciplesBody = () => {
  const [selectedSection, setSelectedSection] = useState(1);
  const sectionClickHandler = () => {
    if (selectedSection === 1) {
      setSelectedSection(2);
    } else {
      setSelectedSection(1);
    }
  };

  return (
    <div className={styles["main-container"]}>
      <div className={styles.headers}>
        <p
          onClick={sectionClickHandler}
          className={`text-gray ${styles.section} ${
            selectedSection === 1 ? styles.active : ""
          }`}
        >
          Корпоративная культура
        </p>
        <p
          onClick={sectionClickHandler}
          className={`text-gray ${styles.section} ${
            selectedSection === 2 ? styles.active : ""
          }`}
        >
          Одна семья
        </p>
      </div>
      <div className={styles["principles-container"]}>
        {selectedSection === 1 &&
          OurPrinciplesDataBodyOne.map((principle) => {
            return (
              <OurPrinciple
                key={principle.id}
                title={principle.title}
                paragraph={principle.paragraph}
              />
            );
          })}
        {selectedSection === 2 &&
          OurPrinciplesDataBodyTwo.map((principle) => {
            return (
              <OurPrinciple
                key={principle.id}
                title={principle.title}
                paragraph={principle.paragraph}
              />
            );
          })}
      </div>
    </div>
  );
};
export default OurPrinciplesBody;
