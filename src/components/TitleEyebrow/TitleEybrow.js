import styles from "./TitleEyebrow.module.css";
import Link from "next/link";
const TitleEyebrow = (props) => {
  return (
    <div>
      <div className={styles["eyebrow-container"]}>
        <p className={`${styles.eyebrow} text-gray`}>{props.eyebrowText}</p>
        {props.readMoreExist && (
          <Link className={styles["read-more"]} href={props.linkPath}>
            Узнать Больше
          </Link>
        )}
      </div>
      <div>
        <h2 className={styles["title-container"]}>{props.titleText}</h2>
        <p className={`${styles.paragraph} text-gray`}>{props.paragraph}</p>
      </div>
    </div>
  );
};
export default TitleEyebrow;
