import "./style.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <Link className="link-item" to={"/"}> Notes App</Link>
                <Link className="link-item" to={"/"}> Privacy</Link>
            </div>
            <div className="header-right">
                <Link to={"/login"} className="link-item">Signed in as : Pankaj</Link>
                <Link to={"/login"} className="link-item login-btn">Log out</Link>
            </div>
        </div>
    )
}

export default Header;