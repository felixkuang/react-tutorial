import { createContext } from 'react'

// 1. 调用createContext()方法
// 2. 通过调用顶层组件包裹一下 Context.Provider
// 3. 底层组件 useContext(createContext()返回的对象)

const Context = createContext()

export default Context