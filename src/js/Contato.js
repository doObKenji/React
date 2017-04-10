import React from "react";

class Contato extends React.Component{

    constructor(props){

        super(props);

        this.lista = [];
        for (var i = 0; i < this.props.meses.length ; i++) {
            this.lista[i] = <li>{this.props.meses[i]}</li>;

        }
    }

    componentDidMount() {
        this.refs.titulo.style.color = "red";
    }

    render(){

        return (

            <div>
                <h1 ref="titulo">Contato</h1>
                <ul>
                    {this.lista}
                </ul>
            </div>
        )

    }


}
export default Contato;
