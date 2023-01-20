import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default class Menu extends React.Component {

    render() {
        return (
            <nav className="row bg-light fixed-top px-5">
                <div className="col-12 d-flex align-items-center">
                    <h1>Artio</h1>
                    <Link to="/" className="mx-3 ">Inicio</Link>
                    <Link to="/materiales" className="mx-3 ">Materiales</Link>
                    <Link to="/contacto" className="mx-3 ">Contacto</Link>
                    <Link to="/lanzamientos" className="mx-3 ">Lanzamiento</Link>
                </div>
            </nav>
        )
    }
}