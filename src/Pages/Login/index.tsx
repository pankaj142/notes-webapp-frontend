import { RxCross2 } from "react-icons/rx";
import {Link, useNavigate} from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";

const Login = () => {
    const navigate = useNavigate();

    // Intefaces
    interface IFormValues {
        username : string;
        password : string;
    }

    const initialFormValues : IFormValues = {
        username : "",
        password : ""
    }
    const [formValues, setFormValues] = useState<IFormValues>(initialFormValues);
    const [formErrors, setFormErrors] = useState<IFormValues>(initialFormValues);
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    useEffect(() =>{
        if(isFormValid){
            // 1. call the loin api
            // 2. redirect to notes page
            navigate("/");
        }else{
            console.log("form is invalid")
        }
    }, [isFormValid])

    const handleFormFieldChange = (e : any) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value})
    }
    
    const handleFormSubmit = (e : any) => {
        e.preventDefault();
        validateForm(formValues);
    }

    const validateForm = (values : IFormValues) : void => {
        const errors : IFormValues = {
            username : "",
            password : ""
        };
        if(!values.username){
            errors.username = "Username is required!"
        }else if(values.username.length < 5){
            errors.username = "Username should have min 5 charachers!"
        }else if(values.username.length > 10){
            errors.username = "Username should not exceed 10 charachers!"
        }

        if(!values.password){
            errors.password = "Password is required!"
        }else if(values.password.length < 5){
            errors.password = "Password should have min 5 charachers!"
        }else if(values.password.length > 20){
            errors.password = "Password should not exceed 20 charachers!"
        }

        setFormErrors(errors);
        if(errors.username === "" && errors.password === ""){
            setIsFormValid(true)
        }
    }

    return (
        <div className="login">
            <div className="login-form-container">
                <div className="login-form-header">
                    <h3 className="form-title">Log in</h3>
                    <Link to={"/"}><RxCross2 className="cross-icon"/></Link>
                </div>
                <div className="login-form-content">
                    <form onSubmit={handleFormSubmit}>
                        <label className="form-item" htmlFor="username">Username</label>
                        <input className="form-item username-input" name="username" type="text" value={formValues.username} onChange={handleFormFieldChange} placeholder="Username"/>
                        {
                            formErrors.username !== "" ? <p className="form-error-text">*{formErrors.username}</p> : null
                        }
                        
                        <label className="form-item" htmlFor="password">Password</label>
                        <input className="form-item" name="password" type="text" value={formValues.password} onChange={handleFormFieldChange} placeholder="Password" />
                        {
                            formErrors.password !== "" ? <p className="form-error-text">*{formErrors.password}</p>
                            : null
                        }
                        <input className="form-login-btn" type="submit" value="Login"/>
                        <p>Not a user? 
                            <span><Link to={"/"} className="register-link">Register here</Link>
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;