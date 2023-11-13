import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/estilos.css'
 
export const Navbar = () => {
    return (
            <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div class="flex-row d-flex">
                    <button type="button" class="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#" title="Ingeniería de Software">Seguridad Chapinero USA</a>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="collapsingNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                          <Link className="nav-link" to="/mainmenu">
                              Home
                          </Link>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link logout-link" to="/">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
       </nav>
    )
}
export default Navbar