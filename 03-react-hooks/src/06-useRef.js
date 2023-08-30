import React, { useRef,useEffect } from 'react'
import './App.css';

// 组件实例  类组件
// dom对象   标签
class TestC extends React.Component{
  state={
    name:'test name'
  }
  getName = ()=>{
    return 'this is child Test'
  }
  render(){
    return (
      <div>this is div</div>
    )
  }
}


function App() {

  const testRef = useRef(null)
  const h1Ref = useRef(null)

  useEffect(()=>{
    console.log(testRef.current)
    console.log(h1Ref.current)
  },[])
  // useEffect回调  是在dome渲染之后还是之前？ 之后

  return (
    <div className="App">
      <TestC ref={testRef}></TestC>
      <h1 ref={h1Ref}>this is h1</h1>
    </div>
  );
}

export default App;
