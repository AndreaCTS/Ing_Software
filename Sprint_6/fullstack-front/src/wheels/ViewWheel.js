import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/wheel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Table } from "react-bootstrap";

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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="full-page-bg">
      <div className="title-container">
        <h1>Viaja a cualquier lugar con la app 🚗</h1>
      </div>
      <button class="btn-cssbuttons">
        <span>Redes</span>
        <span>
          <svg
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1024 1024"
            class="icon"
          >
            <path
              fill="#ffffff"
              d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"
            ></path>
          </svg>
        </span>
        <ul>  
          <li>
            <a href="https://twitter.com/">
              <svg
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 1024 1024"
                class="icon"
              >
                <path
                  fill="white"
                  d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/your-work">
              <svg
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 1024 1024"
                class="icon"
              >
                <path
                  fill="white"
                  d="M123.52064 667.99143l344.526782 229.708899 0-205.136409-190.802457-127.396658zM88.051421 585.717469l110.283674-73.717469-110.283674-73.717469 0 147.434938zM556.025711 897.627196l344.526782-229.708899-153.724325-102.824168-190.802457 127.396658 0 205.136409zM512 615.994287l155.406371-103.994287-155.406371-103.994287-155.406371 103.994287zM277.171833 458.832738l190.802457-127.396658 0-205.136409-344.526782 229.708899zM825.664905 512l110.283674 73.717469 0-147.434938zM746.828167 458.832738l153.724325-102.824168-344.526782-229.708899 0 205.136409zM1023.926868 356.00857l0 311.98286q0 23.402371-19.453221 36.566205l-467.901157 311.98286q-11.993715 7.459506-24.57249 7.459506t-24.57249-7.459506l-467.901157-311.98286q-19.453221-13.163834-19.453221-36.566205l0-311.98286q0-23.402371 19.453221-36.566205l467.901157-311.98286q11.993715-7.459506 24.57249-7.459506t24.57249 7.459506l467.901157 311.98286q19.453221 13.163834 19.453221 36.566205z"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/AndreaCTS/Ing_Software">
              <svg
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 1024 1024"
                class="icon"
              >
                <path
                  fill="white"
                  d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </button>
      <div className="descripcion-container">
        <div className="descripcion">
          <p>
            El servicio de transporte de Wheels es una excelente opción para
            estudiantes, trabajadores y cualquier persona que necesite
            desplazarse de manera segura por Bogotá. Además, el servicio ofrece
            una gran tranquilidad para los padres de estudiantes que se
            preocupan por la seguridad de sus hijos cuando se desplazan solos
            por la ciudad...
          </p>
        </div>
      </div>
      <div className="carousel-container" style={{ marginTop: "30px" }}>
        <Carousel responsive={responsive}>
        {wheels.map((wheel, index) => (
          <div className="card">
            <img
              className="imagen1"
              src={process.env.PUBLIC_URL + "/media/imagen1.jpg"}
              alt="Conductor 1"
            />
            <h2> {wheel.username} </h2>
            <p>
              {wheel.description}
            </p>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Fecha</th>
                  <th>Cupos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{wheel.username}</td>
                  <td>{wheel.precio}</td>
                  <td>17/11/2023</td>
                  <td>{wheel.cuposDisp}</td>
                </tr>
              </tbody>
            </Table>
            <p>
              <Link to={`/viewwheel/${wheel.id}`} class="cta">
                <span class="hover-underline-animation"  > Compra Ahora </span>
                <svg
                  viewBox="0 0 46 16"
                  height="10"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  id="arrow-horizontal"
                >
                  <path
                    transform="translate(30)"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    data-name="Path 10"
                    id="Path_10"
                  ></path>
                </svg>
              </Link>
            </p>
          </div>
        ))}
        </Carousel>
      </div>
      {/*
      <Row>
        {wheels.map((wheel, index) => (
          <Col key={wheel.id} md={4}>
            <Card className="card">
              <Card.Body>
                <Card.Title>Wheel {index + 1}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Usuario: {wheel.username}
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Localidad: {wheel.localidad}
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Capacidad máxima vehículo: {wheel.capacidadMax}
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Cupos disponibles: {wheel.cuposDisp}
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Precio por viaje: {wheel.precio}
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Contacto: {wheel.telefono}
                </Card.Text>
                {/*<Button
                    onClick={() => handleAddRating(comment.id)}
                    variant="outline-primary"
                    className="mt-2"
                  >
                    Rate
                  </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}
      <Link className="buttonWheel" to="/addwheels">
        Publicar Wheel 🙈
      </Link>
    </div>
  );
}
