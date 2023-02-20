import ContainerFooter from "@/components/UI/Container/ContainerFooter";
import Link from "next/link";
import styles from "./FooterBottom.module.css";

const FooterBottom = () => {
  return (
    <footer className={styles["footer-colors"]}>
      <ContainerFooter>
        <div className={styles["footer-container"]}>
          <div className={styles["footer-main-container"]}>
            <h3>Arta Medicus</h3>
            <p>
              Мы улучшаем качество жизни людей, сохраняем молодость, красоту и
              здоровье. Опираемся на многолетний опыт, эффективные технологии и
              профессионализм.
            </p>
          </div>
          <ul className={styles["footer-list"]}>
            <li>
              <Link href="">О нас</Link>
            </li>
            <li>
              <Link href="">Услуги</Link>
            </li>
            <li>
              <Link href="">Специалисты</Link>
            </li>
            <li>
              <Link href="">Отзывы</Link>
            </li>
            <li>
              <Link href="">Блог</Link>
            </li>
            <li>
              <Link href="">Контакты</Link>
            </li>
          </ul>
        </div>
      </ContainerFooter>
      <div className={styles.border}>
        <ContainerFooter>
          <div className={styles.policy}>
            <p>(c) ArtaMedicus 2022 ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
            <div className={styles["icon-container"]}>
              <div className={styles.icon}></div>
              <div className={styles.icon}></div>
              <div className={styles.icon}></div>
              <div className={styles.icon}></div>
            </div>
          </div>
        </ContainerFooter>
      </div>
    </footer>
  );
};
export default FooterBottom;
