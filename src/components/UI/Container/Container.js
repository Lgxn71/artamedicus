import styles from "./Container.module.css";
const Container = (props) => {
  // классес нужны, если ты захочешь применить другие классы на этот компонент (по идее так должно работать)
  return (
    <section
      className={`${styles.container} ${
        props.spaceBottom === "150"
          ? styles["container-150"]
          : props.spaceBottom === "100"
          ? styles["container-100"]
          : props.spaceBottom === "50"
          ? styles["container-50"]
          : styles["container-150"] //fallback
      }`}
    >
      {props.children}
    </section>
  );
};
export default Container;
