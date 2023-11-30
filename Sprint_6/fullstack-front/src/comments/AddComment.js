import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/style.css';
import '../styles/addcomments.css';
import { AddLocationAlt, EmojiEmotions } from '@mui/icons-material';
//import {AgregarCasaTrabajo} from "@material-ui/icons";
const neighborhoodOptions = [
  "Chico Reservado", "Bellavista", "Chico Alto", "El Nogal", "La Castellana", "El Refugio", "La Cabrera", "Los Rosales",
  "Seminario", "Toscana", "La Esperaza Nororiental", "La Sureña", "San Isidiro", "San Luis Altos Del Cabo",
  "Bosque Calderón", "Bosque Calderón Tejada", "Chapinero Alto", "El Castillo", "El Paraiso", "Emaus",
  "Granada", "Ingenar", "Juan XXII", "La Salle", "Las Acacias", "Los Olivos", "Maria Cristina", "Mariscal Sucre", "Nueva Granada",
  "El Palomar", "Pardo Rubio", "San Martin De Porres", "Villa Anita", "Villa Del Cerdo", "Antiguo Country", "Chico Norte",
  "Chico Norte II", "Chico Norte III", "Chico Occidental", "El Chico", "El Retiro", "Espartillal",
  "Lago Gaitan", "La Porciuncula", "Quinta Camacho", "Cataluña", "Chapinero Central", "Chapinero Norte", "Marly", "Sucre",
];

const emoji = [
  "😀", "😁", "😂", "😃", "😄", "😅",
];
export default function AddComment() {
  let navigate = useNavigate();
  const [comments, setComments] = useState({ text: "", barrio: "", publish_Date: Date() });
  const [showEmojis, setShowEmojis] = useState(false); // Estado para controlar la visibilidad de los emojis
  const { text, barrio } = comments;

  const [isEmojiListOpen, setIsEmojiListOpen] = useState(false); // Estado para controlar si la lista de emojis está abierta

  const toggleEmojiList = () => {
    setIsEmojiListOpen(!isEmojiListOpen);
  };
  const onInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the input exceeds the character limit
    if (name === "text" && value.length > 200) {
      return;
    }

    setComments({ ...comments, [name]: value });
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    const fechaActual = new Date();

    const storedToken = localStorage.getItem("access_token");
    console.log("Token almacenado en LocalStorage:", storedToken);

    comments.publish_Date = fechaActual;
    setComments({ ...comments, publish_Date: fechaActual });


    const config = {
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
    };
    
  
    await axios.post("http://localhost:8080/comments", comments,config //, {

    )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
      
        console.error("Error en la solicitud:", error);
      });


    window.location.reload()
  };



  const handleEmojiClick = (emoji) => {
    setComments({ ...comments, text: text + emoji }); // Agrega el emoji al texto
  };


  return (
    <div className="share">
      <div className="shareWrapper">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="shareTop">
            <textarea
              placeholder="Haz un comentario. 200 Caracteres Max."
              className="shareInput"
              name="text"
              value={text}
              onChange={(e) => onInputChange(e)}
              rows={4}
              maxLength="200"
            />
          </div>
          <hr className="shareHr"></hr>
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <AddLocationAlt htmlColor="green" className="shareIcon" />
                <input
                  type="text"
                  className="selectBar"
                  list="neighborhoods"
                  name="barrio"
                  value={barrio}
                  onChange={(e) => onInputChange(e)}
                  placeholder="Seleccione Vecindario"
                />
                <datalist id="neighborhoods">
                  {neighborhoodOptions.map((neighborhood) => (
                    <option key={neighborhood} value={neighborhood} />
                  ))}
                </datalist>
              </div>

              <div className="shareOption" onClick={() => setShowEmojis(!showEmojis)}>
                <EmojiEmotions
                  htmlColor="goldenrod"
                  className="shareIcon"
                  onClick={toggleEmojiList}
                />
                <span className="shareOptionText" >Emojis</span>
                {isEmojiListOpen && (
                  <div className="emojiList">
                    {emoji.map((emoji, index) => (
                      <span
                        key={index}
                        onClick={() => handleEmojiClick(emoji)} // Agrega un manejador de clics para seleccionar un emoji
                        dangerouslySetInnerHTML={{ __html: emoji }} // Renderiza el emoji utilizando HTML
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            <button type="submit" className="shareButtom">Publicar</button>

          </div>
        </form>
      </div>
    </div>

  );
}