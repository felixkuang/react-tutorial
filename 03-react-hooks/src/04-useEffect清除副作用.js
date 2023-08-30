import { useState, useEffect } from 'react'
import './App.css';


function Test() {
  
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("定时器执行了");
    },1000)

    return ()=>{
      // 清理的动作
      clearInterval(timer)
    }
  }, [])

  return (
    <div>this is div</div>
  )
}

function App() {
  const [flag, setFlag] = useState(false)

  return (
    <div className="App">
      {flag ? <Test></Test> : null}
      <button onClick={() => setFlag(!flag)}>Button</button>
    </div>
  );
}

export default App;
