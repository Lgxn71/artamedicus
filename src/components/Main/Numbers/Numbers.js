import Container from "@/components/UI/Container/Container";

import Number from "./Number";
import NumbersData from "@/DataForComponents/main/Numbers/NumbersData.json";

import styles from "./Numbers.module.css";
const Numbers = () => {
  return (
    <div className="background-color-black ">
      <Container>
        <div className={styles["numbers-container"]}>
          <h2>Клиника Alta Medicus сегодня это:</h2>
          <p className="text-gray">
            Наши достижения в медицинском путешествии обозначено цифрами
          </p>
        </div>
        <ul className={styles.achievments}>
          {NumbersData.map((number) => {
            return (
              <Number
                key={number.id}
                number={number.number}
                text={number.text}
                textLineBreak={number.textLineBreak}
              />
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

export default Numbers;
