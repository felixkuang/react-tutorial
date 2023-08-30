import "./App.css"

// jsx 样式控制
// 1.行内样式 - 在元素身上绑定一个style属性即可
//style={{ color: product.isFruit ? 'red' : 'blue',fontSize:'20px' }}
const style = {
  color: 'red',
  fontSize: '30px'
}

// 2.类名样式 - 在元素身边绑定一个className属性即可

// 3.动态控制一下这个active类名，满足条件才有
const activeFlag = true


function App() {
  return (
    <div className="App">
      <span style={style}>this is span</span>
      <span className={activeFlag ? 'active' : ''}>测试类名样式</span>
    </div>
  )
}

export default App
