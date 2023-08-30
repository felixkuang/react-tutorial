import React from "react"

//Father 父组件  Son 子组件

// 函数式组件的Son
function SonA(props){
  return (
    <>
      <div>我是函数子组件 {props.msg}</div>
      <ul>
        {
          props.list.map(item=> <li>{item}</li>)
        }
      </ul>
      
    </>
  )
}

// 类组件的Son
class SonB extends React.Component{
  render(){
    return <div>我是类子组件 {this.props.msg}</div>
  }
}

class Father extends React.Component{
  state = {
    message:'this is message',
    list:[1, 2, 3]
  }
  render(){
    return(
      <div>
        {/* 子组件身上绑定属性，属性名可以自定义，保持语义化 */}
        <SonA msg={this.state.message} list={this.state.list}></SonA>
        <SonB msg={this.state.message} list={this.state.list}></SonB>
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
