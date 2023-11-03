import React from 'react';
import '../styles/styleInit.css'; // Importa tu archivo CSS aquí
import { Link } from 'react-router-dom';

export default function NewInit() {
    return (
        <div>
            <div style={{ background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <div data-baseweb="block" className="css-iRqTzz">
                    <div data-baseweb="block" className="container-inner css-gCYXkZ">
                        <div data-baseweb="block" className="css-bVFrLX">
                            <div data-baseweb="block" className="css-dcEHHK css-bcDAtT">
                                <div className="css-dkcVmX">
                                    <div data-baseweb="block" className="css-PKJb">
                                        <div className="css-jNMsjR">
                                            <div className="css-hPnljU">
                                                <h1 className="css-bJAboq">Camina seguro en la localidad de Chapinero</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-baseweb="block" className="css-PKJb">
                                        <div className="css-WiLSj">
                                            <div className="css-iYgZzq">
                                            <Link to="/adduser" className="css-bENDJs">
                                                    Registrate con nosotros
                                            </Link>
                                                
                                            </div>
                                            <div className="css-iYgZzq">
                                            <Link to="/login" className="css-hmUeKG">
                                                Inicio de sesion
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <img
                        src="../media/fondoInit.jpg"
                        alt="Viaja o conduce con la app de Uber"
                        role="presentation"
                        aria-hidden="true"
                        style={{ width: '60%', height: '60%',borderRadius: '10px' }}
                    />
                </div>
            </div>
            <footer>
                <div className="footer-content" style={{ backgroundColor: "#FFFFFF" }}>
                    <p>&copy; 2023 Clase con Leyva</p>
                    <ul className="social-icons">
                        <li>
                            <a href="https://www.instagram.com/" target="_blank">
                                <img src="../media/instagram_1.png" alt="Instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://web.facebook.com/?locale=es_LA&_rdc=1&_rdr" target="_blank">
                                <img src="../media/facebook.png" alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/?lang=es" target="_blank">
                                <img src="../media/twitter.png" alt="Twitter" />
                            </a>
                        </li>
                    </ul>

                </div>
            </footer>
        </div>

    );
}