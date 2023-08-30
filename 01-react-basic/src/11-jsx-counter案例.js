import React from "react"

// 通过组件修改状态的方式 counter
class Counter extends React.Component{
  state = {
    counter:0
  }
  setCounter =()=> {
    this.setState({
      counter:this.state.counter+1
    })
  }
  render(){
    return <button onClick={this.setCounter}>click {this.state.counter}</button>
  }

}


// 根组件
function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  )
}

export default App
