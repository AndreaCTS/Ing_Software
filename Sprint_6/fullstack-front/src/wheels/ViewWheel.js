import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import '../styles/wheel.css';

export default function ViewWheel() {
  const [wheels, setWheels] = useState([]);

  useEffect(() => {
    loadWheels();
  }, []);

  const loadWheels = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/wheels/all`);
      setWheels(result.data);
    } catch (error) {
      console.error("Can't load wheels", error);
    }
  };

  return (
    <div className="full-page-bg">
      <div>
        <h1 className="page-title">Bienvenidos a la pagina de Wheels</h1>
        <h2 className="page-subtitle1">Bogota,Cundinamarca,Colombia</h2>
        <h2 className="page-subtitle2">Super anfitrion .</h2>
      </div>
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + '/media/imagen1.jpg'} alt="Imagen 1" className="image-1" />
        <img src={process.env.PUBLIC_URL + '/media/imagen2.jpg'} alt="Imagen 2" className="image-2" />
        <img src={process.env.PUBLIC_URL + '/media/imagen3.jpg'} alt="Imagen 1" className="image-3" />
        <img src={process.env.PUBLIC_URL + '/media/imagen4.jpg'} alt="Imagen 2" className="image-4" />
        <img src={process.env.PUBLIC_URL + '/media/imagen5.jpg'} alt="Imagen 1" className="image-5" />
      </div>
      <div>
        <h1 className="titulo-inferior">Viaja seguro</h1>
        <h2 className="subtitulo-inferior">Adquiere nuestro servicios</h2>
      </div>
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + '/media/imagenperfil.jpg'} alt="Imagen 1" className="image-7" />
      </div>
      <div className="description-container">
      <p>El servicio de transporte de Wheels es una excelente opción para estudiantes, 
         trabajadores y cualquier persona que necesite desplazarse de manera segura por
         Bogotá. Además, el servicio ofrece una gran tranquilidad para los padres de estudiantes 
         que se preocupan por la seguridad de sus hijos cuando se desplazan solos por la ciudad..</p>
    </div>

      <Row>
        {wheels.map((wheel, index) => (
          <Col key={wheel.id} md={4}>
            <Card className="card">
              <Card.Body>
                <Card.Title>Wheel {index + 1}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>Usuario:  {wheel.username}</Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>Localidad: {wheel.localidad}</Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>Capacidad máxima vehículo: {wheel.capacidadMax}</Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>Cupos disponibles: {wheel.cuposDisp}</Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>Precio por viaje: {wheel.precio}</Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>Contacto: {wheel.telefono}</Card.Text>
                {/*<Button
                    onClick={() => handleAddRating(comment.id)}
                    variant="outline-primary"
                    className="mt-2"
                  >
                    Rate
                  </Button> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Link className="button" to="/addwheels">
        Publicar Wheel
      </Link>
    </div>
  );
}