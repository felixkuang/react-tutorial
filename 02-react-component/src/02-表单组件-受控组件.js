import React from "react"

class Input extends React.Component{
  // 1.声明用来控制input value的react组件自己的状态
  state = {
    message:'this is message'
  }
  render(){
    // 2.给input框的value属性绑定 react state
    // 3.给input框绑定一个change事件，为了拿到当前输入框中的数据
    return <input type={'text'}  value={this.state.message} onChange={this.onChangeHandler}/>
  }

  onChangeHandler = (e)=>{
    console.log('change事件触发了',e.target.value);
    // 4.拿到input输入框最新的值 交给state中的message
    this.setState({
      message:e.target.value
    })
  }
}


// 根组件
function App() {
  return (
    <div className="App">
      <Input></Input>
    </div>
  )
}

export default App
