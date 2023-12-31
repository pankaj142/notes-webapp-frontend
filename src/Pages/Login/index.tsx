import { RxCross2 } from "react-icons/rx";
import {Link} from "react-router-dom";
import "./style.css";

const Login = () => {
    return (
        <div className="login">
            <div className="login-form-container">
                <div className="login-form-header">
                    <h3 className="form-title">Log in</h3>
                    <Link to={"/"}><RxCross2 className="cross-icon"/></Link>
                    
                </div>
                <div className="login-form-content">
                    <label className="form-item" htmlFor="username">Username</label>
                    <input className="form-item username-input" type="text" placeholder="Username"/>
                    <label className="form-item" htmlFor="password">Password</label>
                    <input className="form-item" type="text" placeholder="Password" />
                    <div className="form-login-btn">Login</div>
                    <p>Not a user? 
                        <span><Link to={"/"} className="register-link">Register here</Link></span></p>
                </div>
            </div>
        </div>
    )
}

export default Login;