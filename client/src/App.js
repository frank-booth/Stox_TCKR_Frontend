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
import SignUp from './components/SignUp'

function App() {
  const API_KEY = process.env.REACT_APP_ALPHA_KEY

  const [users, setUsers] = useState()
  const [cpiData, setCpiData] = useState()

  const getAllUsers = async () => {
    let res = await axios.get(`${BASE_URL}/users`)
    console.log(res.data)
    setUsers(res.data)
  }

  // useEffect(() => {
  //   getAllUsers()
  // }, [])

  const getCpiData = async () => {
    let res = await axios.get(
      `https://www.alphavantage.co/query?function=CPI&interval=monthly&apikey=${API_KEY}`
    )
    console.log(res.data)
    setCpiData(res.data)
  }

  //  useEffect(() => {
  //     getCpiData()
  //   }, [])

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
          <Route path="/login" element={<Login users={users} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
