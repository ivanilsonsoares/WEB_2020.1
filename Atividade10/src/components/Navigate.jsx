import React, { Component } from 'react';
import Card from './Card'
import './Navigate.css'

import { connect } from 'react-redux'
import { alterarValor1 } from '../store/actions/calculadoraCreateAction'
class Navigate extends Component {

    // De uma forma diferente do modelo da atividade
    soma() {
        const soma = this.props.valor1 + this.props.valor2
        this.props.alterarValor1(soma)
    }
    mult() {
        const mult = (this.props.valor1 < 0) ? 0 : this.props.valor2 * this.props.valor1
        this.props.alterarValor1(mult)
    }

    maior() {
        const maior = (this.props.valor1 < this.props.valor2) ? this.props.valor2 : this.props.valor1
        this.props.alterarValor1(maior)
    }
    render() {
        return (
            <Card title='valores' red>
                <div className='navigate'>
                    <input value={this.props.valor1} />
                    <input value={this.props.valor2} />
                    {/* <button className='btn btn-secondary' onClick={() => this.soma()}>
                        Soma
                    </button>
                    <button className='btn btn-secondary' onClick={() => this.mult()}>
                        Multiplicação
                    </button>
                    <button className='btn btn-secondary' onClick={() => this.maior()}>
                        Maior
                    </button> */}
                    
                </div>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        valor1: state.Valor1.valor1,
        valor2: state.Valor2.valor2,
        soma: state.Soma.soma,
        mult: state.Mult.mult,
        maior: state.Maior.maior,
    }
}

function mapActionCreatorToProps(dispatch) {
    return {
        alterarValor1(novoValor1) {
            const action = alterarValor1(novoValor1)
            dispatch(action)
        }
    }
}



export default connect(mapStateToProps, mapActionCreatorToProps)(Navigate)