import React from "react";
import ReactDom from "react-dom";
import Background from "./Background";
import Sobrenos from "./Sobrenos";
import Contato from "./Contato";
import Menu from "./Menu";

import {Router, Route, hashHistory} from "react-router";

class Main extends React.Component{

    constructor(props){
        super(props);

    }

    botaoClicked(botaoAtual){
      //faz alguma coisa qudno clica
    }

    render(){
        return (
            <div>
                <div className="container-fluid">
                  <div className="row">
                    <Menu/>
                    <Background/>

                    {/* <Contato meses={["Jan","Fev","Mar","Abr","Mai","Jun"]} />
                    <Sobrenos/> */}
                  </div>

                  {/* <Botao botaoClicked={this.botaoClicked} />
                  <Botao botaoClicked={this.botaoClicked} />
                  <Botao botaoClicked={this.botaoClicked} />
                  <Botao botaoClicked={this.botaoClicked} />
                  <Botao botaoClicked={this.botaoClicked} />
                  <Botao botaoClicked={this.botaoClicked} /> */}
                </div>
            </div>
        );
    }
}

ReactDom.render((
    <Router history={hashHistory}>
        <Route path="/" component={Main} />
        <Route path="/Background" component={Background} />
        <Route path="/Sobrenos" component={Sobrenos} />
        <Route path="/Menu" component={Menu} />
        <Route path="/Contato" component={() => <Contato meses={["Jul","Ago","Set","Out","Nov","Dez"]}/>} />



    </Router>
),document.getElementById('container'));
