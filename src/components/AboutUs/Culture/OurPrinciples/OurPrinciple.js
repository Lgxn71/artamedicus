import styles from "./OurPrinciple.module.css";
const OurPrinciple = (props) => {
  return (
    <div className={styles["principle-container"]}>
      <h4 className={styles.title}>{props.title}</h4>
      <p className="text-gray">{props.paragraph}</p>
    </div>
  );
};
export default OurPrinciple;
