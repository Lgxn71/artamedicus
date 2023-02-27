import Link from "next/link";

import styles from "./Sidebar.module.css";
const SideBar = (props) => {
  return (
    <aside className={styles["bottom-border"]}>
      <ul className={styles["sidebar-container"]}>
        <li>
          <Link
            className={`${styles.link} ${
              props.highlightSideBar === "aboutCompany" ? styles.highlight : ""
            }`}
            href="/about-us/about-company"
          >
            О компании
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.link} ${
              props.highlightSideBar === "culture" ? styles.highlight : ""
            }`}
            href="/about-us/culture"
          >
            Культура
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.link} ${
              props.highlightSideBar === "employees" ? styles.highlight : ""
            }`}
            href="/about-us/employees"
          >
            Сотрудники
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.link} ${
              props.highlightSideBar === "hiring" ? styles.highlight : ""
            }`}
            href="/about-us/hiring"
          >
            Трудоустройство
          </Link>
        </li>
      </ul>
    </aside>
  );
};
export default SideBar;
