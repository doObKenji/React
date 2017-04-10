import React from "react";
import {hashHistory} from 'react-router';

class Botao extends React.Component{

    // @Private _dom = null;

    constructor(props){

        super(props);

    }

    componentDidMount(){
      this._dom = $(this.refs.botao);
      this._dom.on('click', this._clicked);
      this._dom.on('mouseover', this._hover);

    }

    _hover(){
      // this.props.botaoClicked(this);
      // hashHistory.push('quamSomos');
      console.log("hover");
    }

    _clicked(){
      // this.props.botaoClicked(this);
      // hashHistory.push('quamSomos');
      console.log("click");

    }

    terminou(){

    }

    render(){

        return (
            <div ref="botao">
              <div className="button" value = {this.props.valor}>{this.props.valor}</div>
            </div>
        )

    }




}
export default Botao;
