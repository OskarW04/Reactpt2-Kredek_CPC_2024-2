import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddAnimal from './pages/AddAnimal'
import './App.css'
import EditAnimal from './pages/EditAnimal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/add' element = {<AddAnimal/>} />
        <Route path='/edit/:name' element = {<EditAnimal/>}/>
      </Routes>
    </Router>
  )
}

export default App
