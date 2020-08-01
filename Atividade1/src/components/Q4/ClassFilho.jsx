import React, {Component} from 'react';

export default class ClassPai extends Component{
    render(){
        return(
            <div>
                <h5>Nome: {this.props.nome}</h5> 
                <h5>Curso: {this.props.curso}</h5>
                <h5>Cidade: {this.props.cidade}</h5>
            </div>
        )
    }
}