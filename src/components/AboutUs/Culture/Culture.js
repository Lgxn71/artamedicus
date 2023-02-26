import Hero from "@/components/Hero/Hero";
import OurPrinciples from "./OurPrinciples/OurPrinciples";
import WhyUs from "./WhyUs/WhyUs";

const Culture = () => {
  return (
    <main>
      <Hero
        titleWidth="culture"
        paragraphWidth="wide"
        greyishText={`Здоровая корпоративная культура помогает нам постоянно повышать эффективность работы всей компании: принадлежность к общему делу влияет на чувство самоценности каждого сотрудника.`}
        textBeforeHighlight={`Я верю, что мы можем `}
        highlighted={`расти`}
        textAfterHighlight={` вместе`}
        imgURL={"/img/image.jpg"}
        isImageExist={true}
      />
      <OurPrinciples />
      <WhyUs></WhyUs>
    </main>
  );
};
export default Culture;
