import React from "react"
// 函数组件的创建和渲染
// 1.创建
function Hello(){
  const clickHandler = (e)=>{
    // 阻止默认行为
    e.preventDefault();
    console.log('函数组件中事件被触发',e);
  }
  //return <div onClick={clickHandler}>Hello</div>
  return <div><a onClick={clickHandler} href="http://baidu.com">百度</a></div>
}

// 2.渲染 <Hello/>  <Hello><Hello/>

//类组件的创建和渲染
// 1.创建
class HelloCompoment extends React.Component{
  // 时间回调函数（标准写法、避免 this 指向问题）
  // 这样写 回调函数中的this指向的是当前的组件实例对象
  clickHandler = (e)=>{
    console.log('类组件中事件被触发',e);
  }
  render(){
    return <div onClick={this.clickHandler}>this is class Component</div>
  }
}
// 2.渲染 <HelloCompoment/>  <HelloCompoment><HelloCompoment/>


function App() {
  return (
   
    <div className="App">
      {/* 渲染Hello组件 */}
      <Hello></Hello>
      <Hello/>
       {/* 渲染类组件 */}
      <HelloCompoment></HelloCompoment>
      <HelloCompoment/>
     
    </div>
  )
}

export default App
