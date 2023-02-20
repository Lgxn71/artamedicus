import styles from "./Container.module.css";
const Container = (props) => {
  // классес нужны, если ты захочешь применить другие классы на этот компонент (по идее так должно работать)
  const classes = props.className;
  return (
    <section className={`${styles.container} ${classes}`}>
      {props.children}
    </section>
  );
};
export default Container;
