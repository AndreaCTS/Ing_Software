import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate  } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../styles/style.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const neighborhoodOptions = [
  "Chico Reservado","Bellavista","Chico Alto","El Nogal","El Refugio","La Cabrera","La Castellana","Los Rosales",
  "Seminario","Toscana","La Esperaza Nororiental","La Sureña","San Isidiro","San Luis Altos Del Cabo",
  "Bosque Calderón","Bosque Calderón Tejada","Chapinero Alto","El Castillo","El Paraiso","Emaus",
  "Granada","Ingenar","Juan XXII","La Salle","Las Acacias","Los Olivos","Maria Cristina","Mariscal Sucre","Nueva Granada",
  "El Palomar","Pardo Rubio","San Martin De Porres","Villa Anita","Villa Del Cerdo","Antiguo Country","Chico Norte",
  "Chico Norte II","Chico Norte III","Chico Occidental","El Chico","El Retiro","Espartillal","La Cabrera",
  "Lago Gaitan","La Porciuncula","Quinta Camacho","Cataluña","Chapinero Central","Chapinero Norte","Marly","Sucre",
];
function StarRating({ value, onClick }) {
  const stars = [1, 2, 3, 4, 5]; // Número de estrellas

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <span
          key={star}
          className={star <= value ? "star star-selected" : "star"}
          onClick={() => onClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ViewComment() {
  const [comments, setComments] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0); // Valor de calificación seleccionado
  const { id } = useParams();

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/comments/all`);
      setComments(result.data);
    } catch (error) {
      console.error("Error loading comments:", error);
    }
  };

  const loadCommentss = async (pag) => {
    try {
      if(pag === "1"){
        const result = await axios.get(`http://localhost:8080/comments/ascendente`);
        setComments(result.data);
      }else if(pag === "2"){
        const result = await axios.get(`http://localhost:8080/comments/descendente`);
        setComments(result.data);
      }

    } catch (error) {
      console.error("Error loading comments:", error);
    }
  };

  const loadCommentsRating = async (averageRating) => {
    try {
      const result = await axios.get(`http://localhost:8080/comments/rating/${averageRating}`);
      setComments(result.data);
    } catch (error) {
      console.error("Error loading comments:", error);
    }
  };

  const loadCommentsNeighborhood = async (barrio) => {
    try {
      const result = await axios.get(`http://localhost:8080/comments/barrio/${barrio}`);
      setComments(result.data);
    } catch (error) {
      console.error("Error loading comments:", error);
    }
  };


  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };


  const handleChange  = (event) => {
       const selectedValue = event.target.value;
       loadCommentss(selectedValue)
  };  
  
  const handleFilterRating = (event) => {
    const selectedValue = event.target.value;
    loadCommentsRating(selectedValue);
  };

  const handleFilterNeighborhood = (event) => {
    const selectedValue = event.target.value;
    loadCommentsNeighborhood(selectedValue);
  }

  const handleAddRating = async (commentId) => {
    try {
      // Envia los datos de calificación (un número) directamente en el cuerpo de la solicitud
      const response = await axios.post(
        `http://localhost:8080/comments/${commentId}/rate`,
        selectedRating, // Envía selectedRating directamente como cuerpo de la solicitud
        {
          headers: {
            "Content-Type": "application/json", // Establece el encabezado de tipo de contenido
          },
        }
      );

      // Show a success notification
      toast.success("Rating added successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
      // Actualiza la UI con los nuevos datos de calificación
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? { ...comment, averageRating: response.data.averageRating } // Actualiza el campo averageRating
            : comment
        )
      );
    } catch (error) {
      console.error("Error adding rating:", error);
    }
  };

  return (
    <div className="full-page-bg">
      <div className="container">
        <div className="py-4">
          <Link className="btn btn-primary" to="/addcomments">
            Agregar Comentario
          </Link>
          <div className="mb-4">
            <label>Order by:</label>
            <select onChange={handleChange}>
              <option value="0">Select Rating</option>
              <option value="1">Highest Raiting</option>
              <option value="2">Lowest Raiting</option>
            </select>
            <label className="f1">Filter by Rating:</label>
            <select onChange={handleFilterRating}>
              <option value="0">All</option>  
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <label className="f1">Filter by Neighborhood</label>
            <select onChange={handleFilterNeighborhood}>
              <option value="">Select Neighborhood</option>
              <option value="Todos">All</option>
              {neighborhoodOptions.map((neighborhood, index) => (
                <option key={index} value={neighborhood}>
                  {neighborhood}
                </option>
              ))}
            </select>
          </div>
          <Row>
            {comments.map((comment, index) => (
              <Col key={comment.id} md={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>Comentario {index + 1}</Card.Title>
                    <Card.Text style={{ textAlign: "justify" }}>
                      {comment.text}
                    </Card.Text>
                    <Card.Text>
                      Barrio: {comment.barrio}
                    </Card.Text>
                    <Card.Text>
                      Rating: {comment.averageRating}
                    </Card.Text>
                    <StarRating
                      value={selectedRating}
                      onClick={handleRatingChange}
                    />
                    <Button
                      onClick={() => handleAddRating(comment.id)}
                      variant="outline-primary"
                      className="mt-2"
                    >
                      Calificar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}