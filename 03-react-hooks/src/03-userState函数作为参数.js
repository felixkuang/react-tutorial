import { useState} from 'react'
import './App.css';


function Counter(props){
  const [count, setCount] = useState(()=>{
    // 这里的目的为了体现初始值经过一定计算
    // 这个计算是比较广义的概念
    // 只要无法确定 需要通过一定的操作才能获取 就可以理解为计算
    // 循环一万条数据才能确定这里的初始值是什么
  
    return props.count
  })
  return (
    <button onClick={() => setCount(count + 1)}>{count}</button>
  )
}

function App() {
 
  return (
    <div className="App">
      <Counter count={10}/>
      <Counter count={20}></Counter>
    </div>
  );
}

export default App;
