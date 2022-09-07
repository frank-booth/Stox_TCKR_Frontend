import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <NavLink className="home-links" to="/login">
        Login
      </NavLink>
    </div>
  )
}

export default Home
