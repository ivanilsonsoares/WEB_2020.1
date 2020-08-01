import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import DadosPessoais from './components/Q1/DadosPessoais'
import Questao2 from './components/Q2/Questao2'
import DadosPessoaisPai from './components/Q3/DadosPessoaisPais'
import ClassPai from './components/Q4/ClassPai'

function App() {
  return (
    <div className="App" >
      <div className="card" Style="width: 18rem;">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
            Questão 1*
            </h5>
          </div>
          <div className="card-body">
          <DadosPessoais/>
          </div>              
      </div>

      <div className="card" Style="width: 18rem;">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
            Questão 2
            </h5>
          </div>
          <div className="card-body">
            <Questao2/>
          </div>              
      </div>

      <div className="card" Style="width: 18rem;">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
            Questão 3
            </h5>
          </div>
          <div className="card-body">
            <DadosPessoaisPai/>
          </div>              
      </div>

      <div className="card" Style="width: 18rem;">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
            Questão 4 e 5
            </h5>
          </div>
          <div className="card-body">
            <ClassPai/>
          </div>              
      </div>
    </div>
  );
}

export default App;
