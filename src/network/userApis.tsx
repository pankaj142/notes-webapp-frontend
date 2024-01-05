import { IUser } from "../models/user";
import { makeApiCall } from "./apiCall";

export const getLoggedInUser = async () : Promise <IUser> => {
    const response = await makeApiCall(`/api/users`,{
        method : "GET"
    })
    return response.json();
}

interface loginCredential {
    username : string,
    password : string
}

export const login = async (credential : loginCredential) : Promise <IUser> => {
    const response = await makeApiCall(`/api/users/login`, {
        method : "POST",
        headers: { 'Content-Type': 'application/json' },
        body : JSON.stringify(credential)
    })
    return response.json();
}

interface signupCredential {
    username : string,
    email : string,
    password : string
}

export const signup = async (credential : signupCredential) : Promise<IUser> => {
    const response = await makeApiCall(`/api/users/signup`, {
        method : "POST",
        headers : { 'Content-Type' : 'application/json'},
        body : JSON.stringify(credential)
    })
    return response.json();
}

export const logout = async () => {
    await makeApiCall(`/api/users`, {
        method : "POST"
    })
}