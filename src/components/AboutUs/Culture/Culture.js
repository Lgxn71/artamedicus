import Hero from "@/components/Hero/Hero";
import OurPrinciples from "./OurPrinciples/OurPrinciples";
import WhyUs from "./WhyUs/WhyUs";

const Culture = (props) => {
  return (
    <main>
      <Hero
        onSideBar={props.onSideBar}
        spaceBottom="150"
        titleWidth="762"
        paragraphWidth="wide"
        greyishText={`Здоровая корпоративная культура помогает нам постоянно повышать эффективность работы всей компании: принадлежность к общему делу влияет на чувство самоценности каждого сотрудника.`}
        textBeforeHighlight={`Я верю, что мы можем `}
        highlighted={`расти`}
        textAfterHighlight={` вместе`}
        isImageExist={true}
        imgURL={"/img/image.jpg"}
      />
      <OurPrinciples />
      <WhyUs />
    </main>
  );
};
export default Culture;
