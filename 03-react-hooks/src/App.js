import React, { useContext, useState,useEffect,useRef } from 'react'
import Context from './context';
import './App.css';

// Context如果要传递的数据   只需要在整个应用初始化的时候传递一次就可以了
// 就可以选择当前文件里做数据提供

// 如果Context需要传递数据并且将来还需要在对数据做修改  底层组件也需要跟着一起变  咱们写到app.js
function ComA(){
  const count = useContext(Context)
  return (
    <div>
      this is ComA
      <br/>
      app传过来的数据为{count}
      <ComC/>
    </div>
  )
}

function ComC(){
  const count = useContext(Context)
  return (
    <div>
      this is ComC
      <br/>
      app传过来的数据为{count}
    </div>
  )
}

function App() {
  const [count,setCount] = useState(20)
  const [name, setName] = useState('张三')
  
  useEffect(()=>{
    // 定义副作用
    console.log("副作用又执行了")
    document.title = count
    console.log(name);
  },[count,name])

  return (
    <Context.Provider value={count}>
        <div className="App">
            <ComA></ComA>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    </Context.Provider>
  
    
    
  );
}

export default App;
