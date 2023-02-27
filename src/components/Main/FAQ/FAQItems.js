import FAQItem from "./FAQItem";

import FAQDataItemOne from "@/DataForComponents/main/FAQ/FAQDataItemOne.json";
import FAQDataItemTwo from "@/DataForComponents/main/FAQ/FAQDataItemTwo.json";

import styles from "./FAQItems.module.css";

const FAQItems = (props) => {
  return (
    <div>
      <div
        className={`
        ${props.selectedSection === 1 ? "faq-box-block" : styles["faq-box"]}`}
        onClick={() => props.onSelectSection(1)}
      >
        {FAQDataItemOne.map((element) => (
          <FAQItem key={element.id} title={element.title} text={element.text} />
        ))}
      </div>

      <div
        className={`
        ${props.selectedSection === 2 ? "faq-box-block" : styles["faq-box"]}`}
        onClick={() => props.onSelectSection(2)}
      >
        {FAQDataItemTwo.map((element) => (
          <FAQItem key={element.id} title={element.title} text={element.text} />
        ))}
      </div>

      <div
        className={`
        ${props.selectedSection === 3 ? "faq-box-block" : styles["faq-box"]}`}
        onClick={() => props.onSelectSection(3)}
      >
        {FAQDataItemOne.map((element) => (
          <FAQItem key={element.id} title={element.title} text={element.text} />
        ))}
      </div>

      <div
        className={`
        ${props.selectedSection === 4 ? "faq-box-block" : styles["faq-box"]}`}
        onClick={() => props.onSelectSection(4)}
      >
        {FAQDataItemTwo.map((element) => (
          <FAQItem key={element.id} title={element.title} text={element.text} />
        ))}
      </div>
    </div>
  );
};
export default FAQItems;
