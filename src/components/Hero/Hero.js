import ButtonPrimary from "@/components/UI/Buttons/ButtonPrimary";
import Container from "@/components/UI/Container/Container";
import ImageComp from "@/components/UI/ImageComp/ImageComp";
import styles from "./Hero.module.css";

const Hero = (props) => {
  return (
    <>
      <div
        // give a margin to navbar-fixed
        className={
          props.onSideBar
            ? styles["hero-container-margin-top"]
            : styles["hero-container"]
        }
      >
        <Container spaceBottom={props.spaceBottom}>
          <h1
            className={`text-gray 
              ${
                props.titleWidth === "700"
                  ? styles["hero-title-width-700"]
                  : props.titleWidth === "936"
                  ? styles["hero-title-width-936"]
                  : props.titleWidth === "762"
                  ? styles["hero-title-width-762"]
                  : props.titleWidth === "888"
                  ? styles["hero-title-width-888"]
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
                  : props.paragraphWidth === "narrow"
                  ? styles["hero-paragraph-narrow"]
                  : ""
              }
           `}
          >
            {props.greyishText}
          </p>
          {props.isButtonExist && (
            <div className="button-container">
              <ButtonPrimary>Заказать Звонок</ButtonPrimary>
            </div>
          )}
        </Container>
      </div>
      {props.isImageExist && <ImageComp imgURL={props.imgURL} />}
    </>
  );
};
export default Hero;
