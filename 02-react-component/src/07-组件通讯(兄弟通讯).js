import React from "react"

// 兄弟组件通信实现
// 目标：B组件中的数据传给A
// 技术方案
// 1. 通过B中的数据通过子传父 传给主APP
// 2. 再把APP接收到的B中的数据 通过父传子 传给A



function SonA(props){
  return (
      <div>this is A {props.bMsg}</div>
  )
}

function SonB(props){
  const bMsg = '这里是来自于B组件的数据'
  return (
      <div>this is B <button onClick={()=>props.getBMsg(bMsg)}>发送数据</button></div>
  )
}

class Father extends React.Component{
  state = {
    msg:''
  }
  // 声明一个传给B组件的方法
  getBMsg = (msg)=>{
    console.log(msg)
    this.setState({
      msg:msg
    })
  }
  render(){
    return(
      <div>
        <SonA bMsg={this.state.msg}></SonA>
        <SonB getBMsg={this.getBMsg}></SonB>
      </div>
    )
  }

}



// 根组件
function App() {
  return (
    <div className="App">
     <Father></Father>
    </div>
  )
}

export default App
