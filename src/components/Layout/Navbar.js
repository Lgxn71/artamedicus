import { useState } from "react";

import Link from "next/link";
import ButtonPrimary from "../UI/Buttons/ButtonPrimary";
import ContainerHeader from "../UI/Container/ContainerHeader";
import styles from "./Navbar.module.css";
import SideBar from "./SideBar";
const Navbar = (props) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(props.onSideBar || false);
  const aboutUsClickHandler = () => {
    if (isSideBarOpen === false) {
      setIsSideBarOpen(true);
    } else {
      setIsSideBarOpen(false);
    }
  };
  return (
    <div className={styles['navbar-fixed']}>
      <header className={styles["border-bottom"]}>
        <ContainerHeader>
          <section className={styles.header}>
            <div className={styles.navbar}>
              <div>
                <Link href="/" className={styles.logo}>
                  Arta Medicus
                </Link>
              </div>
              <ul className={styles["nav-links"]}>
                <li>
                  <Link
                    className={styles.link}
                    onClick={aboutUsClickHandler}
                    href="/about-us/about-company"
                  >
                    О нас
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} href="">
                    Услуги
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} href="">
                    Контакты
                  </Link>
                </li>
                <li>
                  <ButtonPrimary inNavBar={true}>Заказать звонок</ButtonPrimary>
                </li>
              </ul>
            </div>
          </section>
        </ContainerHeader>
      </header>
      {isSideBarOpen && <SideBar highlight={props.highlight} />}
    </div>
  );
};
export default Navbar;
