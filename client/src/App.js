import './App.css'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Nav from './components/Nav'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
