// import './App.css';
import Home from './basic/Home'; 
import About  from './basic/About';
import Login from './routes/Login';

import Root from "./routes/root";
import ErrorPage from "./error-page";

import {
  createBrowserRouter,
  RouterProvider,
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
  },
]);

// 进行路由配置

function App() {
  return (
    <BrowserRouter>
      <Link to='/'>首页</Link>
      <Link to='/about'>关于</Link>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about/:id' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
