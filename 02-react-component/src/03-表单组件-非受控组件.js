import React,{createRef} from 'react'

class InputCompoment extends React.Component {
  // 这个实例属性可以自定义，语义化即可
  msgRef = createRef()

  getValue = () => {
    console.log(this.msgRef);
    console.log(this.msgRef.current);
    console.log(this.msgRef.current.value);
  }

  render() {
    return (
      <>
        <input type='text' name="name" ref={this.msgRef} />
        <br/>
        <input type='text' name="age" ref={this.msgRef} />
        <br/>
        <button onClick={this.getValue}>获取文本框的值</button>
      </>
    )
    
  }

}


function App() {
  return (
    <div className="App">
      <InputCompoment />
    </div>
  )
}

export default App
