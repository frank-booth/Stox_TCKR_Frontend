import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div>
        <div>
          <NavLink className="links" to="/">
            Home
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Nav
