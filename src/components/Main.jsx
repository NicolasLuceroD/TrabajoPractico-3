import "../Css/Main.css"
import "bootstrap/dist/css/bootstrap.min.css";
import foto from "../assets/foto.JPG"

const Main = (props) => {
  return (
    <div className='main'>
      
      <div className="container align-items-center">
      <div className="row">
        <div className="col-md-4">
        <div className="card text-center bg-dark">
          <img src={foto} alt="" />
          <div className="card-body text-light">
            <h4 className="card-title">{props.alumno.nombre}</h4>
            <p className="card-text">
              Hola, mi nombre es {props.alumno.nombre} {props.alumno.apellido}, soy estudiante de la carrera Tecnicatura Superior en Programacion en la universidad Tecnologica de Tucuman. Mi numero de legajo es {props.alumno.legajo}{"."} Mi objetivo personal es ser un programador FullStack y saber desenvolverme con facilidad en los problemas que se me presenten en el camino. En mis tiempos libres me gusta jugar a mi deporte favorito que es el {props.alumno.deporteFavorito}, Saludos!.
            </p>
            <a href="https://github.com/NicolasLuceroD" className="btn btn-outline-secondary round-4" target="blank">
              Visitame acá
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
      
    </div>
  )
}

export default Main