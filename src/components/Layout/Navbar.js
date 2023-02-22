import Link from "next/link";
import ButtonPrimary from "../UI/ButtonPrimary";
import ContainerHeader from "../UI/Container/ContainerHeader";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <header className={styles["border-bottom"]}>
      <ContainerHeader>
        <section className={styles.header}>
          <div className={styles.navbar}>
            <div>
              <div className={styles.logo}>Arta Medicus</div>
            </div>
            <ul className={styles["nav-links"]}>
              <li>
                <Link className={styles.link} href="">
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
                  Отзывы
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
  );
};
export default Navbar;
