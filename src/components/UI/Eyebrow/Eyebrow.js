import styles from "./Eyebrow.module.css";
import Link from "next/link";
const Eyebrow = (props) => {
  return (
    <div className={styles["eyebrow-container"]}>
      <p className={`${styles.eyebrow} text-gray`}>{props.eyebrowText}</p>
      {props.readMoreExist && (
        <Link className={styles["read-more"]} href={props.linkPath}>
          Узнать Больше
        </Link>
      )}
    </div>
  );
};
export default Eyebrow;
