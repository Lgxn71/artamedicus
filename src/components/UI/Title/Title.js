import styles from "./Title.module.css";
const Title = (props) => {
  return (
    <div>
      <h2 className={styles["title-container"]}>{props.titleText}</h2>
      <p className={`${styles.paragraph} text-gray`}>{props.paragraph}</p>
    </div>
  );
};
export default Title;
