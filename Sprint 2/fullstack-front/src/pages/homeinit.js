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
            <button className="botonGenerico mainButton">Contactanos</button>
          </li>
          <li>
            <div className="buscar">
              <input placeholder="Buscar " />
              <i className="fas fa-search botonGenerico iconoBusqueda"></i>
            </div>
          </li>
          <li>
            <Link to={`/login`} className="btn btn-success">
              Login
            </Link>
          </li>
          <li>
          <li>
            <Link to={`/adduser`} className="btn btn-success">
              Registro
            </Link>
          </li>         
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
              
                <Link to={`/viewcomments`} className="btn btn-light ">
                    Foro
                </Link>   
              
            </li>

            <li className="breedCard">
              <div className="contenedorImagen">
                <img src="../media/wheel.jpg" alt="Forum" />
              </div>
              
                <Link to={`/wheel`} className="btn btn-light ">
                    Wheels
                </Link>   
              
            </li>
          </ul>
        </section>
        <section></section>
      </main>
      <footer>
      <div className="footer-content" style={{ backgroundColor: "#C5F1FF"}}>
          <p>&copy; 2023 Clase con Leyva</p>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

