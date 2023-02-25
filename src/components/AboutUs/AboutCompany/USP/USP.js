import TitleEyebrow from "@/components/TitleEyebrow/TitleEybrow";
import Container from "@/components/UI/Container/Container";
import styles from "./USP.module.css";
import USPItem from "./USPItem";
import DataItems from "@/DataForComponents/about-company/USPDataItems.json";
const USP = () => {
  return (
    <div className="background-color-dark-white">
      <Container>
        <TitleEyebrow
          eyebrowText="Почему нам доверяют свое здоровье?"
          titleText="Почему нам доверяют свое здоровье?"
          paragraph="Врачи Arta Medicus Clinic — эксперты в своих областях медицины и владеют всеми передовыми методиками. "
        />

        <div className={styles["items-container"]}>
          {DataItems.map((item) => {
            return (
              <USPItem
                key={item.id}
                title={item.title}
                paragraph={item.paragraph}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};
export default USP;
