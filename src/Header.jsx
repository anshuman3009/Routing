import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './design.css'
function Header()
{
    return (
        <div>
            <ul>
                <Link to="/cab"><li>CAB</li></Link>
                <NavLink to="/hotel"><li>HOTEL NEW</li></NavLink>
                <Link to="/trains"><li>TRAIN</li></Link>
            </ul>
        </div>
    )
}


export default Header;