import Link from "next/link";
const FooterContacts = () => {
  return (
    <section>
      <div>
        <h2>Остались Вопросы? Закажите Звонок!</h2>
        <p>Перезвоним, проконсультируем, и запишем Вас на прием! </p>
        <Link href="">
          <span className="btnFull">Заказать Звонок</span>
        </Link>
      </div>
      <div>
        <h2>Свяжитесь с нами</h2>
        <p>Наша клиника работает с 8:00 до 20:00 без выходных.</p>
        <div>
          <ul>
            <li>
              <p>Телефон</p>
              <p>+7172 66 44 55</p>
            </li>
            <li>
              <p>Сот. номер</p>
              <p>+7172 66 44 55</p>
            </li>

            <li>
              <p>Email</p>
              <p>altamedicus@gmail.com</p>
            </li>
            <li>
              <p>Соц. сети</p>
              <p>+7172 66 44 55</p>
            </li>
            <li>
              <p>Адрес</p>
              <p>Мангилик - ель 21 / 1, 3 этаж</p>
            </li>
            <li>
              <p>Время работы</p>
              <p>с 08:00 до 20:00, без выходных</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default FooterContacts;
