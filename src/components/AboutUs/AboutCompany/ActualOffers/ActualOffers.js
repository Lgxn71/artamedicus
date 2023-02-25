import TitleEyebrow from "@/components/TitleEyebrow/TitleEybrow";
import Container from "@/components/UI/Container/Container";
import styles from "./ActualOffers.module.css";
const ActualOffer = () => {
  return (
    <Container>
      <TitleEyebrow
        eyebrowText="Актуальные предложения"
        titleText="Мы ставим ценность клиентов на первое место"
        paragraph="Клиника Alta Medicus заботится о комфорте и удобстве своих пациентов. Мы делаем сервис доступным для каждого! "
      />
      <div className={styles["offers-container"]}>
        <div className={styles["offer-container"]}>
          <img className={styles.image} src="/img/image.jpg" alt="image" />
          <h4 className={styles.title}>
            Комплексное исследование женского здоровья.
          </h4>
          <p className={`text-gray ${styles.paragraph}`}>
            Для любой представительницы прекрасного пола интимное здоровье -
            деликатная и важная тема. Узнайте, как позаботиться о себе.
          </p>
        </div>
        <div>
          <img className={styles.image} src="/img/image.jpg" alt="image" />
          <h4 className={styles.title}>
            Бесплатная консультация пластического хирурга!
          </h4>
          <p className={`text-gray ${styles.paragraph}`}>
            В Alta Medicus вы можете проконсультироваться у пластического
            хирурга по всем видам пластических операций абсолютно бесплатно!{" "}
          </p>
        </div>
      </div>
    </Container>
  );
};
export default ActualOffer;
