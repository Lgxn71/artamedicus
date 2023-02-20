import styles from "./ContainerHeader.module.css";
const ContainerHeader = (props) => {
  return (
    <nav className={`${styles["container-header"]}`}>{props.children}</nav>
  );
};
export default ContainerHeader;
