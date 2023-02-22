import Container from "@/components/UI/Container/Container";
import Eyebrow from "@/components/UI/Eyebrow/Eyebrow";
import PersonCard from "@/components/UI/PersonCard/PersonCard";
import Title from "@/components/UI/Title/Title";
import styles from "./Specialists.module.css";
const Specialists = () => {
  const DUMMY_DATA = [
    {
      id: "e1",
      src: "/img/image.jpg",
      fullname: "Text",
      occupation: "Text",
    },
    {
      id: "e2",
      src: "/img/image.jpg",
      fullname: "Text",
      occupation: "Text",
    },
    {
      id: "e3",
      src: "/img/image.jpg",
      fullname: "Text",
      occupation: "Text",
    },
    {
      id: "e4",
      src: "/img/image.jpg",
      fullname: "Text",
      occupation: "Text",
    },
  ];

  return (
    <Container>
      <Eyebrow
        readMoreExist={true}
        linkPath=""
        eyebrowText="Наши cпециалисты"
      ></Eyebrow>
      <Title
        titleText={`Наши эксперты в области медицины помогут вам!`}
        paragraph={`Врачи Arta Medicus Clinic — эксперты в своих областях медицины и владеют всеми передовыми методиками. `}
      ></Title>
      <div className={styles["specialists-container"]}>
        {DUMMY_DATA.map((person) => {
          return (
            <PersonCard
              key={person.id}
              imageSrc={person.src}
              fullname={person.fullname}
              occupation={person.occupation}
            ></PersonCard>
          );
        })}
      </div>
    </Container>
  );
};
export default Specialists;
