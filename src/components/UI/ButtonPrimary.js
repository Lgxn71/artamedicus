import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = (props) => {
  let isInNavBar;
  if (props.inNavBar) {
    isInNavBar = styles["btn-blue-font-size-14px"];
  } else {
    isInNavBar = styles["btn-blue"];
  }
  const buttonClickHandler = (event) => {
    event.preventDefault();
  };

  return (
    <button onClick={buttonClickHandler} className={isInNavBar} href="">
      {props.children}
    </button>
  );
};

export default ButtonPrimary;
