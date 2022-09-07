import { Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import StokIcon from '../assets/Stok.png'

const Home = () => {
  return (
    <div className="home-page">
      <Image className="home-image" src={StokIcon} size="huge" centered />

      <NavLink className="home-links" to="/login">
        Login
      </NavLink>
    </div>
  )
}

export default Home
