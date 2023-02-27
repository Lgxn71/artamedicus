import Hero from "../Hero/Hero";
import Numbers from "./Numbers/Numbers";
import Specialists from "./Specialists/Specialists";
import Testimonials from "./Testimonials/Testimonials";
import FAQ from "./FAQ/FAQ";

const Main = () => {
  return (
    <main>
      <Hero
        spaceBottom="150"
        paragraphWidth="wide"
        titleWidth="700"
        isButtonExist={true}
        greyishText={`Мы улучшаем качество жизни людей, сохраняем молодость, красоту издоровье. Опираемся на многолетний опыт, эффективные технологии и
              профессионализм.`}
        textBeforeHighlight={`Добро пожаловать в `}
        highlighted={`Alta Medicus`}
        imgURL={"/img/image.jpg"}
        isImageExist={true}
      ></Hero>
      <Numbers />
      <Specialists />
      <Testimonials />
      <FAQ />
    </main>
  );
};
export default Main;
