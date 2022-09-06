import './App.css'
import axios from 'axios'
import { BASE_URL } from './globals'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  const API_KEY = process.env.REACT_APP_ALPHA_KEY

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes></Routes>
      </main>
    </div>
  )
}

export default App
