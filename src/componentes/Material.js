import React from "react";
import "./Material.css"

export default class Material extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            mostrar:false
        }

        this.toggleCambio=this.toggleCambio.bind(this);
    }

    toggleCambio(){        
        this.setState(prevState=>({            
            mostrar: !prevState.mostrar                                
        }));              
    }

    render(){
        return(
            <div className="row my-4">
                <div className="col-12 d-flex aling-items-center p-0">
                    <img className="band-thumb" src={this.props.img} alt={this.props.nombre} />
                    <div className="px-3">
                        <h2>{this.props.nombre}</h2>                        
                        <p className={(this.state.mostrar ? '': 'd-none')}>{this.props.descripcion}</p>
                        <button className="btn btn-dark " onClick={this.toggleCambio}>{(this.state.mostrar ? 'Mostrar menos': 'Mostrar más')}</button>
                    </div>                    
                </div>
            </div>  
        )
    }
}