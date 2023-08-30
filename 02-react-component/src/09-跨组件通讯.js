import React,{createContext} from 'react'
import './App.css';

// APP -> A ->C
// APP ->C
// 1.导入createContext方法并执行,结构提供者和消费者
const  {Provider,Consumer} = createContext()

function ComA(){
  return (
    <div>
      this is ComA
      <ComC/>
    </div>
  )
}

function ComC(){
  return (
    <div>
      this is ComC
       {/** 3.通过Consumer使用数据 */}
       <br/>
      <Consumer>{value=><span>{value}</span>}</Consumer>
    </div>
  )
}

class App extends React.Component {
  state = {
    message:'this is message'
  }
  render() {
    return (
      // 2.使用provider包裹根组件
      <Provider value={this.state.message}>
        <div className="App">
          <h1>hello world</h1>
          <ComA/>
        </div>
      </Provider>
    );
  }
}


export default App;
