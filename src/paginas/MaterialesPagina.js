import React from "react";
import ListaMateriales from "../componentes/ListaMateriales";

export default class MaterialesPagina extends React.Component {

    materiales = [
        {
            nombre: "Taladro",
            img: "/img/Taladro.jpg",
            descripcion: "Máquina que nos permite hacer agujeros debido al movimiento de rotación (en ocasiones combinados con percusión) que adquiere la broca sujeta en su cabezal."
        },
        {
            nombre: "Martillo",
            img: "/img/Martillo.webp",
            descripcion: "Herramienta de mano, diseñada para golpear; básicamente consta de una cabeza pesada y de un mango que sirve para dirigir el movimiento de aquella. La parte superior de la cabeza se llama boca y puede tener formas diferentes. La parte inferior se llama cara y sirve para efectuar el golpe."
        },
        {
            nombre: "Mazo",
            img: "/img/Mazo.png",
            descripcion: "Su uso más común es golpeando el objeto sin la intención de romperlo. En construcción se utilizan los mazos con cabeza de hule comúnmente para alinear tabicones y adoquinados. En carpintería se utiliza para golpear cuñas de madera, o piezas de inserción sin dañar la superficie de la madera."
        }
    ]

    render() {
        return (
            <>
                <h2>Materiales</h2>
                <ListaMateriales materiales={this.materiales} />
            </>
        )
    }
}