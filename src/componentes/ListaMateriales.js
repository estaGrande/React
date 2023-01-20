import React from "react";
import Material from "./Material";

export default class ListaMateriales extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {this.props.materiales.map((material) => (
                    <Material
                        img={material.img} 
                        nombre={material.nombre}                        
                        descripcion={material.descripcion} 
                    />
                ))}
            </>
        );
    }
}