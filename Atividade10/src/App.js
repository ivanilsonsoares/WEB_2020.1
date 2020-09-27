import React, { Component } from 'react'
import './App.css'
import Navigate from './components/Navigate'
import CalculadoraBack from './components/CalculadoraMult'
import CalculadoraFront from './components/CalculadoraSoma'
import CalculadoraInfo from './components/CalculadoraMaior'
export default class App extends Component {

  render() {
    return (
      <div className='container' >
        <h1>Calculadora</h1>
        <div className='line'>
          <Navigate />
        </div>
        <div className='line'>
          <CalculadoraFront/>
          <CalculadoraBack/>
          <CalculadoraInfo/>
        </div>
      </div>
    )
  }
}