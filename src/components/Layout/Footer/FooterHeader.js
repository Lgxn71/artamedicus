import Link from "next/link";
import Container from "@/components/UI/Container";
import styles from "./FooterHeader.module.css";

const FooterHeader= () => {
  return (
    <Container>
      <div className={styles.footerContactsContainer}>
        <div className={styles.footerContactsSingleContainer}>
          <h2>Остались вопросы? Закажите Звонок!</h2>
          <p>Перезвоним, проконсультируем, и запишем Вас на прием!</p>
          <div className={styles.button}>
            <Link href="" className="btnFull">
              Заказать Звонок
            </Link>
          </div>
        </div>
        <div className={styles.footerContactsSingleContainer}>
          <h2>Свяжитесь с нами</h2>
          <p>Наша клиника работает с 8:00 до 20:00 без выходных.</p>
          <div className={styles.contactDetail}>
            <div>
              <ul>
                <li>
                  <p>Телефон</p>
                  <p className="textGray">+7172 66 44 55</p>
                </li>
                <li>
                  <p>Email</p>
                  <p className="textGray">altamedicus@gmail.com</p>
                </li>
                <li>
                  <p>Адрес</p>
                  <p className="textGray">Мангилик - ель 21 / 1, 3 этаж</p>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <p>Сот. номер</p>
                  <p className="textGray">+7172 66 44 55</p>
                </li>
                <li>
                  <p>Соц. сети</p>
                  <p className="textGray">+7172 66 44 55</p>
                </li>
                <li>
                  <p>Время работы</p>
                  <p className="textGray">с 08:00 до 20:00, без выходных</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default FooterHeader;
