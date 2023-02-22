import styles from "./TestimonialsReviewer.module.css";
const TestimonialsReviewer = (props) => {
  return (
    <li
      data-id={props.id}
      onClick={(event) => {
        props.onSetActiveReview(event.currentTarget.dataset.id);
      }}
      className={` 
      ${styles["reviewer-container"]}
      ${props.activeReview === props.id ? styles.active : null} 
      `}
    >
      <div className={styles["image-container"]}>
        <img className={styles.image} src={props.imgSRC} alt="" />
      </div>
      <div className={styles["text-container"]}>
        <p className={styles.fullname}>{props.fullname}</p>
        <p className={`${styles.service} text-gray`}>{props.service}</p>
      </div>
    </li>
  );
};
export default TestimonialsReviewer;
