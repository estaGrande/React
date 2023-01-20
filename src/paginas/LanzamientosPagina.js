import React from "react";

export default class LanzamintosPagina extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lanzamientos: []
        }

    }

    componentDidMount() {
        // como no encontre de herramientas lo hice de pokemones
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json())
        .then((result) => {
            console.log(result)
            this.setState({
                lanzamientos: result.results
             });
        })
    }

    render() {
        return (
            <>
                {this.state.lanzamientos.map((lanzamiento) => (
                    <p>Nombre: {lanzamiento.name}</p>
                ))}
            </>
        )
    }
}