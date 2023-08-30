import React from "react"
// 函数组件的创建和渲染
// 1.创建
// 如何传递自定义参数
// 1.只需要一个额外的参数   {clickHandler} -> {()=>clickHandler('自定义参数')}
// 2.即需要e也需要额外的参数 {(e)=>clickHandler(e, '自定义参数')}

function Hello(){
  const clickHandler = (e,msg)=>{

    console.log('函数组件中事件被触发', e, msg);
  }
  return <div onClick={(e)=>clickHandler(e,'this is msg')}>click me</div>
}



function App() {
  return (
    <div className="App">
      {/* 渲染Hello组件 */}
      <Hello></Hello>
      <Hello/>
    </div>
  )
}

export default App
