// import './App.css';
import Home from './Home'; 
import About  from './About';
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
import "./index.css";

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
      <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Link to="/">home</Link>
    //   <Link to="/about">about</Link>
    //   <Routes>
    //     <Route path='/' element={<Home/>}></Route>
    //     <Route path='/about/:id' element={<About/>}></Route>
    //     <Route path='/login' element={<Login/>}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
