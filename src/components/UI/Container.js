import styles from "./Container.module.css";
const Container = (props) => {
  const classes = props.className;
  return (
    <section className={`${styles.container} ${classes}`}>
      {props.children}
    </section>
  );
};
export default Container;
