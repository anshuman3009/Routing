import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Outlet } from 'react-router-dom'
import Header from './Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <h1>HELLO I AM APP aka HOME PAGE</h1>
      <Outlet></Outlet>
      <h2>I AM FOOTER</h2>
    </>
  )
}

export default App
