import { Image } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import StokIcon from '../assets/Stok.png'

const Home = () => {
  let navigate = useNavigate()

  const handleClick = () => {
    navigate('/login')
  }
  return (
    <div className="home-page" onClick={handleClick}>
      <Image
        className="home-image"
        src={StokIcon}
        size="huge"
        alt="logo icon"
        centered
      />
    </div>
  )
}

export default Home
