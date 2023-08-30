import { useState,useEffect} from 'react'
import './App.css';

// 在修改数据后，把count值放到页面标题中
// 1. 导入userEffect函数
// 2. 在函数组件中执行 传入回调 并定义副作用
// 3. 当我们通过修改状态更新组件时，副作用也会不断执行

// 依赖项控制副作用的运行时机
// 1. 默认状态（无依赖项）
// 组件初始化的时候，先执行一次 等到每次数据修改一次  等到每次数据修改组件更新再次执行
// 2. 添加一个空数组依赖项
// 数组初始化的时候执行一次
// 3.依赖特定项
// 组件初始化的时候执行一次 依赖特定项发生变化会再次执行
// 4. 注意事项
// useEffect函数使用到的数据状态，就应该出现在依赖项数组中声明，否则可能有bug
// useEffect是在组件dom渲染更新完毕之后才执行




function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('张三')
  
  useEffect(()=>{
    // 定义副作用
    console.log("副作用又执行了")
    document.title = count
    console.log(name);
  },[count,name])

  return (
    <div className="App">
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setName('cp')}>{name}</button>
    </div>
  );
}

export default App;
