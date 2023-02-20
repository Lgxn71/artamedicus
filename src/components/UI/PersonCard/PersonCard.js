import style from "./PersonCard.module.css";
const PersonCard = (props) => {
  return (
    <div className={style["specialist-container"]}>
      <img className={style.photo} src={props.imageSrc} alt="Фото Доктора" />
      <p className={style.fullname}>{props.fullname}</p>
      <p className={`${style.occupation} text-gray`}>{props.occupation}</p>
    </div>
  );
};
export default PersonCard;
