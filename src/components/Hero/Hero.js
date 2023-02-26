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
    <>
      <div className={styles["hero-container"]}>
        <Container>
          <>
            <h1
              className={`text-gray 
              ${props.titleWidth === "main" ? styles["hero-title-main"] : ""}
              ${
                props.titleWidth === "aboutCompany"
                  ? styles["hero-title-aboutCompany"]
                  : ""
              }
              ${
                props.titleWidth === "culture"
                  ? styles["hero-title-culture"]
                  : ""
              }
              ${
                props.titleWidth === "employees"
                  ? styles["hero-title-employees"]
                  : ""
              }
              
              `}
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
              }
              ${
                props.paragraphWidth === "narrow"
                  ? styles["hero-paragraph-narrow"]
                  : ""
              }`}
            >
              {props.greyishText}
            </p>
            {props.buttonIsHere && isButtonShow}
          </>
        </Container>
      </div>
      {props.isImageExist && <ImageComp imgURL={props.imgURL}></ImageComp>}
    </>
  );
};
export default Hero;
