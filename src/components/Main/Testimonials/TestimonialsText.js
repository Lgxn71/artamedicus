import Link from "next/link";
import styles from "./TestimonialsText.module.css";
const TestimonialsText = (props) => {
  return (
    <div className={styles["text-container"]}>
      <h4 className={styles.title}>{props.title}</h4>
      <div className={styles["headers-container"]}>
        <p className={`${styles.summary} text-gray`}>
          {props.summary} <span> </span>
        </p>
        <Link className={styles.tags} href="">
          {props.tags}
        </Link>
      </div>

      <p>{props.text}</p>
    </div>
  );
};
export default TestimonialsText;
