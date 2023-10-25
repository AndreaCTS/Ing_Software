import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/style.css';

const neighborhoodOptions = [
  "Chico Reservado","Bellavista","Chico Alto","El Nogal","La Castellana","El Refugio","La Cabrera","Los Rosales",
  "Seminario","Toscana","La Esperaza Nororiental","La Sureña","San Isidiro","San Luis Altos Del Cabo",
  "Bosque Calderón","Bosque Calderón Tejada","Chapinero Alto","El Castillo","El Paraiso","Emaus",
  "Granada","Ingenar","Juan XXII","La Salle","Las Acacias","Los Olivos","Maria Cristina","Mariscal Sucre","Nueva Granada",
  "El Palomar","Pardo Rubio","San Martin De Porres","Villa Anita","Villa Del Cerdo","Antiguo Country","Chico Norte",
  "Chico Norte II","Chico Norte III","Chico Occidental","El Chico","El Retiro","Espartillal","La Cabrera",
  "Lago Gaitan","La Porciuncula","Quinta Camacho","Cataluña","Chapinero Central","Chapinero Norte","Marly","Sucre",
];

export default function AddComment() {
  let navigate = useNavigate();
  const [comments, setComments] = useState({ text: "", barrio: "" });

  const { text, barrio } = comments;

  const onInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the input exceeds the character limit
    if (name === "text" && value.length > 50) {
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
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Adding a comment</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="text" className="form-label">
                Description (Max 50 characters)
              </label>
              <textarea
                className="form-control"
                placeholder="Enter your description"
                name="text"
                value={text}
                onChange={(e) => onInputChange(e)}
                rows="4"
                maxLength="50" // Set the maximum character limit
              />
              <div className="text-end mt-2">
                <span className="text-muted">{text.length}/50</span>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="barrio" className="form-label">
                Choose a Neighborhood
              </label>
              <input
                type="text"
                className="form-control"
                list="neighborhoods"
                name="barrio"
                value={barrio}
                onChange={(e) => onInputChange(e)}
                placeholder="Type or select a neighborhood"
              />
              <datalist id="neighborhoods">
                {neighborhoodOptions.map((neighborhood) => (
                  <option key={neighborhood} value={neighborhood} />
                ))}
              </datalist>
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/viewcomments">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
