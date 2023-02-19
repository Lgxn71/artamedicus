import Link from "next/link";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div>
          <div className={styles.logo}>Arta Medicus</div>
        </div>
        <ul className={styles.navLinks}>
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
            <Link  className="btnFull" href="">
              Заказать Звонок
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Navbar;
