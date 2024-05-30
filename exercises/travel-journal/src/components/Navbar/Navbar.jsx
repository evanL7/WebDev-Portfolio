import './Navbar.css'
import worldIcon from '../../assets/world.svg'

function Navbar() {
    return (
        <nav>
            <img src={worldIcon} alt="earth black and white" />
            <h1 className="nav--title">my travel journal.</h1>
        </nav>
    )
}

export default Navbar