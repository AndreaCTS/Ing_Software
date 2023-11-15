import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams } from "react-router-dom";
import { Card} from "react-bootstrap";
import {Place, ThumbUpOffAlt} from '@mui/icons-material';
import { toast} from "react-toastify";
import '../styles/viewComments.css';
import AddComment from "./AddComment";
import moment from "moment"
import News from "./Noticias/News";
import LeftContainer from "./ContainerLeft/LeftContainer";
const neighborhoodOptions = [
  "Chico Reservado","Bellavista","Chico Alto","El Nogal","El Refugio","La Cabrera","La Castellana","Los Rosales",
  "Seminario","Toscana","La Esperaza Nororiental","La Sureña","San Isidiro","San Luis Altos Del Cabo",
  "Bosque Calderón","Bosque Calderón Tejada","Chapinero Alto","El Castillo","El Paraiso","Emaus",
  "Granada","Ingenar","Juan XXII","La Salle","Las Acacias","Los Olivos","Maria Cristina","Mariscal Sucre","Nueva Granada",
  "El Palomar","Pardo Rubio","San Martin De Porres","Villa Anita","Villa Del Cerdo","Antiguo Country","Chico Norte",
  "Chico Norte II","Chico Norte III","Chico Occidental","El Chico","El Retiro","Espartillal",
  "Lago Gaitan","La Porciuncula","Quinta Camacho","Cataluña","Chapinero Central","Chapinero Norte","Marly","Sucre",
];

export default function ViewComment() {
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(comments.rating)
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

  const loadCommentsNeighborhood = async (barrio) => {
    try {
      const result = await axios.get(`http://localhost:8080/comments/barrio/${barrio}`);
      setComments(result.data);
    } catch (error) {
      console.error("Error loading comments:", error);
    }
  };

  const handleRatingChange = (commentId,rating) => {
    setRating(rating);
    handleAddRating(commentId,rating)
  };


  const handleChange  = (event) => {
       const selectedValue = event.target.value;
       loadCommentss(selectedValue)
  };  
  
  const handleFilterNeighborhood = (event) => {
    const selectedValue = event.target.value;
    loadCommentsNeighborhood(selectedValue);
  };

  const handleAddRating = async (commentId) => {
    try {
      // Envia los datos de calificación (un número) directamente en el cuerpo de la solicitud
      const response = await axios.post(
        `http://localhost:8080/comments/${commentId}/rate`);

      // Show a success notification
      toast.success("Rating added successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
      // Actualiza la UI con los nuevos datos de calificación
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? { ...comment, rating: response.data.rating} // Actualiza el campo averageRating
            : comment
        )
      );
    } catch (error) {
      console.error("Error adding rating:", error);
    }
  };

  // Funcion para comparar la fecha de publicacion y la actual del sistema
  const calculateTimeDifference = (publishDate) => {
    const now = moment();
    const commentDate = moment(publishDate);
    const diff = now.diff(commentDate, "minutes"); // Puedes cambiar "minutes" a "hours", "days", etc.
    console.log(now)
    console.log(commentDate)
    console.log(diff)
    if (diff < 1) {
      return "Hace unos segundos";
    } else if (diff < 60) {
      return `Hace ${diff} min`;
    } else if (diff < 1440) {
      return `Hace ${Math.floor(diff / 60)} h`;
    } else {
      return `Hace ${Math.floor(diff / 1440)} d`;
    }
  };
  return (
    <>
      <div className="foro">
        <LeftContainer/>
        <div className="foroWrapper">    
          <div className="filters">
            
            <select className="filter" onChange={handleChange}>
              <option value="0">Order by</option>
              <option value="1">Highest Raiting</option>
              <option value="2">Lowest Raiting</option>
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
          <AddComment />
          <div className="post">
            {comments.map((comment, index) => (  
                <div className="postWrapper">
                    <div className="postTop">
                      <div className="postTopLeft">
                        <span className="postUsername">Comentario {index + 1}</span>
                        <span className="publishDate">{calculateTimeDifference(comment.publish_Date)}</span>
                      </div>
                      <div className="postTopRight">
                        <Place htmlColor="green"/>
                        <span className="">{comment.barrio}</span>
                              
                      </div>
                    </div>
                    <hr className="hr"></hr>
                    <div className="postCenter">
                      <Card.Text className="postText" >
                        {comment.text}
                      </Card.Text>
                    </div>
                    <hr className="hr"></hr>
                    <div className="postBottom">
                      <div className="postBottomLeft">
                          <button  className="buttonBorder" onClick={(rating)=> handleRatingChange(comment.id, rating)}>
                            <ThumbUpOffAlt htmlColor="blue" className="LikeIcon"/> 
                          </button>
                          <span className="postLikeCounter" >
                              {comment.rating}
                          </span>
                      </div>
                      <div className="postBottomRight">

                      </div>                   
                    </div>
                  
                </div>
              
            ))}
          </div>  
        </div> 
        <News num={comments.length}/>
      </div>
    </>
  );
}