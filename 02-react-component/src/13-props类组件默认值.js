import React from 'react'
// 里面各种各样的校验规则
// 函数组件默认值 1、defaultProps 2.static类静态属性定义
import PropTypes from 'prop-types'
import './App.css';

class Test extends React.Component{
  static defaultProps={
    pageSize: 30
  }
  render(){
    return (
      <div>
       {this.props.pageSize}
      </div>
    )
  }
  
}
Test.propTypes = {
  name:PropTypes.string
}
// Test.defaultProps = {
//   pageSize:10
// }


class App extends React.Component {
  render() {
    return (

      <div className="App">
        <Test pageSize={20} name={'zhangsan'}></Test>
      </div>

    );
  }
}


export default App;
