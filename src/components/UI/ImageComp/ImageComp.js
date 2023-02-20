import styles from "./ImageComp.module.css";
const ImageComp = (props) => {
  return (
    <img
      className={styles["img"]}
      src={props.imgURL}
      alt="image"
      decoding="async"
    />
  );
};
export default ImageComp;
