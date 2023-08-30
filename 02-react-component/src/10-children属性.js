import React from 'react'
import './App.css';

// 渲染列表
function ListItem({children}){
  //children()
  return (
    // <div>ListItem,{children}</div>
    <div>ListItem,{children.map(child=>child)}</div>
  )
}
class App extends React.Component {
  render() {
    return (

      <div className="App">
        <ListItem>
          {/* <div>this is children</div> */}
          {/* {()=>{console.log(123)}} */}
          {/* {<div><p>{'this is p'}</p></div>} */}
          <div>this is div</div>
          <p>this is p</p>
        </ListItem>
      </div>

    );
  }
}


export default App;
