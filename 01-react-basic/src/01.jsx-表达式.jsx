// 1.识别常规的变量
const name = "龙龙老师"
// 2.原生js方法调用
const getAge = ()=>{
  return 18
}
// 3.三元运输符
const flag = true


function App() {
  return (
    <div className="App">
      { name }
      { getAge() }
      { flag ? 'good' : 'fail'}
    </div>
  )
}

export default App
