import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="nav-links">
        <NavLink className="links" to="/">
          Home
        </NavLink>
        <NavLink className="links" to="/economic_data">
          Economic Data
        </NavLink>
        <NavLink className="links" to="/news">
          News
        </NavLink>
        <NavLink className="links" to="/profile">
          Profile
        </NavLink>
      </div>
    </div>
  )
}

export default Nav
