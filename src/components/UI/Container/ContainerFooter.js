import styles from "./ContainerFooter.module.css";
const ContainerFooter = (props) => {
  return (
    <section className={`${styles["container-footer"]}`}>
      {props.children}
    </section>
  );
};
export default ContainerFooter;
