import React, { useState } from 'react';
import '../styles/estilos.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

export default function HomeInit() {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleSlideChange = (index) => {
    setSelectedSlide(index);
  };

  const customArrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  };

  return (
    <div className="initial" style={{ backgroundColor: getBackgroundColor(selectedSlide) }}>
      <header></header>
      <main className="center-main">
        <h1 style={{ marginBottom: '5px' }}>
          <em>Sobre nosotros </em>
        </h1>
        <section>
          <Carousel
            showThumbs={false}
            showStatus={false}
            emulateTouch
            selectedItem={selectedSlide}
            onChange={handleSlideChange}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...customArrowStyles, left: 0 }}
                >
                  &#9664;
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...customArrowStyles, right: 0 }}
                >
                  &#9654;
                </button>
              )
            }
          >
            <div className="breedCard">
              <div className="contenedorImagen">
                <img src="../media/map.jpg" alt="Risk map" />
              </div>
              <h4 >Mapa</h4>
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

function getBackgroundColor(index) {
  // Define los colores según el índice de la diapositiva seleccionada
  const colors = ['#EEECDF', '#F9CE8C', '#F99B8C', '#AEA4BC']; // Puedes ajustar los colores según tus preferencias

  return colors[index] || '#FFFFFF'; // Fallback al color blanco si el índice no coincide
}
