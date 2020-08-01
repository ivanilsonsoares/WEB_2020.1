import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Arena from './components/q1q2/hero';
import Arenaq3 from './components/q3/hero'
import World3 from './components/q3/world'
import Arenaq4 from './components/q4/arena'
import Heroq4 from './components/q4/hero'
import Enemyq4 from './components/q4/enemy'
import { URL_HERO, URL_ENEMY } from './constants'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4 className="PaddingButton">Questão 1 e Questão 2</h4><br />
        <Arena />
        <br /><h4 className="PaddingButton">Questão 3</h4><br />
        <World3>
          <Arenaq3 /><br />
          <Arenaq3 /><br />
          <Arenaq3 /><br />
        </World3>
        <br /><h4 className="PaddingButton">Questão 4</h4><br />
        <Arenaq4 name='Luta principal'>
          <Heroq4 name='Baki' img={URL_HERO} />
          <Enemyq4 name='Yujiro' img={URL_ENEMY} />
        </Arenaq4>
      </header>
    </div>
  );
}

export default App;
