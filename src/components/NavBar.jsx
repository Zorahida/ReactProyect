import { Link } from "react-router-dom"


function NavBar() {
    return(
        <nav className="Nav">
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/character">Personajes</Link></li>
                <li><Link to="/episode">Episode</Link></li>
                <li><Link to="/Login">Contact us!</Link></li>
            </ul>
        </div>
        </nav>
    )
}
export default NavBar;