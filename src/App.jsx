import { useState } from "react";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";

import style from "./styles/components/app.module.css";

function App() {
  const [color, setColor] = useState("black");
  const [isOpen, setIsOpen] = useState(false);

  const handleColor = (user_color) => {
    setColor(user_color);
    setIsOpen(true);
  };
  const handleModal = (stateModal) => {
    setIsOpen(stateModal);
  };

  return (
    <div className={style.app}>
      <h1 style={{ color }}> Prueba Básica</h1>

      <div className={style.buttonContainer}>

      <Button onClick={handleColor} color={"#f44336"} text={"Rojo"} />
      <Button onClick={handleColor} color={"#2196f3"} text={"Blue"} />
      </div>

      <Modal isOpen={isOpen} onClick={handleModal}>
        <h1>
          Señor usuario el color de la pantalla ha cambiado a{" "}
          {color === "#f44336" ? "Rojo" : "Azul"}
        </h1>
      </Modal>
    </div>
  );
}

export default App;
