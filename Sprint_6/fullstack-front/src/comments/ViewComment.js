import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate  } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import {Place} from '@mui/icons-material';
import { toast, ToastContainer } from "react-toastify";
import '../styles/viewComments.css';
import AddComment from "./AddComment";


const neighborhoodOptions = [
  "Chico Reservado","Bellavista","Chico Alto","El Nogal","El Refugio","La Cabrera","La Castellana","Los Rosales",
  "Seminario","Toscana","La Esperaza Nororiental","La Sureña","San Isidiro","San Luis Altos Del Cabo",
  "Bosque Calderón","Bosque Calderón Tejada","Chapinero Alto","El Castillo","El Paraiso","Emaus",
  "Granada","Ingenar","Juan XXII","La Salle","Las Acacias","Los Olivos","Maria Cristina","Mariscal Sucre","Nueva Granada",
  "El Palomar","Pardo Rubio","San Martin De Porres","Villa Anita","Villa Del Cerdo","Antiguo Country","Chico Norte",
  "Chico Norte II","Chico Norte III","Chico Occidental","El Chico","El Retiro","Espartillal",
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


  const handleRatingChange = (commentId,rating) => {
    setSelectedRating(rating);
    handleAddRating(commentId,rating)
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

  const handleAddRating = async (commentId,selectedRating) => {
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
    <>
      
      <div className="foro">
        <div className="foroWrapper"> 
          <AddComment />
          <div className="filters">
            
            <select className="filter" onChange={handleChange}>
              <option value="0">Order by</option>
              <option value="1">Highest Raiting</option>
              <option value="2">Lowest Raiting</option>
            </select>
       
            <select className="filter" onChange={handleFilterRating}>
              <option value="0">Select Rating</option>  
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <select className="filter" onChange={handleFilterNeighborhood}>
              <option value="">Select Neighborhood</option>
              <option value="Todos">All</option>
              {neighborhoodOptions.map((neighborhood, index) => (
                <option key={index} value={neighborhood}>
                  {neighborhood}
                </option>
              ))}
            </select>
          </div>
          <div className="post">
            {comments.map((comment, index) => (  
                <Card className="postWrapper">
                    <div className="postTop">
                      <div className="postTopLeft">
                        <Card.Title className="postUsername">Comentario {index + 1}</Card.Title>
                      </div>
                      <div className="postTopRight">
                        <Place htmlColor="green"/>
                        <span className="">{comment.barrio}</span>
                        
                      </div>
                    </div>
                    <hr className="hr"></hr>
                    <div className="postCenter">
                      <Card.Text className="postText" style={{ textAlign: "justify" }}>
                        {comment.text}
                      </Card.Text>
                    </div>
                    <hr className="hr"></hr>
                    <div className="postBottom">
                      <div className="postBottomLeft">
                        <Card.Text className="postCommentText">
                          Calificacion: {comment.averageRating}
                        </Card.Text>
                      </div>
                      <div className="postBottomRight">
                        <StarRating className="likeIcon"
                          value={selectedRating}
                          onClick={(rating) => handleRatingChange(comment.id, rating)} 
                        />
                      </div>                   
                    </div>
                  
                </Card>
              
            ))}
          </div>  
        </div> 
      </div>
    </>
  );
}