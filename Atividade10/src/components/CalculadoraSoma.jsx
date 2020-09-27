import React, { Component } from 'react';
import Card from './Card'
import { connect  } from 'react-redux'

class CalculadoraSoma extends Component {
    render() {
        return (
            <Card title='Soma' blue>
                <h1>
                    {this.props.valor1 + this.props.valor2}
                </h1>
            </Card>
        )
    }
}

function mapStateToProps(state){
    return{
        valor1: state.Valor1.valor1,
        valor2: state.Valor2.valor2,
        soma: state.Soma.soma, // para a utilização de button
    }
}

export default connect(mapStateToProps)(CalculadoraSoma)