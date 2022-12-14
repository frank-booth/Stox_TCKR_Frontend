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
import Portfolio from './components/Portfolio'
import EditStock from './components/EditStock'
import AddStock from './components/AddStock'
import AddNote from './components/AddNote'
import EditNote from './components/EditNote'

function App() {
  const API_KEY = process.env.REACT_APP_MARKET_STACK_KEY

  const [users, setUsers] = useState()
  const [stocks, setStocks] = useState()
  const [notes, setNotes] = useState()

  const getAllUsers = async () => {
    let res = await axios.get(`${BASE_URL}/users`)
    setUsers(res.data)
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllStocks = async () => {
    let res = await axios.get(`${BASE_URL}/stocks`)
    setStocks(res.data)
  }

  useEffect(() => {
    getAllStocks()
  }, [])

  const getAllNotes = async () => {
    let res = await axios.get(`${BASE_URL}/notes`)
    setNotes(res.data)
  }

  useEffect(() => {
    getAllNotes()
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
          <Route path="/login" element={<Login users={users} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/users/:userId"
            element={
              <Portfolio stocks={stocks} apiKey={API_KEY} notes={notes} />
            }
          />
          <Route
            path="/users/:userId/editstock"
            element={<EditStock getAllStocks={getAllStocks} />}
          />
          <Route
            path="/users/:userId/addstock"
            element={<AddStock getAllStocks={getAllStocks} />}
          />
          <Route
            path="/users/:userId/addnote"
            element={<AddNote getAllNotes={getAllNotes} />}
          />
          <Route
            path="/users/:userId/editnote"
            element={<EditNote getAllNotes={getAllNotes} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
