import React, { Component } from 'react';
import './App.css';
import Validatelength from './components/validationComponent';
import Char from './components/char';

class App extends Component {

  state={
    userInput:''
  }

   onTextChangedListener = (event) =>{
    const enterText = event.target.value;
    this.setState({userInput:enterText})  
  }

  deleteCharacter = (index) =>{
    const enterText = this.state.userInput.split('');
    enterText.splice(index,1);
    const text = enterText.join('');
    this.setState({userInput:text})
  }



  render() {
    let printCharacterLength = null
    if (this.state.charLength !== 0){
      printCharacterLength = (
        <div>
        <p>{this.state.charLength}</p>
        </div>
      );
    }

     const charList = this.state.userInput.split('').map((ch,index) =>{
      return(
        <Char character={ch} 
        key={index}
        click={()=>this.deleteCharacter(index)}/>
      );
    })

    return (
      <div className="App">
       <input  className="inputText" type="text" onChange={this.onTextChangedListener} value={this.state.us}></input>
       {printCharacterLength}
       <Validatelength charLength={this.state.userInput.length} />
       {charList}
      </div>
    );
  }
}

export default App;
