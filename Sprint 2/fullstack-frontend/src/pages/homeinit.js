import React from 'react';
import '../styles/estilos.css'; // Import your CSS file here

import { Link } from 'react-router-dom';

export default function HomeInit() {
  return (
    <div>
      <header>
        <ul className="navbar">
          <li>
            <img src='../media/logo.png' alt="imagen" className="logo" />
          </li>
          <li>
            <button className="botonGenerico mainButton">contactanos</button>
          </li>
          <li>
            <div className="buscar">
              <input placeholder="Buscar " />
              <i className="fas fa-search botonGenerico iconoBusqueda"></i>
            </div>
          </li>
          <li>
            <button className="botonGenerico secondaryButton" onClick={() => window.location.href='login.html'}>Login</button>
          </li>
          <li>
            <button className="botonGenerico mainButton" onClick={() => window.location.href='registro.html'}>Registro</button>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <h1>Sections</h1>
          <ul className="breedCardContainer">
            <li className="breedCard">
              
              <div className="contenedorImagen">
                <img src="../media/map.jpg" alt="Risk map" />
              </div>

              <Link className="btn btn-light" to="/map">
              Mapa
              </Link>
            
            </li>
            
            <li className="breedCard">
              <div className="contenedorImagen">
                <img src="../media/route.jpg" alt="route" />
              </div>
              <Link to={`index.html`} className="btn btn-light ">
                  Routes
              </Link>
            </li>
            <li className="breedCard">
              <div className="contenedorImagen">
                <img src="../media/blog.jpg" alt="Forum" />
              </div>
              <span className="breedTitle">
                <Link to={`/viewcomments`} className="btn btn-light ">
                  Forum
                </Link>
              </span>
            </li>
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

