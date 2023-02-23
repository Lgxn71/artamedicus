import styles from "./FAQLinks.module.css";
const FAQLinks = (props) => {
  return (
    <ul>
      <li
        className={`text-gray 
        ${styles["faq-link"]} 
        ${props.selectedSection === 1 ? styles["active"] : ""}`}
        onClick={() => props.onSelectSection(1)}
      >
        Клиника
      </li>
      <li
        className={`text-gray           
        ${styles["faq-link"]} 
        ${props.selectedSection === 2 ? styles["active"] : ""}`}
        onClick={() => props.onSelectSection(2)}
      >
        Пластическая хирургия
      </li>
      <li
        className={`text-gray             
        ${styles["faq-link"]} 
        ${props.selectedSection === 3 ? styles["active"] : ""}`}
        onClick={() => props.onSelectSection(3)}
      >
        Гинекология
      </li>
      <li
        className={`text-gray             
        ${styles["faq-link"]} 
        ${props.selectedSection === 4 ? styles["active"] : ""}`}
        onClick={() => props.onSelectSection(4)}
      >
        Эндрокринолог
      </li>
    </ul>
  );
};
export default FAQLinks;
