import React from "react"

class TestCompoment extends React.Component{
 
  constructor(){
    super()
    this.handler = this.handler.bind(this)
  }

  handler (){
    console.log(this);
  }
  render(){
    return (
      <button onClick={this.handler}>click</button>
    )
  }
}

// 根组件
function App() {
  return (
    <div className="App">
     <TestCompoment/>
    </div>
  )
}

export default App
