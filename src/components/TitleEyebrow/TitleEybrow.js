import styles from "./TitleEyebrow.module.css";
import Link from "next/link";
const TitleEyebrow = (props) => {
  return (
    <>
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
        <p
          className={`${
            props.paragraphWidth === "wide"
              ? styles["paragraph-wide"]
              : styles.paragraph
          } text-gray`}
        >
          {props.paragraph}
        </p>
      </div>
    </>
  );
};
export default TitleEyebrow;
