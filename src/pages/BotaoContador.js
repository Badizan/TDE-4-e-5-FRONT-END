import "./BotaoContador.css";
import Button from "./components/Button";
import Contador from "./components/Contadorr";


function BotaoContador() {
  const handleCliqueAqui = () => {
    console.log("Botão 'clique aqui' clicado");
  };

  const handleOutroTexto = () => {
    console.log("Botão 'outro texto' clicado");
  };

  return (
    <div>
      <h1 className="title">Primeiro projeto em ReactJS</h1>
      <h3>Criando os primeiros componentes</h3>
      <Button texto="Clique aqui" onClickButton={handleCliqueAqui}/>
      <Button texto="Outro texto" onClickButton={handleOutroTexto}/>
      <Contador/>
    </div>
  );
}

export default BotaoContador;
