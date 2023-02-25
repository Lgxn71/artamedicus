import ButtonPrimary from "@/components/UI/Buttons/ButtonPrimary";
import Container from "@/components/UI/Container/Container";
import ImageComp from "@/components/UI/ImageComp/ImageComp";
import styles from "./Hero.module.css";

const Hero = (props) => {
  let isButtonShow = (
    <div className="button-container">
      <ButtonPrimary>Заказать Звонок</ButtonPrimary>
    </div>
  );

  return (
    <div>
      <div className={styles["hero-container"]}>
        <Container>
          <div>
            <h1
              className={`text-gray 
              ${props.titleWidth === "main" ? styles["hero-title-main"] : ""}
              ${
                props.titleWidth === "aboutCompany"
                  ? styles["hero-title-aboutCompany"]
                  : ""
              }`}
            >
              {props.textBeforeHighlight}
              <span className="highlight"> {props.highlighted}</span>
              {props.textAfterHighlight}
            </h1>
            <p
              className={`text-gray
              ${
                props.paragraphWidth === "wide"
                  ? styles["hero-paragraph-wide"]
                  : ""
              }`}
            >
              {props.greyishText}
            </p>
            {props.buttonIsHere && isButtonShow}
          </div>
        </Container>
      </div>
      <ImageComp imgURL={props.imgURL}></ImageComp>
    </div>
  );
};
export default Hero;
