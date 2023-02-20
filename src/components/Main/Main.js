import Hero from "../UI/Hero/Hero";
import Numbers from "./Numbers/Numbers";
import Specialists from "./Specialists/Specialists";

const Main = () => {
  return (
    <main>
      <Hero
        buttonIsHere={true}
        greyishText={`Мы улучшаем качество жизни людей, сохраняем молодость, красоту издоровье. Опираемся на многолетний опыт, эффективные технологии и
              профессионализм.`}
        textBeforeHighlight={`Добро пожаловать в`}
        highlighted={` Alta Medicus `}
        textAfterHighlight={``}
      ></Hero>
      <Numbers></Numbers>
      <Specialists></Specialists>
    </main>
  );
};
export default Main;
