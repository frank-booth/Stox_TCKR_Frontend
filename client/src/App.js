import './App.css'
import { BASE_URL } from './globals'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './components/Nav'
import Home from './pages/Home'
import Profile from './pages/Profile'
import EconomicData from './pages/EconomicData'
import News from './pages/News'
import Login from './components/Login'

function App() {
  const [users, setUsers] = useState()

  const getAllUsers = async () => {
    let res = await axios.get(`${BASE_URL}/users`)
    console.log(res.data)
    setUsers(res.data)
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/economic_data" element={<EconomicData />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
