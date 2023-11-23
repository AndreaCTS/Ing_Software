import React, { useState } from 'react';
import '../styles/estilos.css';
import { Link, useNavigate } from 'react-router-dom';

export default function HomeInit () {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const navigate = useNavigate();

  const OnClickImage = (index) =>{
    if(index===1){
      navigate("/mapa") 
    }else if(index === 2){
      navigate("/map")
    }else if(index === 3){
      navigate("/viewcomments")
    }else{
      navigate("/viewwheels")
    }
  }

  return (
    <div style={{backgroundColor:'white'}} >
      <header></header>
      <main>
        <section>
          <ul className="breedCardContainer">
            <li className="breedCard">
              <div className="contenedorImagen" onClick={() => OnClickImage(1)} >
                <img src="../media/map.jpg" alt="Risk map" />
              </div>
              <h4 >Mapa</h4>
              <Link to="/mapa" className="btn btn-dark btn-custom">
                Ver más
              </Link>
            </li>
            {/*
            <div className="breedCard">
              <div className="contenedorImagen" onClick={() => OnClickImage(2)}>
                <img src="../media/route.jpg" alt="route" />
              </div>
              <h4 >Rutas</h4> 
              <Link to="/mainmenu" className="btn btn-light">
                Ver más
              </Link>
            </div>
          */}
            <li className="breedCard">
              <div className="contenedorImagen" onClick={() => OnClickImage(3)}>
                <img src="../media/blog.jpg" alt="Forum" />
              </div>
              <h4 >Foro</h4> 
              <Link to="/viewcomments" className="btn btn-dark">
                Ver más
              </Link>
            </li>
            <li className="breedCard">
              <div className="contenedorImagen" onClick={() => OnClickImage(4)}> 
                <img src="../media/wheel.jpg" alt="Wheel" />
              </div>
              <h4 >Wheels</h4> 
              <Link to="/viewwheels" className="btn btn-dark">
                Ver más
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}