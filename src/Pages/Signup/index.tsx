import { RxCross2 } from "react-icons/rx";
import {Link, useNavigate} from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";

const Signup = () => {
    const navigate = useNavigate();

    // Intefaces
    interface IFormValues {
        username : string;
        password : string;
        email : string;
    }

    const initialFormValues : IFormValues = {
        username : "",
        password : "",
        email : ""
    }
    const [formValues, setFormValues] = useState<IFormValues>(initialFormValues);
    const [formErrors, setFormErrors] = useState<IFormValues>(initialFormValues);
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    useEffect(() => {
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
            password : "",
            email : ""
        };

        if(!values.username){
            errors.username = "Username is required!"
        }else if(values.username.length < 5){
            errors.username = "Username should have min 5 charachers!"
        }else if(values.username.length > 10){
            errors.username = "Username should not exceed 10 charachers!"
        }

        const emailRegex =
        new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, "gm");
        const isValidEmail = emailRegex.test(values.email)

        if(!values.email){
            errors.email = "Email is required!"
        }else if(!isValidEmail){
            errors.email = "Email is not valid!"
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
        <div className="register">
            <div className="register-form-container">
                <div className="register-form-header">
                    <h3 className="form-title">Signup</h3>
                    <Link to={"/"}><RxCross2 className="cross-icon"/></Link>
                </div>
                <div className="register-form-content">
                    <form onSubmit={handleFormSubmit}>
                        <label className="form-item" htmlFor="username">Username</label>
                        <input className="form-item username-input" name="username" type="text" value={formValues.username} onChange={handleFormFieldChange} placeholder="Username"/>
                        {
                            formErrors.username !== "" ? <p className="form-error-text">*{formErrors.username}</p> : null
                        }
                        
                        <label className="form-item" htmlFor="email">Email</label>
                        <input className="form-item email-input" name="email" type="text" value={formValues.email} onChange={handleFormFieldChange} placeholder="Email"/>
                        {
                            formErrors.email !== "" ? <p className="form-error-text">*{formErrors.email}</p> : null
                        }

                        <label className="form-item" htmlFor="password">Password</label>
                        <input className="form-item" name="password" type="text" value={formValues.password} onChange={handleFormFieldChange} placeholder="Password" />
                        {
                            formErrors.password !== "" ? <p className="form-error-text">*{formErrors.password}</p>
                            : null
                        }
                        <input className="form-register-btn" type="submit" value="Signup"/>
                        <p>Already have a account? 
                            <span><Link to={"/login"} className="register-link">Login here</Link>
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;