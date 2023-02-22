import Container from "@/components/UI/Container/Container";
import styles from "./CTA.module.css";
import ButtonPrimary from "@/components/UI/ButtonPrimary";

const CTA = () => {
  return (
    <div className="background-color-dark-white">
      <Container>
        <div className={styles["cta-container"]}>
          <div className={styles["cta-single-container"]}>
            <h2>Остались вопросы? Закажите Звонок!</h2>
            <p>Перезвоним, проконсультируем, и запишем Вас на прием!</p>
            <div className="button-container">
              <ButtonPrimary>Заказать звонок</ButtonPrimary>
            </div>
          </div>
          <div className={styles["cta-single-container"]}>
            <h2>Свяжитесь с нами</h2>
            <p>Наша клиника работает с 8:00 до 20:00 без выходных.</p>
            <div className={styles["contact-details"]}>
              <div>
                <ul>
                  <li>
                    <p>Телефон</p>
                    <p className="text-gray">+7172 66 44 55</p>
                  </li>
                  <li>
                    <p>Email</p>
                    <p className="text-gray">altamedicus@gmail.com</p>
                  </li>
                  <li>
                    <p>Адрес</p>
                    <p className="text-gray">Мангилик - ель 21 / 1, 3 этаж</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <p>Сот. номер</p>
                    <p className="text-gray">+7172 66 44 55</p>
                  </li>
                  <li>
                    <p>Соц. сети</p>
                    <p className="text-gray">+7172 66 44 55</p>
                  </li>
                  <li>
                    <p>Время работы</p>
                    <p className="text-gray">с 08:00 до 20:00, без выходных</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default CTA;
