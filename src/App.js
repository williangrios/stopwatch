
import './App.css';
import React, {Component} from 'react';
import stopWatch from '../src/assets/cronometro.png';

class App extends Component{
  constructor(props){
    super(props);

    this.state ={
      tempo: 0,
      botao: 'Começar'
    }
    this.timer = null;
    this.comecar = this.comecar.bind(this);
    this.zerar = this.zerar.bind(this);

  }

  comecar(){

    let state = this.state;
    if (this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'Começar';
    }
    else{
      this.timer = setInterval(() => {
        let state = this.state;
        state.tempo +=0.1;
        this.setState(state);
      }, 100);
      state.botao = 'Pausar';
    }
    this.setState(state);
  }

  zerar(){
    if (this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.tempo = 0;
    state.botao = 'Começar';
    this.setState(state);

  }

  render(){
    return(
      <div className='container'>
        <img className='image' src={stopWatch} alt="Cronometro"/>
        <a className='timer'>{this.state.tempo.toFixed(1)}</a>
        <div className='areaBtn'>
        <a className='botao' onClick={this.comecar}>{this.state.botao}</a>
          <a className='botao' onClick={this.zerar}>Zerar</a>
        </div>
      </div>
    )
  }

}

export default App;