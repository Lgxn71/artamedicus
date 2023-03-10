import Hero from "@/components/Hero/Hero";
import AboutTheTeam from "./AboutTheTeam/AboutTheTeam";
import ActualOffer from "./ActualOffers/ActualOffers";
import USP from "./USP/USP";
const AboutCompany = (props) => {
  return (
    <main>
      <Hero
        spaceBottom="150"
        onSideBar={props.onSideBar}
        titleWidth="936"
        paragraphWidth="wide"
        greyishText={`Основной акцент мы делаем на непрерывном профессиональном образовании медицинских специалистов и современном диагностическом оборудовании.`}
        textBeforeHighlight={`Забота о `}
        highlighted={`вашем здоровье`}
        textAfterHighlight={` в сердце столицы!`}
        imgURL={"/img/image.jpg"}
        isImageExist={true}
      />
      <USP />
      <AboutTheTeam />
      <ActualOffer />
    </main>
  );
};
export default AboutCompany;
