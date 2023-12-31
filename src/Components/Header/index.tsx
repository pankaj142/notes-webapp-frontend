import "./style.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <p> Notes App</p>
                <p>Privacy</p>
            </div>
            <div className="header-right">
                <p>Signed in as : Pankaj</p>
                <p className="login-btn">Log out</p>
            </div>
        </div>
    )
}

export default Header;