import React from "react";
import Botao from "./componentes/Botao";

class Menu extends React.Component{

    constructor(props){

        super(props);


    }


    render(){

        return (

          <div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xs-4"></div>

                  <div className="col-xs-4">
                    <div className="row">
                      <div className="col-xs-3">
                        <Botao valor="Botão 1" scrollPosition="60"/>
                      </div>
                      <div className="col-xs-3">
                        <Botao valor="Botão 2" scrollPosition="180"/>
                      </div>
                      <div className="col-xs-3">
                        <Botao valor="Botão 3" scrollPosition="200"/>
                      </div>
                      <div className="col-xs-3">
                        <Botao valor="Botão 4" scrollPosition="320"/>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-4"></div>
                </div>
              </div>
          </div>
        )
    }


}

export default Menu;
