import React from "react";

export default class ContactoPagina extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nombre: '',
            mensaje: ''
        }

        this.subirD = this.subirD.bind(this);
        this.cambiaso = this.cambiaso.bind(this);
    }

    subirD(event) {
        alert("Se envió con exito, muchas gracias " + this.state.nombre);
        event.preventDefault();
    }

    cambiaso(event) {
        this.setState({
            nombre: event.target.value
        })
    }


    render() {
        return (
            <>
                <h2>Contacto</h2>
                <form className="text-center" onSubmit={this.subirD}>
                    <div className="form-group m-2">
                        {/* <label>Nombre</label> */}
                        <input type="text" placeholder="Nombre" className="form-control" onChange={this.cambiaso} />
                    </div>

                    <div className="form-group m-2">
                        {/* <label>Telefono</label> */}
                        <input type="number" placeholder="Telefono" className="form-control" />
                    </div>

                    <div className="form-group m-2">
                        {/* <label>Gmail</label> */}
                        <input type="email" placeholder="Gmail" className="form-control" />
                    </div>

                    <div className="form-group m-2">
                        {/* <label>Mensaje</label> */}
                        <textarea placeholder="Mensaje" className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary m-2">Enviar</button>
                </form>
            </>
        )
    }
}