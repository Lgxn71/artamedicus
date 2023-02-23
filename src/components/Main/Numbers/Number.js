import styles from "./Number.module.css"
const Number = (props) => {
  return (
    <li className={styles.achievment}>
      <p className={styles.numbers}>{props.number}</p>
      <p className={styles["text-container"]}>
        {props.text}
        <span className={styles.text}>{props.textLineBreak}</span>
      </p>
    </li>
  );
};
export default Number;
