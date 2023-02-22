import Container from "@/components/UI/Container/Container";
import Eyebrow from "@/components/UI/Eyebrow/Eyebrow";
import Title from "@/components/UI/Title/Title";
import FAQBody from "./FAQBody";
const FAQ = () => {
  return (
    <Container>
      <Eyebrow eyebrowText="Вопросы и Ответы"></Eyebrow>
      <Title
        titleText="Часто Задаваемые Вопросы"
        paragraph="Врачи Arta Medicus Clinic — эксперты в своих областях медицины и владеют всеми передовыми методиками. "
      ></Title>
      <FAQBody></FAQBody>
    </Container>
  );
};
export default FAQ;
