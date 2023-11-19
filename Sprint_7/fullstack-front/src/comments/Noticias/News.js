import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './news.css';

export default function News({num}) {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    loadNoticias();
  }, []);

  const loadNoticias = async () => {
    try {
      const result = await axios.get("https://newsapi.org/v2/everything?q="
                                    +"bogota&languaje=es&apiKey=5e58dc1d84694fa1bf56e6e905a1a69b");
      setNoticias(result.data.articles);
    } catch (error) {
      console.error("Error loading noticias:", error);
    }
  };

  return (
    <div className='container-noticias'>
      <h2 className="title">Últimas noticias</h2>
      {noticias.slice(0,num-1).map((noticia, index) => (
        <Link to={noticia.url}>
          <button key={index} className="item">
            <h2 className="title-noticia">{noticia.title}</h2>
            <img className = "img" src={noticia.urlToImage} alt={noticia.title} />
            <div className="info-item">  
              <span className="name">{noticia.publishedAt=noticia.publishedAt.split("T")[0].split("-").reverse().join("-")}</span>
              <span className="name">{noticia.source.name}</span>
            </div>
          </button>
        </Link>
      ))}
    </div>
  );
}
