import { NavLink } from 'react-router-dom'
import StokIcon from '../assets/Stok.png'

const Nav = () => {
  return (
    <div className="nav-bar">
      <img src={StokIcon} />
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
