import React from "react"

//Father 父组件  Son 子组件

// 函数式组件的Son
function SonA(props){
  const {getSonMsg} = props
  return (
      <div>this is son <button onClick={()=>getSonMsg('这里来自于子组件的数据')}>传递子组件数据</button></div>
  )
}

class Father extends React.Component{
  state = {
    message:'this is message',
    list:[1, 2, 3]
  }
  getSonMsg = (sonMsg)=>{
    console.log(sonMsg)
    this.setState({
      message:sonMsg
    })
  }
  render(){
    return(
      <div>
        {this.state.message}
        <SonA getSonMsg={this.getSonMsg}></SonA>
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
