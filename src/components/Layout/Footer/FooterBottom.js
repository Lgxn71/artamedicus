import ContainerFooter from "@/components/UI/Container/ContainerFooter";
import Link from "next/link";
import styles from "./FooterBottom.module.css";

const FooterBottom = () => {
  return (
    <footer className={styles.footerBackground}>
      <ContainerFooter>
        <div className={styles.footerBottomBackground}>
          <div className={styles.footerMainContainer}>
            <h3>Arta Medicus</h3>
            <p>
              Мы улучшаем качество жизни людей, сохраняем молодость, красоту и
              здоровье. Опираемся на многолетний опыт, эффективные технологии и
              профессионализм.
            </p>
          </div>
          <ul className={styles.footerUnorderList}>
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
      </ContainerFooter>{" "}
      <div className={styles.border}>
        <div className={styles.Policy}>
          <p>(c) ArtaMedicus 2022 ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
          <div className={styles.iconContainer}>
            <div className={styles.icon}></div>
            <div className={styles.icon}></div>
            <div className={styles.icon}></div>
            <div className={styles.icon}></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterBottom;
