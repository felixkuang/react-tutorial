import React from 'react'
// 里面各种各样的校验规则
// 函数组件默认值 1、
import PropTypes from 'prop-types'
import './App.css';

function Test({list,pageSize=10}){
  return (
    <div>
      {list.map(item=><p>{item}</p>)}
    </div>
  )
}
Test.propTypes = {
  // 定义各种规则
  list:PropTypes.array.isRequired  // 限定这里的list参数的类型必须是数组
}
// Test.defaultProps={
//   pageSize:10 // 如果给我传pageSize就以传入的为主，如果不传就是10
// }

class App extends React.Component {
  render() {
    return (

      <div className="App">
        <Test list={[1,2,3]} pageSize={20}></Test>
      </div>

    );
  }
}


export default App;
