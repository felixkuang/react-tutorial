import React, { useState, useEffect } from 'react'
import './App.css';

// 类组件 如何发送网络请求？
// 声明周期钩子函数  componentDidMount
// 执行时机？
// 在初始化的时候dom渲染完毕时执行一次

// useEffect 
// 1. 不加载依赖项  -   初始化 + 首次渲染
// 2. 加[]的依赖项  -  初始化执行一次
// 3. 加上特定依赖项[name,count] - 初始化 + 任意一个变化执行

function App() {
  useEffect(()=>{
    console.log("456")
    // 发送请求
    async function loadData(){
      const res = await fetch("https://www.baidu.com")
      console.log(res);
    }
    loadData()
  },[])

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
