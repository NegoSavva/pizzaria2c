
import logo from '../assets/react.svg'
import { Link } from 'react-router-dom'
const Home = () => {

    return(
        <>
        <link to="/inicio">
        <img src={logo}
        className='img-fluid'
        alt="logo react" />
        </link>
        </>
    )
}

export default Home