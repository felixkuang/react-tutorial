import React from 'react'

function SonA({message,list}){
  // props 是一个对象，里面存储着通过父组件传入的所有参数
  return (
      <div>this is A {message}</div>
  )
}

class SonB extends React.Component{
  render(){
    return(
      // 类组件必须通过this关键词去获取，这里的props是固定的
      <div>this is B {this.props.message}</div>
    )
  }
}

class App extends  React.Component{
  state = {
    message:"父组件消息",
    list:['张三','李四','王五']
  }
  render(){
    return(
      <div className="App">
     { /* 子组件身上绑定属性 属性名可以自定义 保持语义化 */}
      <SonA message={this.state.message} list={this.state.list}/>
      <SonB message={this.state.message} list={this.state.list}/>
    </div>
    )
  }
  
}

export default App
