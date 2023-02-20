import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = (props) => {
  const buttonClickHandler = (event) => {
    event.preventDefault();
  };

  return (
    <button
      onClick={buttonClickHandler}
      className={`${styles["btn-blue"]}`}
      href=""
    >
      {props.children}
    </button>
  );
};

export default ButtonPrimary;
