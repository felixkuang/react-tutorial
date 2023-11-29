import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Login from './Login'
import Board from './Board';
import Article from './Article';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            {/* 定义二级路由嵌套 */}
            {/* 默认二级路由 添加index属性 把它自己的path去掉 */}
            <Route index element={<Board/>}></Route>
            <Route path='article' element={<Article/>}></Route>
        </Route>
        <Route path="/login" element={<Login/>}></Route>
        {/* 当所有路径都没有匹配时渲染此路由 */}
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
