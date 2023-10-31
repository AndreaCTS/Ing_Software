import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/style.css';
import '../styles/addcomments.css';
import {AddLocationAlt,EmojiEmotions} from '@mui/icons-material';
//import {AgregarCasaTrabajo} from "@material-ui/icons";
const neighborhoodOptions = [
  "Chico Reservado","Bellavista","Chico Alto","El Nogal","La Ca  stellana","El Refugio","La Cabrera","Los Rosales",
  "Seminario","Toscana","La Esperaza Nororiental","La Sureña","San Isidiro","San Luis Altos Del Cabo",
  "Bosque Calderón","Bosque Calderón Tejada","Chapinero Alto","El Castillo","El Paraiso","Emaus",
  "Granada","Ingenar","Juan XXII","La Salle","Las Acacias","Los Olivos","Maria Cristina","Mariscal Sucre","Nueva Granada",
  "El Palomar","Pardo Rubio","San Martin De Porres","Villa Anita","Villa Del Cerdo","Antiguo Country","Chico Norte",
  "Chico Norte II","Chico Norte III","Chico Occidental","El Chico","El Retiro","Espartillal","La Cabrera",
  "Lago Gaitan","La Porciuncula","Quinta Camacho","Cataluña","Chapinero Central","Chapinero Norte","Marly","Sucre",
];

const emoji = [
  "&#1F600;","&#1F601;","&#1F602;","&#1F603;","&#1F604;","&#1F605;","&#1F606;","&#1F607;","&#1F608;","&#1F609;","&#1F610;",
  "&#1F611;","&#1F612;","&#1F613;",
];
export default function AddComment() {
  let navigate = useNavigate();
  const [comments, setComments] = useState({ text: "", barrio: "" });

  const { text, barrio } = comments;

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
    await axios.post("http://localhost:8080/comments", comments);
    navigate("/viewcomments");
  };

  return (
    <div className="share">
      <div className="shareWrapper">
          <form onSubmit={(e) => onsubmit(e)}> 
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
                  <AddLocationAlt htmlColor="green" className="shareIcon"/>
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
                
                <div className="shareOption">
                  <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                  <span className="shareOptionText">Emojis</span>
                </div>
              </div>              
              <button type="submit" className="shareButtom">Publicar</button>
              
            </div>
          </form>
      </div>
    </div>
    
    

  );
}
