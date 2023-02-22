import styles from "./PersonCard.module.css";
const PersonCard = (props) => {
  return (
    <div className={styles["specialist-container"]}>
      <img className={styles.photo} src={props.imageSrc} alt="Фото Доктора" />
      <p className={styles.fullname}>{props.fullname}</p>
      <p className={`${styles.occupation} text-gray`}>{props.occupation}</p>
    </div>
  );
};
export default PersonCard;
