import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import '../styles/wheel.css';


export default function ViewWheel(){  
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
      <Row>
          {wheels.map((wheel, index) => (
            <Col key={wheel.id} md={4}>
              <Card className="card">
                <Card.Body>
                  <Card.Title>Wheel {index + 1}</Card.Title>
                  <Card.Text style={{textAlign:"justify"}}>Usuario:  {wheel.username}</Card.Text>
                  <Card.Text style={{textAlign:"justify"}}>Localidad: {wheel.localidad}</Card.Text>
                  <Card.Text style={{textAlign:"justify"}}>Capacidad máxima vehículo: {wheel.capacidadMax}</Card.Text>
                  <Card.Text style={{textAlign:"justify"}}>Cupos disponibles: {wheel.cuposDisp}</Card.Text>
                  <Card.Text style={{textAlign:"justify"}}>Precio por viaje: {wheel.precio}</Card.Text>
                  <Card.Text style={{textAlign:"justify"}}>Contacto: {wheel.telefono}</Card.Text>
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