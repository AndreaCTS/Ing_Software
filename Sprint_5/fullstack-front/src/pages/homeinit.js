import React, { useState } from 'react';
import '../styles/estilos.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import Sidebar from '../layout/sidebar';


export default function HomeInit() {

  return (
    <div style={{ background: '#E8E7DE ',height: '100vh'}}>
      <header>
      </header>
      <main style={{ display: 'block',marginTop: '60px'}}>
        <h1 style={{ marginBottom: '5px' }}><em>Sobre nosotros </em></h1>
        <section >
          <Carousel showThumbs={false} showStatus={false} emulateTouch>
            <div className="breedCard">
              <div className="contenedorImagen">
                <img src="../media/map.jpg" alt="Risk map" />
              </div>
              <h4 >Mapa</h4> {/* Agrega el título */}
              <Link to="/map" className="btn btn-light btn-custom">
                Ver más
              </Link>
            </div>
            <div className="breedCard">
              <div className="contenedorImagen">
                <img src="../media/route.jpg" alt="route" />
              </div>
              <h4 >Rutas</h4> 
              <Link to="/mainmenu" className="btn btn-light">
                Ver más
              </Link>
            </div>
            <div className="breedCard">
              <div className="contenedorImagen">
                <img src="../media/blog.jpg" alt="Forum" />
              </div>
              <h4 >Foro</h4> 
              <Link to="/viewcomments" className="btn btn-light">
                Ver más
              </Link>
            </div>
            <div className="breedCard">
              <div className="contenedorImagen">
                <img src="../media/wheel.jpg" alt="Wheel" />
              </div>
              <h4 >Wheels</h4> 
              <Link to="/viewwheels" className="btn btn-light">
                Ver más
              </Link>
            </div>
          </Carousel>
        </section>
      </main>
      
    </div>
  );
}

