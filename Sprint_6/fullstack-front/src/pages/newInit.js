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
                        style={{ width: '60%', height: '60%', borderRadius: '10px' }}
                    />
                </div>
            </div>
            <div>
                <section data-baseweb="block" class="css-gqcHgx">
                    <div class="css-fVLpfI">
                        <div class="css-iJydmP">
                            <div class="css-eleJdh" >
                                <img
                                    src="../media/mapR.jpg"
                                    role="presentation"
                                    aria-hidden="true"
                                    class="css-bGmtfz1"
                                />
                            </div>
                        </div>
                        <div class="css-cxtfxr css-cGimUo ">
                            <div class="css-hPnljU" >
                                <h1 class="css-jzIGNN" style={{ marginBottom:'20px' }}>Mapa de riesgo</h1>
                            </div>
                            <div class="css-hPnljU">
                                <p style={{ fontSize: '20px', textAlign: 'left' }}>
                                    Te permite explorar las zonas de riego en la localidad de Chapinero. Descubre las áreas peligrosas y toma decisiones informadas.
                                </p>
                            </div>
                            <div class="css-PKJb">
                                <div class="css-WiLSj">
                                <div class="css-iYgZzq">
                                            <div className="css-iYgZzq">
                                                <Link to="/mapa" className="css-hmUeKG">
                                                    comenzar
                                                </Link>
                                            </div>
                                    </div>
                                    <div class="css-iYgZzq">
                                            <div className="css-iYgZzq">
                                                <Link to="/login" className="css-hmUeKG">
                                                    ¿ya tienes una cuenta?
                                                </Link>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <div>
                <section data-baseweb="block" class="css-gqcHgx">
                    <div class="css-fVLpfI">
                        <div class="css-cxtfxr css-cGimUo " style={{marginLeft:'50px' }}>
                            <div class="css-hPnljU" >
                                <h1 class="css-jzIGNN" style={{ marginBottom:'20px'}}>Wheel: Comparte Tu Viaje</h1>
                            </div>
                            <div class="css-hPnljU">
                                <p style={{ fontSize: '20px', textAlign: 'left' }}>
                                    Comparte viajes seguros y ahorra dinero al viajar con personas que se dirigen a tu mismo destino. Rutas compartidas para desplazamientos amigables con el medio ambiente.
                                </p>
                            </div>
                            <div class="css-PKJb">
                                <div class="css-WiLSj">
                                <div class="css-iYgZzq">
                                            <div className="css-iYgZzq">
                                                <Link to="/viewwheels" className="css-hmUeKG">
                                                    comenzar
                                                </Link>
                                            </div>
                                    </div>
    
                                </div>
                            </div>
                        </div>
                        <div class="css-iJydmP">
                            <div class="css-eleJdh" >
                                <img
                                    src="../media/car.jpg"
                                    role="presentation"
                                    aria-hidden="true"
                                    class="css-bGmtfz"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            

            <div>
                <section data-baseweb="block" class="css-gqcHgx">
                    <div class="css-fVLpfI">
                    <div class="css-iJydmP">
                            <div class="css-eleJdh" >
                                <img
                                    src="../media/comments.jpg"
                                    role="presentation"
                                    aria-hidden="true"
                                    class="css-bGmtfz"
                                />
                            </div>
                    </div>
                        <div class="css-cxtfxr css-cGimUo ">
                            <div class="css-hPnljU" >
                                <h1 class="css-jzIGNN" style={{ marginBottom:'20px' }}>Foro</h1>
                            </div>
                            <div class="css-hPnljU">
                                <p style={{ fontSize: '20px', textAlign: 'left',marginRight:'30px' }}>
                                Comparte y comunícate sobre incidentes de seguridad y acciones de robo en lugares de Chapinero. Mantente informado y conectado con la comunidad.
                                </p>
                            </div>
                            <div class="css-PKJb">
                                <div class="css-WiLSj">
                                <div class="css-iYgZzq">
                                            <div className="css-iYgZzq">
                                                <Link to="/viewcomments" className="css-hmUeKG">
                                                    comenzar
                                                </Link>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <footer>
                <div className="footer-content" style={{ backgroundColor: "#808080" }}>
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
