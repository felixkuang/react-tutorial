import { useState } from 'react'
import './App.css';

// userState
// 1. 导入userState函数 react
// 2. 执行这个函数并传入初始值  必须在函数组件中
// 3. [数据，修改数据的方法]
// 4. 使用数据 修改数据

// 状态的读取和修改
// const [count, setCount] = useState(0)
// 1. useState传过来的参数 作为count的初始值
// 2. [count, setCount] 这里的写法是一个结构赋值



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {count}
      <br/>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
