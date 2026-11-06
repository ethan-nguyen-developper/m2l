import './App.css'

import { BrowserRouter, Link, Routes, Route } from "react-router-dom"

import Home from './Home.jsx'
import Form from './Form.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/form">Form</Link> | {" "}
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
