import Link from "next/link";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div>
        <h3>Arta Medicus</h3>
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
          <Link href="">
            <span className="btnFull">Заказать Звонок</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default Navbar;
