import React from 'react'
import './App.css';




class App extends React.Component {

  constructor(){
    super()
    console.log("constructor")
  }

  componentDidMount(){
    console.log("componentDidMount")
  }
  render() {
    console.log("render")
    return (
      <div className="App">
        123
      </div>

    );
  }
}


export default App;
