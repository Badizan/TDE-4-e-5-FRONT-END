import "./Button.css";

const Button = ({ texto, onClickButton }) => {
  return (
    <button className="buttonContainer" onClick={onClickButton}>
      {texto}
    </button>
  );
};

export default Button;
