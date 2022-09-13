import { useNavigate, NavLink } from 'react-router-dom'
import StokIcon from '../assets/Stok.png'

const Nav = () => {
  let navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className="nav-bar">
      <img
        className="nav-bar-image"
        src={StokIcon}
        alt="logo icon"
        onClick={handleClick}
      />
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
        <NavLink className="links" to="/login">
          Login
        </NavLink>
        <NavLink className="links" to="/profile">
          Profile
        </NavLink>
      </div>
    </div>
  )
}

export default Nav
