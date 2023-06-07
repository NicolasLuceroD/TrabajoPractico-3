import Header from "./Header";
import Footer from "./Footer";
import "../Css/MainAbout.css";
import { useState } from "react";
import "../Css/Foto.css";

const MainAbout = () => {
  const [Foto, setFoto] = useState(1);

  const handleCambiar = () => {
    if (Foto === 2) setFoto(1);
    else setFoto(Foto + 1);
  };

  return (
    <div className="todoA">
      <Header />

      <section className="pantallaDividida">
        <div className="izq">
          <img src={`${Foto}.jpg`} alt="" className="Foto" />
          <br />
          <br />
          <button onClick={handleCambiar} className="botonC">
            Cambiar Foto
          </button>
        </div>

        <div className="derecha">
          <p>
            {" "}
            Hola, mi nombre es Nicolas Lucero del Llanos, soy estudiante de la carrera Tecnicatura Superior en Programacion en la universidad Tecnologica de Tucuman. Mi numero de legajo es 55478{"."} Mi objetivo personal es ser un programador FullStack y saber desenvolverme con facilidad en los problemas que se me presenten en el camino. En mis tiempos libres me gusta jugar a mi deporte favorito que es el Futbol, Saludos!.
          </p>
        </div>
      </section>
      <br />
      <br /><br /><br />
      <Footer className="fotMA"/>
    </div>
  );
};

export default MainAbout;
