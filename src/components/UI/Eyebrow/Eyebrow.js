import style from "./Eyebrow.module.css";
import Link from "next/link";
const Eyebrow = (props) => {
  return (
    <div className={style["eyebrow-container"]}>
      <p className={`${style.eyebrow} text-gray`}>{props.eyebrowText}</p>
      {props.readMoreExist && (
        <Link className={style["read-more"]} href={props.linkPath}>
          Узнать Больше
        </Link>
      )}
    </div>
  );
};
export default Eyebrow;
