import styles from "./ContainerWithoutSpace.module.css";
const ContainerWithoutSpace = (props) => {
  return (
    <section className={`${styles.container}`}>
      {props.children}
    </section>
  );
};
export default ContainerWithoutSpace;
