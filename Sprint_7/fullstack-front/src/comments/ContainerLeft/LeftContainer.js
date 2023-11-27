import './leftcontainer.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams } from "react-router-dom";
import { Card} from "react-bootstrap";
import {Place, ThumbUpOffAlt} from '@mui/icons-material';
import { toast} from "react-toastify";
import moment from "moment"


export default function LeftContainer(){

    const [comments,setComments] = useState([]);
    const [rating, setRating] = useState(comments.rating)
    const { id } = useParams();

    useEffect(() => {
        loadComments();
    }, []);

    const loadComments = async () => {
        try {
        const result = await axios.get(`http://localhost:8080/comments/Top3`);
        setComments(result.data);
        } catch (error) {
            console.error("Error loading comments:", error);
        }
    };
    
      const handleRatingChange = (commentId,rating) => {
        setRating(rating);
        handleAddRating(commentId,rating)
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
        const diff = now.diff(commentDate, "minutes");
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

    return(

        <div>
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
    );
    
}