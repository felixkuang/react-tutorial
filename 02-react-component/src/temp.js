import React from 'react'
import './App.css';


class Test extends React.Component{
  timer = null
  componentDidMount(){
    this.timer = setInterval(() => {
      console.log('定时器开启')
    }, 1000);
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
    // 清理定时器
    clearInterval(this.timer)
  }
  render(){
    return (
      <div>test</div>
    )
  }
}

class App extends React.Component {
  constructor() {
    super()
    console.log('constructor');
  }
  state = {
    count: 0,
    flag:true
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
 

  onClickHander = ()=>{
    this.setState({
      count:this.state.count+1,
      flag:!this.state.flag
    })
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        this is div
        {/* 通过一个数据状态切换 让Test组件进行销毁，就会发生组件卸载 */}
        {this.state.flag?<Test></Test>:null}
        <button onClick={this.onClickHander}>{this.state.count}</button>
      </div>
    );
  }
}


export default App;
