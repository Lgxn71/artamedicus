import styles from "./HiringItem.module.css";
const HiringItem = (props) => {
  return (
    <li className={styles.item}>
      <div className={styles.card}>
        <h2 className={styles.number}>{props.id}</h2>
        <h4 className={styles.title}>{props.title}</h4>
        <p>{props.paragraph}</p>
      </div>
    </li>
  );
};
export default HiringItem;
