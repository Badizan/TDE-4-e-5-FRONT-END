import {useState} from "react"
import Button from "./Button";
import "./Contador.css";

const Contador = () => {

const [contador, setContador] = useState(0);

const handleCliqueButton = () => {
  setContador(contador + 1);
}

  return (
    <div className="contadorContainer">
      <h2>{contador}</h2>
      <Button texto="Contador + 1" onClickButton={handleCliqueButton}/>
    </div>
  );
};

export default Contador;
