import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../styles/style.css";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

export default function ViewFeedback() {
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

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  const roundToOneDecimal = (number) => {
    return Math.round(number * 10) / 10; // Redondea a un decimal
  };

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
                      Rating: {roundToOneDecimal(comment.averageRating)}
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
