import Container from "../../../UI/Container/Container";
import TitleEyebrow from "../../../TitleEyebrow/TitleEybrow";
import styles from "./WhyUs.module.css";
const WhyUs = () => {
  return (
    <Container>
      <TitleEyebrow
        eyebrowText="Почему именно мы?"
        titleText="Почему нам доверяют свое здоровье?"
        paragraph="Врачи Arta Medicus Clinic — эксперты в своих областях медицины и владеют всеми передовыми методиками. "
      />

      <div className={styles.container}>
        <img className={styles.image} src="/img/image.jpg" alt="change text" />
      </div>
    </Container>
  );
};
export default WhyUs;
