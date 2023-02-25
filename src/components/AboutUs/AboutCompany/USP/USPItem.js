import styles from "./USPItem.module.css";

const USPItem = (props) => {
  return (
    <div className={styles["item-container"]}>
      <h4 className={styles.title}>{props.title}</h4>
      <p className="text-gray">{props.paragraph}</p>
    </div>
  );
};
export default USPItem;
