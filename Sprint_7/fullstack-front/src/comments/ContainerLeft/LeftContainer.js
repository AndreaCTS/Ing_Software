import './leftcontainer.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function LeftContainer(){
    const [selectedSlide, setSelectedSlide] = useState(0);
    const navigate = useNavigate();
  
    const OnClickImage = (index) =>{
      if(index===1){
        navigate("/mapauser") 
      }else if(index === 2){
        navigate("/map")
      }else if(index === 3){
        navigate("/viewcommentsuser")
      }else{
        navigate("/viewwheels")
      }
    }
  
    return (
      <div className='left-container' >
        <header></header>
        <main>
          <section>
            <ul className="">
              <li className="">
                
                <h4 >Mapa</h4>
                <Link to="/mapauser" className="btn btn-dark btn-custom">
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
              <ui className="">
                <h4 >Foro</h4> 
                <Link to="/viewcommentsuser" className="btn btn-dark">
                  Ver más
                </Link>
              </ui>
              <li className="">
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